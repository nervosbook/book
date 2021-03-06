import React from 'react'
import { Link } from 'gatsby'
import { colors, media } from 'theme'
import Container from 'components/Container'
import LogoIcon from 'svg/Logo'
import DocSearch from './DocSearch'

const Header = () => (
  <header
    css={{
      backgroundColor: colors.secondary,
      color: colors.text,
      position: 'fixed',
      zIndex: 100,
      width: '100%',
      top: 0,
      left: 0,
      [media.lessThan('small')]: {
        boxShadow: `0 4px 12px 0 rgba(0,0,0,.15)`
      }
    }}
  >
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
          [media.between('small', 'large')]: {
            height: 50
          },
          [media.lessThan('small')]: {
            height: 45
          }
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

        <DocSearch />
      </div>
    </Container>
  </header>
)

export default Header
