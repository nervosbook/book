import React from 'react'
import { colors, media } from 'theme'
import isItemActive from 'utils/isItemActive'
import MetaTitle from '../MetaTitle'
import ChevronSvg from '../ChevronSvg'

class Section extends React.Component {
  state = { uid: ('' + Math.random()).replace(/\D/g, '') }

  render() {
    const {
      createLink,
      isActive,
      location,
      onLinkClick,
      onSectionTitleClick,
      section
    } = this.props

    const uid = 'section_' + this.state.uid

    return (
      <div>
        <button
          aria-expanded={isActive}
          aria-controls={uid}
          css={{
            width: '100%',
            textAlign: 'left',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
            marginTop: 8,
            ':focus': {
              outline: 'none'
            }
          }}
          onClick={onSectionTitleClick}
        >
          <MetaTitle
            cssProps={{
              [media.greaterThan('small')]: {
                fontFamily: 'sans-serif',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 24,
                color: isActive ? colors.text : colors.subtle,
                ':hover': {
                  color: colors.text
                }
              }
            }}
          >
            {section.title}
            <ChevronSvg
              cssProps={{
                flexShrink: '0',
                marginLeft: 7,
                transform: isActive ? 'rotateX(180deg)' : 'rotateX(0deg)',
                transition: 'transform 0.2s ease',

                [media.lessThan('small')]: {
                  display: 'none'
                }
              }}
            />
          </MetaTitle>
        </button>
        <ul
          id={uid}
          css={{
            fontFeatureSettings: "'tnum'",
            marginBottom: 10,

            [media.greaterThan('small')]: {
              display: isActive ? 'block' : 'none'
            }
          }}
        >
          {section.items.map((item, index) => (
            <li
              key={item.id}
              css={{
                padding: '0 24px 0 16px'
              }}
            >
              {createLink({
                isActive: isItemActive(location, item),
                item: item,
                location,
                onLinkClick,
                section
              })}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Section
