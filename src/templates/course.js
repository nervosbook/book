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
  headline: {
    color: '#fff',
    fontWeight: 600,
    marginBottom: 16,
    fontSize: '1.5rem',
    lineHeight: '1.35417em'
  },
  subtitle: {
    color: '#fff',
    marginBottom: 16,
    fontSize: '0.875rem',
    lineHeight: '1.71429em'
  },
  icon: {
    color: 'rgba(33, 33, 33, 0.8)',
    '&:hover': {
      color: '#a7cbd0'
    }
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
              <div css={s.headline}>{course.title}</div>
              <div css={s.subtitle}>{course.desc}</div>
              <div css={s.date}>{course.date}</div>
            </div>
          </Container>
          <HeroDiv css={s.hero} />
        </div>

        <Container>
          <div
            css={{
              width: '100%',
              maxWidth: 620,
              margin: '0 auto 64px'
            }}
          >
            {course.toc.map(el => {
              return (
                <div key={el.title}>
                  {el.title}
                  <ul>
                    {el.items.map(item => (
                      <li key={item.id}>
                        <Link to={slugify(item.id, 'book/en')}>
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
          date
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
