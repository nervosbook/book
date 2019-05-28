import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'components/Layout'
import Container from 'components/Container'
import HeroDiv from 'svg/HeroDiv'
import { colors, media } from 'theme'
import slugify from '../utils/slugify'

const s = {
  root: {
    backgroundColor: '#ffffff',
    width: '100%'
  },
  header: {
    padding: `80px 0 96px`,
    [media.greaterThan('medium')]: {
      paddingBottom: 120
    },
    [media.greaterThan('xlarge')]: {
      paddingBottom: 144
    },
    backgroundColor: colors.primary,
    backgroundImage: `linear-gradient(60deg, #4bda99, #3da274)`,
    position: 'relative'
  },
  date: {
    backgroundColor: '#3da274',
    padding: 4,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 4,
    width: 80,
    fontSize: 12
  },
  title: {
    color: '#fff',
    fontWeight: 600,
    marginBottom: 16,
    fontSize: '1.5rem',
    lineHeight: '1.35417em'
  },
  desc: {
    color: '#fff',
    marginBottom: 16,
    fontSize: '0.875rem',
    lineHeight: '1.71429em'
  },
  hero: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 'auto',
    marginBottom: -1,
    width: '100%'
  }
}

const Course = ({ pageContext, data, location }) => {
  const edge = data.allCourseYaml.edges.filter(
    edge => edge.node.id === pageContext.slug
  )[0]
  const course = edge.node

  return (
    <Layout location={location}>
      <div css={s.root}>
        <div css={s.header}>
          <Container>
            <div
              css={{
                width: '100%',
                maxWidth: 620,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <div css={s.title}>{course.title}</div>
              <div css={s.desc}>{course.desc}</div>
            </div>
          </Container>
          <HeroDiv css={s.hero} />
        </div>

        <Container>
          <div
            css={{
              width: '100%',
              maxWidth: 620,
              margin: '32px auto 64px'
            }}
          >
            {course.toc.map(el => {
              return (
                <div key={el.title} css={{ marginBottom: 32 }}>
                  <div css={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>
                    {el.title}
                  </div>
                  <ul>
                    {el.items.map(item => (
                      <li key={item.id} css={{ margin: 16 }}>
                        <Link
                          to={slugify(item.id, `book/${pageContext.slug}`)}
                          css={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: colors.primary
                          }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allCourseYaml {
      edges {
        node {
          id
          title
          desc
          toc {
            title
            items {
              id
              title
            }
          }
        }
      }
    }
  }
`

export default Course
