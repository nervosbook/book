const resolve = require('path').resolve
const safeLoad = require('js-yaml').safeLoad
const readFileSync = require('fs').readFileSync
const execSync = require('child_process').execSync

const bookDir = resolve(__dirname, `../content/book`)
const rootDir = resolve(__dirname, '..')

function getBooks() {
  const file = readFileSync(`${bookDir}/../index.yml`, 'utf8')
  return safeLoad(file)
}

execSync(`rm -rf ${rootDir}/mobi && mkdir ${rootDir}/mobi`)

getBooks().forEach(book => {
  const fileName = `${rootDir}/epub/book-${book.id}`
  execSync(`kindlegen ${fileName}.epub -o book-${book.id}.mobi`)
  execSync(`mv ${fileName}.mobi ${rootDir}/mobi`)
})

execSync(`rm -rf ${rootDir}/epub`)
