import React from 'react'
import Container from 'components/Container'
import { Link } from 'gatsby'
import { colors, media } from 'theme'
import LogoIcon from 'svg/Logo'

const Footer = ({ layoutHasSidebar = false }) => (
  <footer
    css={{
      backgroundColor: colors.secondary,
      color: colors.black,
      paddingTop: 30,
      paddingBottom: 50
    }}
  >
    <Container>
      <section
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link to="/">
          <LogoIcon
            css={{
              width: 60,
              [media.lessThan('small')]: {
                width: 36
              }
            }}
          />
        </Link>
      </section>

      <p
        css={{
          color: colors.white,
          paddingTop: 15,
          opacity: 0.7,
          fontSize: 12,
          lineHeight: 1.8
        }}
      >
        除非另行特定说明，本站所有文字内容，以及相关视频按照{' '}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          css={{
            color: colors.primary
          }}
        >
          CC-SA 协议
        </a>
        发布。
      </p>
    </Container>
  </footer>
)

export default Footer
