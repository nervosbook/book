import React, { Component } from 'react'
import Container from 'components/Container'
import TitleAndMetaTags from 'components/TitleAndMetaTags'
import Layout from 'components/Layout'
import createOgUrl from 'utils/createOgUrl'
import { colors, media } from 'theme'
import { Link } from 'gatsby'
import HlTitle from 'components/HlTitle'

const s = {
  button: {
    border: `1px solid ${colors.primary}`,
    width: 260,
    height: 50,
    textAlign: 'center',
    color: colors.primary,
    lineHeight: '50px',
    fontSize: 20,
    cursor: 'pointer',
    fontWeight: 600,
    margin: 16
  }
}
class Home extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <TitleAndMetaTags
          title="Nervos CKB"
          ogUrl={createOgUrl('index.html')}
        />
        <div
          css={{
            width: '100%',
            backgroundColor: colors.secondary,
            height: `calc(100vh - 60px)`,
            [media.between('small', 'large')]: {
              height: `calc(100vh - 50px)`
            },
            [media.lessThan('small')]: {
              height: `calc(100vh - 45px)`
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Container>
            <img
              alt="logo"
              src="/nervos_logo.svg"
              css={{
                width: 200,
                margin: '0 auto',
                display: 'block',
                [media.lessThan('small')]: {
                  width: 108
                }
              }}
            />
            <div
              css={{
                textAlign: 'center',
                margin: '3vw auto 35px',
                fontSize: '1.5rem',
                color: colors.white,
                fontFamily: 'Helvetica, sans-serif'
              }}
            >
              A little book about Nervos' story
            </div>
            <div
              css={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                flexDirection: 'column',
                [media.greaterThan('small')]: {
                  width: '70%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  margin: '64px auto 0'
                },
                [media.greaterThan('medium')]: {
                  width: '50%'
                }
              }}
            >
              <Link to="book/zh" css={s.button}>
                中文版
              </Link>
              <Link to="book/en" css={s.button}>
                英文版
              </Link>
            </div>
          </Container>
        </div>
        <div css={{ width: '100%' }}>
          <section css={{ paddingBottom: 64, paddingTop: 64 }}>
            <Container>
              <HlTitle>目录</HlTitle>
              <div css={{ height: 200 }} />
            </Container>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Home
