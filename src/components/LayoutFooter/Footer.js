import React from 'react'
import Container from 'components/Container'
import { Link } from 'gatsby'
import { colors, media } from 'theme'
import LogoIcon from 'svg/Logo'

const Footer = ({ layoutHasSidebar = false }) => (
  <footer
    css={{
      backgroundColor: colors.white,
      color: colors.black,
      paddingTop: 10,
      paddingBottom: 50,

      [media.size('sidebarFixed')]: {
        paddingTop: 40
      }
    }}
  >
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTop: `1px solid ${colors.primary}`,

          [media.between('small', 'medium')]: {
            paddingRight: layoutHasSidebar ? 240 : null
          },

          [media.between('large', 'largerSidebar')]: {
            paddingRight: layoutHasSidebar ? 280 : null
          },
          [media.between('largerSidebar', 'sidebarFixed', true)]: {
            paddingRight: layoutHasSidebar ? 380 : null
          }
        }}
      >
        <section
          css={{
            paddingTop: 40,
            display: 'block !important',
            maxWidth: 300
          }}
        >
          <LogoIcon width={110} />
          <p
            css={{
              color: colors.text,
              paddingTop: 15,
              opacity: 0.7,
              fontSize: 12
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
        </section>
        <div css={{ flexShrink: 0, paddingTop: 40 }}>
          <Link
            to="/about"
            css={{
              display: 'block',
              textDecoration: 'none',
              color: colors.primary,
              fontWeight: 500,
              height: '46.86px',
              lineHeight: '46.86px'
            }}
          >
            关于
          </Link>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
