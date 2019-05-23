const readFileSync = require('fs').readFileSync
const resolve = require('path').resolve
const safeLoad = require('js-yaml').safeLoad

exports.sourceNodes = ({ graphql, actions }) => {
  const { createNode } = actions

  const path = resolve(__dirname, '../../content/index.yml')
  const file = readFileSync(path, 'utf8')
  const courses = safeLoad(file)

  courses.forEach(course => {
    const path = resolve(__dirname, `../../content/book/${course.id}/nav.yml`)
    const file = readFileSync(path, 'utf8')
    const toc = safeLoad(file)

    createNode({
      ...course,
      toc,
      children: [],
      parent: null,
      internal: {
        type: 'CourseYaml',
        contentDigest: JSON.stringify(course)
      }
    })
  })
}
