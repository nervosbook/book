import React, { Component } from 'react'
import Container from 'components/Container'
import TitleAndMetaTags from 'components/TitleAndMetaTags'
import Layout from 'components/Layout'
import createOgUrl from 'utils/createOgUrl'
import CourseList from 'components/CourseList'
import { colors, media } from 'theme'

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
    fontWeight: 600
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
            backgroundColor: '#11355c',
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
              css={{ width: 200, margin: '0 auto', display: 'block' }}
            />
            <div
              css={{
                textAlign: 'center',
                margin: '2.638vw auto 35px',
                fontSize: '1.5rem',
                color: colors.white,
                fontFamliy: 'Helvetica, sans-serif'
              }}
            >
              A little book about Nervos' story
            </div>
            <div
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '50%',
                margin: '72px auto'
              }}
            >
              <div css={s.button}>中文版</div>
              <div css={s.button}>英文版</div>
            </div>
          </Container>
        </div>
        <div css={{ width: '100%' }}>
          <section css={{ paddingBottom: 32 }}>
            <Container>
              <CourseList title="目录" />
            </Container>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Home
