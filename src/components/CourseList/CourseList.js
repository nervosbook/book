import React from 'react'
import { Link } from 'gatsby'
import { colors, media } from 'theme'
import HlTitle from 'components/HlTitle'
import courses from '../../../content/index.yml'

const CourseList = ({ title }) => {
  return (
    <section
      css={{
        marginTop: 48,
        marginBottom: 15,
        marginRight: '-20px',
        marginLeft: '-20px',
        [media.greaterThan('medium')]: { marginTop: 60, marginBottom: 65 }
      }}
    >
      <HlTitle>{title}</HlTitle>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          [media.greaterThan('small')]: {
            flexDirection: 'row',
            flexWrap: 'wrap'
          }
        }}
      >
        {courses.map(({ id, title, image, date, desc }) => (
          <div
            key={id}
            css={{
              width: `calc(100% - 40px)`,
              margin: 20,
              [media.greaterThan('small')]: {
                width: `calc(50% - 40px)`
              },
              [media.greaterThan('medium')]: {
                width: `calc(33.3333% - 40px)`
              }
            }}
          >
            <div
              css={{
                fontSize: 12,
                color: colors.white,
                width: 88,
                margin: '0 auto 8px',
                textAlign: 'center',
                backgroundColor: '#ccc',
                padding: '4px 0',
                borderRadius: 4
              }}
            >
              {date}
            </div>
            <Link
              to={`book/${id}`}
              css={{
                display: 'block',
                boxShadow: `rgba(0, 0, 0, 0.07) 0px 4px 6px`,
                borderRadius: '0 0 8px 8px'
              }}
            >
              <img
                src={image}
                css={{ display: 'block', width: '100%' }}
                alt="cover"
              />
              <div css={{ padding: 8 }}>
                <h3
                  css={{
                    color: colors.text,
                    fontWeight: 400,
                    fontSize: 16,
                    padding: '8px 0'
                  }}
                >
                  {title}
                </h3>
                <p
                  css={{
                    color: colors.subtle,
                    fontSize: 12,
                    padding: '4px 0 8px'
                  }}
                >
                  {desc}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CourseList
