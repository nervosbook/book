import Container from 'components/Container'
import React, { Component } from 'react'
import Sidebar from 'templates/components/Sidebar'
import { colors, media } from 'theme'
import ChevronSvg from 'templates/components/ChevronSvg'

class StickyResponsiveSidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  _openNavMenu = () => {
    this.setState({ open: !this.state.open })
  }

  _closeNavMenu = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    const smallScreenSidebarStyles = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'fixed',
      backgroundColor: colors.white,
      zIndex: 2,
      height: '100vh',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      pointerEvents: open ? 'auto' : 'none'
    }

    const smallScreenBottomBarStyles = {
      display: 'inline-block'
    }

    const iconOffset = open ? 8 : -4
    const menuOpacity = open ? 1 : 0
    const menuOffset = open ? 0 : 40

    return (
      <div
        css={{
          [media.greaterThan('medium')]: {
            width: 298
          }
        }}
      >
        <div
          style={{
            opacity: menuOpacity,
            transition: 'opacity 0.5s ease',
            backgroundColor: '#fff'
          }}
          css={{
            [media.lessThan('medium')]: smallScreenSidebarStyles,
            [media.between('medium', 'sidebarFixed', true)]: {
              position: 'fixed',
              zIndex: 2,
              height: '100%'
            },
            [media.greaterThan('medium')]: {
              position: 'fixed',
              zIndex: 2,
              height: 'calc(100vh - 60px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              backgroundColor: '#f7f7f7',
              opacity: '1 !important',
              width: 298,
              borderRight: '1px solid #ececec'
            }
          }}
        >
          <div
            style={{
              transform: `translate(0px, ${menuOffset}px)`,
              transition: 'transform 0.5s ease'
            }}
            css={{
              marginTop: 60,
              [media.size('xsmall')]: { marginTop: 40 },
              [media.between('small', 'medium')]: { marginTop: 50 },
              [media.between('medium', 'large')]: { marginTop: 50 },
              [media.greaterThan('small')]: { transform: 'none !important' }
            }}
          >
            <Sidebar closeParentMenu={this._closeNavMenu} {...this.props} />
          </div>
        </div>
        <div
          css={
            {
              backgroundColor: colors.primary,
              bottom: 44,
              color: colors.white,
              display: 'none',
              cursor: 'pointer',
              position: 'fixed',
              right: 20,
              zIndex: 3,
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
              [media.lessThan('medium')]: smallScreenBottomBarStyles
            } // iOS Safari's inert "bottom 44px" // gets overriden at small screen sizes
          }
          onClick={this._openNavMenu}
          role="button"
          tabIndex={0}
        >
          <Container>
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: 60,
                [media.between('medium', 'large')]: { height: 50 },
                [media.lessThan('small')]: {
                  height: 60,
                  overflow: 'hidden',
                  alignItems: 'flex-start'
                }
              }}
            >
              <div
                css={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <ChevronSvg
                  size={15}
                  cssProps={{
                    color: colors.white,
                    transform: `translate(2px, ${iconOffset}px) rotate(180deg)`,
                    transition: 'transform 0.2s ease'
                  }}
                />
                <ChevronSvg
                  size={15}
                  cssProps={{
                    color: colors.white,
                    transform: `translate(2px, ${0 - iconOffset}px)`,
                    transition: 'transform 0.2s ease'
                  }}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

export default StickyResponsiveSidebar
