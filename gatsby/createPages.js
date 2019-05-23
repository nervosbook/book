const { resolve } = require('path')

module.exports = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // Used to detect and prevent duplicate redirects
  const redirectToSlugMap = {}

  const docsTemplate = resolve(__dirname, '../src/templates/docs.js')
  const courseTemplate = resolve(__dirname, '../src/templates/course.js')

  // Redirect /index.html to root.
  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/'
  })

  const allCourse = await graphql(`
    {
      allCourseYaml {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (allCourse.errors) {
    console.error(allCourse.errors)
    throw Error(allCourse.errors)
  }

  allCourse.data.allCourseYaml.edges.forEach(edge => {
    const slug = edge.node.id
    createPage({
      path: `book/${slug}`,
      component: courseTemplate,
      context: {
        slug
      }
    })
  })

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)

    throw Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    const createArticlePage = path =>
      createPage({
        path: path,
        component: docsTemplate,
        context: {
          slug
        }
      })

    // Register primary URL.
    createArticlePage(slug)
  })
}
