import { createElement } from 'glamor/react'
import { colors } from 'theme'

const HlTitle = ({
  children,
  lineWidth = 32,
  color = colors.text,
  borderColor = colors.primary,
  type = 'div',
  center = true,
  fontSize = 20,
  marginBottom = 32,
  marginTop,
  ...rest
}) =>
  createElement(
    type,
    {
      css: {
        fontSize,
        color,
        opacity: 0.7,
        marginTop,
        marginBottom,
        fontWeight: 500,
        textAlign: 'center',
        position: 'relative',
        '::before': {
          content: ' ',
          width: lineWidth,
          position: 'absolute',
          borderBottom: `4px solid ${borderColor}`,
          bottom: '-12px',
          left: center ? '50%' : 0,
          marginLeft: center ? `-${lineWidth / 2}px` : 0
        }
      },
      ...rest
    },
    children
  )

export default HlTitle
