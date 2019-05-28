import React from 'react'
import { media } from 'theme'

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
          src="https://img.haoqicat.com/2019031834.jpg"
          css={{ width: '100%' }}
        />
      </div>
      <div
        css={{
          width: '535px',
          marginTop: '75px',
          fontFamily: 'Crete Round, Georgia, Times New Roman, Times, serif',
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
            color: '#e5533c',
            marginTop: '35px',
            [media.lessThan('medium')]: {
              marginTop: 0
            }
          }}
        >
          Nervos
        </div>
        <div
          css={{
            color: '#14877e',
            fontSize: '18px',
            marginTop: '20px',
            position: 'relative',
            fontFamily: 'myriad-pro, Arial, sans-serif',
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
            fontFamily: 'myriad-pro, Arial, sans-serif',
            fontWeight: '400',
            lineHeight: '1.5',
            marginTop: '40px'
          }}
        >
          《Nervos》是一本带初学者学会了解 Nervos 的书。
        </div>
      </div>
    </div>
  </div>
)

export default BookIntro
