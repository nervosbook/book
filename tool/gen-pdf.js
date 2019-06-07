const resolve = require('path').resolve
const readFileSync = require('fs').readFileSync
const writeFileSync = require('fs').writeFileSync
const safeLoad = require('js-yaml').safeLoad
const execSync = require('child_process').execSync
const ejs = require('ejs')

const bookDir = resolve(__dirname, `../content/book`)
const tempDir = resolve(__dirname, `./template`)

function getBooks() {
  const file = readFileSync(`${bookDir}/../index.yml`, 'utf8')
  return safeLoad(file)
}

function readBookToc(bookId) {
  const file = readFileSync(`${bookDir}/${bookId}/nav.yml`, 'utf8')
  return safeLoad(file)
}

function getChapterContent(sections, bookId) {
  return sections
    .map(section => {
      const path = `${bookDir}/${bookId}/${section.id}.md`

      // convert markdown to html
      const html = execSync(`pandoc -f markdown -t html ${path}`).toString()

      return `<section class="section" id="${section.id}">\n<h1>${
        section.title
      }</h1>\n${html}</section>`
    })
    .join('\n')
}

function getTocContent(toc) {
  return toc
    .map(el => {
      const list = el.items
        .map(item => {
          return `<li class="section">\n<a href="#${item.id}">${
            item.title
          }</a>\n</li>`
        })
        .join('\n')

      return `<li class="chapter">\n<a href="#${el.title}">${
        el.title
      }</a>\n<ul>${list}</ul>\n</li>`
    })
    .join('\n')
}

execSync(`rm -rf pdf && mkdir pdf`)

getBooks().forEach(book => {
  const toc = readBookToc(book.id)
  const content = toc
    .map(el => {
      const chapter = getChapterContent(el.items, book.id)
      return `<section class="chapter" id="${el.title}">\n<h1>${
        el.title
      }</h1>\n${chapter}\n</section>`
    })
    .join('\n')

  const tocContent = getTocContent(toc)
  const tempFile = readFileSync(`${tempDir}/${book.id}.html`, 'utf8')
  const bookHtml = ejs.render(`${tempFile}`, { content, toc: tocContent })

  const bookHtmlPath = `${tempDir}/book-${book.id}.html`
  writeFileSync(bookHtmlPath, bookHtml)

  // convert html file to pdf ebook
  execSync(
    `prince ${bookHtmlPath} && mv ${tempDir}/*.pdf pdf && rm ${bookHtmlPath} `
  )
})
