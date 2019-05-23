module.exports = {
  siteMetadata: {
    title: 'Learning nervos site'
  },
  plugins: [
    'gatsby-transformer-course-yaml',
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#61dafb'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 640
            }
          },
          `gatsby-remark-autolink-headers`,
          'gatsby-remark-use-jsx',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'gatsby-code-'
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-126744557-1'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links'
  ]
}
