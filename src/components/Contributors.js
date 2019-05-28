import React from 'react'
import { media, colors } from 'theme'

const Contributors = () => (
  <div css={{ marginBottom: '30px' }}>
    <div
      css={{
        minHeight: '140px',
        background: colors.secondary,
        letterSpacing: '1px',
        fontSize: '30px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }}
    >
      <a
        href="https://github.com/happypeter/gitbeijing/graphs/contributors"
        css={{
          color: colors.primary
        }}
      >
        GitHub 贡献者页面
      </a>
    </div>
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        [media.lessThan('medium')]: {
          flexDirection: 'column',
          padding: '16px'
        }
      }}
    >
      <div css={s.card}>
        <img
          src="https://img.haoqicat.com/2019031822.jpg"
          alt="happypeter"
          css={s.img}
        />
        <div css={s.text}>
          <div css={s.name}>happypeter</div>
          <div css={s.job}>
            <a href="http://haoduoshipin.com" css={s.a}>
              好多视频网创始人
            </a>
          </div>
          本书作者。欢迎添加 Peter 微信：happypeter1983 。
        </div>
      </div>
    </div>
    <div css={{ margin: '50px auto 100px' }}>
      <img
        src="https://img.haoqicat.com/2019031899.png"
        height="102"
        width="250"
        alt="people"
        css={{
          display: 'block',
          margin: '0 auto'
        }}
      />
    </div>
  </div>
)

export default Contributors

const s = {
  card: {
    width: '100%',
    position: 'relative',
    background: '#fff',
    padding: '2em',
    borderRight: '30px solid #fff',
    minHeight: '147px',
    margin: '50px auto',
    ':before': {
      content: '""',
      position: 'absolute',
      zIndex: '-1',
      transform: 'skew(-3deg, -2deg)',
      bottom: '14px',
      boxShadow: '0 16px 5px rgba(0, 0, 0, 0.2)',
      height: '50px',
      left: '1px',
      maxWidth: '50%',
      width: '50%'
    }
  },
  img: {
    width: '60px',
    display: 'table-cell',
    float: 'left',
    borderRadius: '50%',
    marginRight: '20px',
    marginBottom: '50px'
  },
  text: {
    display: 'table-cell',
    fontSize: '14px'
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontFamily: 'Crete Round',
    fontStyle: 'italic',
    color: '#e5533c'
  },
  job: {
    marginBottom: '15px'
  },
  a: {
    ':hover': {
      textDecoration: 'underline'
    }
  }
}
