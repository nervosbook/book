import React from 'react'
import { colors } from 'theme'

const MetaTitle = ({ children, cssProps = {}, onDark = false }) => (
  <div
    css={{
      color: onDark ? colors.subtleOnDark : colors.subtle,
      fontSize: 18,
      fontWeight: 500,
      lineHeight: '44px',
      letterSpacing: '0.08em',
      ...cssProps
    }}
  >
    {children}
  </div>
)

export default MetaTitle
