import React from 'react'
import Container from 'components/Container'
import TitleAndMetaTags from 'components/TitleAndMetaTags'
import Layout from 'components/Layout'
import { colors, media } from 'theme'
import createOgUrl from 'utils/createOgUrl'
import HlTitle from 'components/HlTitle'
import HeroDiv from 'svg/HeroDiv'
import GitHub from 'svg/GitHub'
import ZhiHu from 'svg/ZhiHu'
import Twitter from 'svg/Twitter'

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <TitleAndMetaTags title="about" ogUrl={createOgUrl('about.html')} />
      <div css={{ width: '100%' }}>
        <header
          css={{
            position: 'relative',
            backgroundColor: colors.primary,
            backgroundImage: `linear-gradient(60deg, #4bda99, #3da274)`,
            color: colors.white,
            paddingTop: 32
          }}
        >
          <Container>
            <div
              css={{
                paddingTop: 32,
                display: 'flex',
                flexDirection: 'column',
                [media.greaterThan('small')]: {
                  flexDirection: 'row',
                  alignItems: 'center'
                }
              }}
            >
              <div
                css={{
                  width: '100%',
                  marginBottom: 24,
                  [media.greaterThan('medium')]: {
                    width: '50%'
                  }
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 32
                  }}
                >
                  <HlTitle
                    center={false}
                    color="#fff"
                    borderColor="#fff"
                    marginBottom={0}
                  >
                    关于作者
                  </HlTitle>
                  <a
                    href="https://github.com/happypeter"
                    css={{ textDecoration: 'none', display: 'block' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub
                      css={{
                        fill: '#fff',
                        marginLeft: 16
                      }}
                    />
                  </a>
                  <a
                    href="https://zhihu.com/people/peterlovemoney"
                    css={{ textDecoration: 'none', display: 'block' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ZhiHu
                      css={{
                        fill: '#fff',
                        marginLeft: 16
                      }}
                    />
                  </a>
                  <a
                    href="https://twitter.com/happypeter1983"
                    css={{ textDecoration: 'none', display: 'block' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter
                      css={{
                        fill: '#fff',
                        marginLeft: 16
                      }}
                    />
                  </a>
                </div>
                <div
                  css={{
                    lineHeight: 2.6,
                    fontSize: 14,
                    color: '#fff'
                  }}
                >
                  王广忠，网名 happypeter，硕士，2006年开始进行 Linux Kernel
                  开发，是开源运动的坚定支持者。Git
                  版本控制工具的早期布道者，目前他的 GIthub 上有3.6K的 follower
                  。曾就职于中科红旗与亚洲各国联合成立的 Asianux
                  实验室，从事系统升级器的研发，使用过 C/C++/Python/PHP/Ruby/JS
                  等多种编程语言，精通 RubyOnRails 和 React
                  框架。好奇猫网络科技公司创始人兼 CTO
                  ，2014年开始从事比特币全职工作，曾就职于云币网。
                </div>
              </div>

              <div
                css={{
                  width: '100%',
                  [media.greaterThan('medium')]: {
                    width: '50%',
                    flexShrink: 0
                  }
                }}
              >
                <img
                  css={{
                    display: 'block',
                    width: '100%'
                  }}
                  src="/peter.png"
                  alt="avatar"
                />
              </div>
            </div>
          </Container>
          <HeroDiv
            css={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: 'auto',
              marginBottom: -1,
              width: '100%'
            }}
          />
        </header>

        <Container>
          <section
            css={{
              marginTop: 24,
              marginBottom: 48,
              [media.greaterThan('medium')]: {
                marginTop: 48,
                marginBottom: 88
              }
            }}
          >
            <HlTitle>关于本站</HlTitle>
            <p css={{ color: '#666', fontSize: 14, lineHeight: 2 }}>
              这里是 Nervos 学习站。不仅提供 Nervos 相关的视频教程，也提供区块链
              DApp 开发相关的各种基础编程教程，涵盖密码学、React 和 JS
              开发、Unix 命令行和 Git 版本控制等。
            </p>
          </section>
        </Container>
        <Container>
          <section
            css={{
              marginTop: 24,
              marginBottom: 48,
              [media.greaterThan('medium')]: {
                marginTop: 48,
                marginBottom: 64
              }
            }}
          >
            <HlTitle>本站动态</HlTitle>
            <div
              css={{
                height: '100%',
                padding: '24px 0',
                position: 'relative',
                '::before': {
                  content: '" "',
                  position: 'absolute',
                  width: 2,
                  top: 0,
                  bottom: 0,
                  left: '50%',
                  marginLeft: -1,
                  background: '#ececec'
                }
              }}
            >
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 auto 32px',
                  fontSize: 14,
                  opacity: 0.7
                }}
              >
                <div
                  css={{
                    padding: 16,
                    width: '50%',
                    textAlign: 'right',
                    lineHeight: 2,
                    color: colors.primary
                  }}
                >
                  2018-09-21
                </div>
                <div
                  css={{
                    padding: 16,
                    width: '50%',
                    lineHeight: 2,
                    position: 'relative',
                    '::before': {
                      content: ' ',
                      position: 'absolute',
                      width: 10,
                      height: 10,
                      border: '2px solid #fff',
                      borderRadius: '50%',
                      left: -5,
                      top: '50%',
                      marginTop: -4,
                      background: colors.primary
                    }
                  }}
                >
                  网站正式上线
                </div>
              </div>
              <div css={s.item}>
                <div css={s.left}>
                  发布课程《基于 Nervos AppChain 的 DApp 开发》
                </div>
                <div css={[s.right, s.date]}>2018-9-24</div>
              </div>
              <div css={s.item}>
                <div css={[s.left, s.date]}>2018-10-24</div>
                <div css={s.right}>发布课程《区块链背后的密码学》</div>
              </div>
              <div css={s.item}>
                <div css={s.left}>发布课程《React 破冰之旅》</div>
                <div css={[s.right, s.date]}>2018-11-22</div>
              </div>
              <div css={s.item}>
                <div css={[s.left, s.date]} />
                <div css={s.right}>持续更新中...</div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </Layout>
  )
}

const s = {
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto 32px',
    fontSize: 14,
    opacity: 0.7
  },
  date: {
    color: colors.primary
  },
  left: {
    padding: 16,
    width: '50%',
    textAlign: 'right',
    lineHeight: 2
  },
  right: {
    padding: 16,
    width: '50%',
    lineHeight: 2,
    position: 'relative',
    '::before': {
      content: ' ',
      position: 'absolute',
      width: 10,
      height: 10,
      border: '2px solid #fff',
      borderRadius: '50%',
      left: -5,
      top: '50%',
      marginTop: -4,
      background: colors.primary
    }
  }
}
export default About
