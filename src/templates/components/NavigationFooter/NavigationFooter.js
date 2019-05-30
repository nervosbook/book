import React from 'react'
import { Link } from 'gatsby'
import { colors } from 'theme'
import ArrowBackIcon from 'svg/ArrowBack'
import ArrowForwardIcon from 'svg/ArrowForward'

const NavigationFooter = ({ next, prev, location }) => {
  return (
    <div
      css={{
        color: colors.text,
        paddingTop: 50,
        paddingBottom: 50,
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '-8px',
        marginRight: '-8px'
      }}
    >
      {prev && (
        <PrimaryLink location={location} to={`${prev.id}.html`}>
          <ArrowBackIcon
            css={{
              fill: 'rgba(33,33,33,.8)',
              flexShrink: 0,
              marginLeft: 12
            }}
          />
          <div css={{ padding: 16 }}>
            <SecondaryLabel>Previous</SecondaryLabel>
            <PrimaryLabel>{prev.title}</PrimaryLabel>
          </div>
        </PrimaryLink>
      )}

      {next && (
        <PrimaryLink location={location} to={`${next.id}.html`}>
          <div css={{ padding: 16 }}>
            <SecondaryLabel>Next</SecondaryLabel>
            <PrimaryLabel>{next.title}</PrimaryLabel>
          </div>
          <ArrowForwardIcon
            css={{
              fill: 'rgba(33,33,33,.8)',
              flexShrink: 0,
              marginRight: 12
            }}
          />
        </PrimaryLink>
      )}
    </div>
  )
}

export default NavigationFooter

const PrimaryLink = ({ children, to, location }) => {
  // quick fix
  // TODO: replace this with better method of getting correct full url
  const updatedUrl =
    (location && location.pathname.replace(/\/[^/]+\.html/, '/' + to)) || to
  return (
    <Link
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: 'none',
        width: '100%',
        margin: 8,
        border: '1px solid #E6ECF1',
        boxShadow: `0 3px 8px 0 rgba(116, 129, 141, 0.1)`,
        ':hover': {
          borderColor: colors.primary
        }
      }}
      to={updatedUrl}
    >
      {children}
    </Link>
  )
}

const SecondaryLabel = ({ children }) => (
  <div
    css={{
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1.625'
    }}
  >
    {children}
  </div>
)

const PrimaryLabel = ({ children }) => (
  <div
    css={{
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.5'
    }}
  >
    {children}
  </div>
)
