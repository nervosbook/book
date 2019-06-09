const resolve = require('path').resolve
const safeLoad = require('js-yaml').safeLoad
const readFileSync = require('fs').readFileSync
const writeFileSync = require('fs').writeFileSync
const execSync = require('child_process').execSync

const bookDir = resolve(__dirname, `../content/book`)
const curDir = resolve(__dirname, '.')
const rootDir = resolve(__dirname, '..')

function getBooks() {
  const file = readFileSync(`${bookDir}/../index.yml`, 'utf8')
  return safeLoad(file)
}

function readBookToc(bookId) {
  const file = readFileSync(`${bookDir}/${bookId}/nav.yml`, 'utf8')
  return safeLoad(file)
}

function addSectionTitle(item, bookId) {
  const lines = readFileSync(`${bookDir}/${bookId}/${item.id}.md`, 'utf8')
    .trim()
    .split('\n')
  const idx = lines.indexOf('---', 3)
  if (idx != -1) {
    const content =
      '\n' + `# ${item.title}` + '\n' + lines.slice(idx + 1).join('\n')
    writeFileSync(`${curDir}/doc-${bookId}/${item.id}.md`, content)
  } else {
    console.log('The file content in the wrong format.')
  }
}

execSync(`rm -rf ${rootDir}/epub && mkdir ${rootDir}/epub`)

getBooks().forEach(book => {
  // create temporay dir to store modified files
  execSync(`cd ${curDir} && rm -rf doc-${book.id} && mkdir doc-${book.id}`)
  const toc = readBookToc(book.id)
  const fileList = toc
    .map(el => {
      return el.items
        .map(item => {
          addSectionTitle(item, book.id)
          return `${curDir}/doc-${book.id}/${item.id}.md`
        })
        .join(' ')
    })
    .join(' ')

  const genEpub = `
  pandoc -t epub --no-highlight ${curDir}/template/epub-meta.txt \
  ${fileList} -o ${rootDir}/epub/book-${book.id}.epub
  `
  execSync(genEpub)

  const cleanTemp = `rm -rf ${curDir}/doc-${book.id}`
  execSync(cleanTemp)
})
