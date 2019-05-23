import MarkdownPage from 'components/MarkdownPage'
import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import { createLinkDocs } from 'utils/createLink'
import { sectionListByLocation } from 'utils/sectionListByLocation'

const Docs = ({ data, location }) => (
  <Layout location={location} hideFooter>
    <MarkdownPage
      createLink={createLinkDocs}
      location={location}
      markdownRemark={data.markdownRemark}
      sectionList={sectionListByLocation(location)}
    />
  </Layout>
)

export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        next
        prev
      }
      fields {
        path
        slug
      }
    }
  }
`

export default Docs
