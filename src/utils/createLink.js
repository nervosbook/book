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
  height: 24,
  borderLeft: `4px solid ${colors.primary}`,
  position: 'absolute',
  left: 0,
  marginTop: -2,

  [media.greaterThan('largerSidebar')]: {
    left: 16
  }
}

const linkCss = {
  fontFamily: 'sans-serif',
  color: colors.text,
  display: 'inline-block',
  borderBottom: '1px solid transparent',
  transition: 'border 0.2s ease',
  marginTop: 5,
  fontSize: 14,
  lineHeight: 1.5,
  '&:hover': {
    color: colors.subtle
  }
}

export { createLinkDocs }
