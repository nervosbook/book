import { Link } from 'gatsby'
import React from 'react'
import slugify from 'utils/slugify'
import { colors, media } from 'theme'

const createLinkDocs = ({ isActive, item, section }) => {
  return (
    <Link
      css={[linkCss, isActive && activeLinkCss]}
      to={slugify(item.id, section.directory)}
    >
      {isActive && <span css={activeLinkBefore} />}
      {item.title}
    </Link>
  )
}

const activeLinkCss = {
  fontWeight: 500
}

const activeLinkBefore = {
  width: 4,
  borderLeft: `4px solid ${colors.primary}`,
  position: 'absolute',
  left: '-36px',
  marginTop: -2,
  top: 7,
  bottom: 7,
  [media.greaterThan('largerSidebar')]: {
    left: '-32px'
  }
}

const linkCss = {
  position: 'relative',
  fontFamily: 'sans-serif',
  color: colors.text,
  display: 'inline-block',
  borderBottom: '1px solid transparent',
  transition: 'border 0.2s ease',
  fontSize: 14,
  lineHeight: 1.5,
  padding: '7px 0',
  '&:hover': {
    color: colors.subtle
  }
}

export { createLinkDocs }
