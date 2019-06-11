import React from 'react'
import { media } from 'theme'

const Author = () => (
  <div>
    <div css={{ padding: 16, backgroundColor: '#f5f5f5' }}>
      <div
        css={{
          position: 'relative',
          marginBottom: '3em',
          padding: '2em',
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
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
              color: '#4BBC8E'
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
