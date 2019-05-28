import React from 'react'
import { media, colors } from 'theme'

const Author = () => (
  <div>
    <div
      css={{
        marginTop: 50,
        minHeight: 140,
        background: colors.secondary,
        textAlign: 'center',
        letterSpacing: 1,
        fontSize: 30,
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }}
    >
      <a
        href="https://github.com/happypeter/gitbeijing"
        css={{
          color: colors.primary
        }}
      >
        LAST UPDATE: May 2019
      </a>
    </div>
    <div css={{ padding: 16 }}>
      <div
        css={{
          position: 'relative',
          marginBottom: '3em',
          background: '#fff',
          padding: '2em',
          borderRight: '30px solid #fff',
          minHeight: 147,
          width: 800,
          [media.lessThan('medium')]: {
            width: '100%'
          },
          margin: '50px auto',
          ':before': {
            content: '',
            position: 'absolute',
            zIndex: '-1',
            transform: `skew(-3deg, -2deg)`,
            bottom: 14,
            boxShadow: '0 16px 5px rgba(0, 0, 0, 0.2)',
            height: 50,
            left: 1,
            maxWidth: '50%',
            width: '50%'
          }
        }}
      >
        <img
          src="https://img.haoqicat.com/2019031822.jpg"
          alt="peter"
          css={{
            width: 60,
            display: 'table-cell',
            float: 'left',
            borderRadius: '50%',
            marginRight: 20,
            marginBottom: 50
          }}
        />
        <div
          css={{
            display: 'table-cell',
            fontSize: 14
          }}
        >
          <div
            css={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
              fontFamily: 'Crete Round',
              fontStyle: 'italic',
              color: '#e5533c'
            }}
          >
            happypeter
          </div>
          <div
            css={{
              marginBottom: 15,
              ':hover': {
                textDecoration: 'underline'
              }
            }}
          >
            <a href="https://haoqicat.com">本书作者，好奇猫学院主播</a>
          </div>
          挥汗写下本书，致敬 Nervos
        </div>
      </div>
    </div>
  </div>
)

export default Author
