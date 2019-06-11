import React from 'react'
import { media, colors } from 'theme'

const BookIntro = () => (
  <div
    css={{
      width: '100%',
      margin: '0 auto'
    }}
  >
    <div
      css={{
        width: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        [media.lessThan('medium')]: {
          width: '100%',
          flexDirection: 'column'
        }
      }}
    >
      <div
        css={{
          marginTop: '75px',
          width: '400px',
          [media.lessThan('medium')]: {
            width: '100%'
          }
        }}
      >
        <img
          alt="git"
          src="https://img.haoqicat.com/2019052802.jpg"
          css={{ width: '100%' }}
        />
      </div>
      <div
        css={{
          width: '535px',
          marginTop: '75px',
          [media.lessThan('medium')]: {
            width: '100%',
            marginTop: '0',
            padding: '16px'
          }
        }}
      >
        <div
          css={{
            fontSize: '30px',
            color: colors.primary,
            marginTop: '35px',
            [media.lessThan('medium')]: {
              marginTop: 0
            }
          }}
        >
          The Nervos Community Book
        </div>
        <div
          css={{
            color: '#4BBC8E',
            fontSize: '18px',
            marginTop: '20px',
            position: 'relative',
            fontWeight: '400',
            lineHeight: '1.5',
            ':after': {
              content: '""',
              width: '100%',
              borderBottom: '1px solid #e1e1e0',
              position: 'absolute',
              bottom: '-25px',
              left: '0'
            }
          }}
        >
          <a href="https://github.com/happypeter">happypeter</a>
        </div>
        <div
          css={{
            color: '#333',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.5',
            marginTop: '40px'
          }}
        >
          《The Nervos Community Book》是一本带初学者学会了解 Nervos 的书。
        </div>
      </div>
    </div>
  </div>
)

export default BookIntro
