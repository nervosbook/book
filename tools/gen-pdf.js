const resolve = require('path').resolve
const readFileSync = require('fs').readFileSync
const writeFileSync = require('fs').writeFileSync
const safeLoad = require('js-yaml').safeLoad
const execSync = require('child_process').execSync
const ejs = require('ejs')

const bookDir = resolve(__dirname, `../content/book`)
const tempDir = resolve(__dirname, `./template`)

const sectionTemp = `
  <section class="<%- className %>" id="<%- id %>">
    <h1>
      <%- title %>
    </h1>
    <%- html %>
  </section>
`

const liTemp = `
  <li class="<%- className %>">
    <a href="#<%- id %>">
      <%- title %>
    </a>
    <% if (!!html) { %>
    <ul>
      <%- html %>
    </ul>
    <% } %>
  </li>
`

// There are two versions of the ebook
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
      try {
        return ejs.render(sectionTemp, {
          className: 'section',
          id: section.id,
          title: section.title,
          html
        })
      } catch (err) {
        console.log('ejs render section err...', err)
      }
    })
    .join('\n')
}

function getTocContent(toc) {
  return toc
    .map(el => {
      const html = el.items
        .map(item =>
          ejs.render(liTemp, {
            className: 'section',
            id: item.id,
            title: item.title,
            html: ''
          })
        )
        .join('\n')
      return ejs.render(liTemp, {
        className: 'chapter',
        id: el.title,
        title: el.title,
        html
      })
    })
    .join('\n')
}

// Remove old pdf directory, then create a new one in the directory executing this script
execSync(`rm -rf pdf && mkdir pdf`)

getBooks().forEach(book => {
  const toc = readBookToc(book.id)
  const content = toc
    .map(el => {
      const html = getChapterContent(el.items, book.id)
      try {
        const result = ejs.render(sectionTemp, {
          className: 'chapter',
          id: el.title,
          title: el.title,
          html
        })
        return result
      } catch (err) {
        console.log('ejs render chapter err...', err)
      }
    })
    .join('\n')

  const bookTemp = readFileSync(`${tempDir}/${book.id}.html`, 'utf8')
  const bookHtml = ejs.render(bookTemp, { content, toc: getTocContent(toc) })
  const bookHtmlPath = `${tempDir}/book-${book.id}.html`
  writeFileSync(bookHtmlPath, bookHtml)
  // convert html file to pdf ebook
  execSync(
    `prince ${bookHtmlPath} && mv ${tempDir}/*.pdf pdf && rm ${bookHtmlPath} `
  )
})
