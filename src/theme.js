import hex2rgba from 'hex2rgba';

const colors = {
  dark: '#282c34',
  subtle: '#6d6d6d',
  subtleOnDark: '#999',
  gray: '#ececec',
  white: '#ffffff',
  black: '#000000',
  header: '#ececec',
  primary: '#45c289',
  text: '#212121'
};

const SIZES = {
  xsmall: { min: 0, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity },

  // Sidebar/nav related tweakpoints
  largerSidebar: { min: 1100, max: 1339 },
  sidebarFixed: { min: 2000, max: Infinity },

  // Topbar related tweakpoints
  expandedSearch: { min: 1180, max: Infinity }
};

const media = {
  between(smallKey, largeKey, excludeLarge) {
    if (excludeLarge) {
      return `@media (min-width: ${
        SIZES[smallKey].min
      }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`;
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
          SIZES[largeKey].max
        }px)`;
      }
    }
  },

  greaterThan(key) {
    return `@media (min-width: ${SIZES[key].min}px)`;
  },

  lessThan(key) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`;
  },

  size(key) {
    const size = SIZES[key];

    if (size.min == null) {
      return media.lessThan(key);
    } else if (size.max == null) {
      return media.greaterThan(key);
    } else {
      return media.between(key, key);
    }
  }
};

const fonts = {
  header: {
    fontSize: 30,
    lineHeight: '65px',
    fontWeight: 700,

    [media.lessThan('small')]: {
      overflowWrap: 'break-word',
      wordBreak: 'break-word'
    },

    [media.lessThan('medium')]: {
      fontSize: 25,
      lineHeight: '45px'
    }
  },
  small: {
    fontSize: 14
  }
};

// Shared styles are generally better as components,
// Except when they must be used within nested CSS selectors.
// This is the case for eg markdown content.
const linkStyle = {
  borderBottom: `1px solid ${hex2rgba(colors.primary, 0.2)}`,
  color: colors.primary,
  wordBreak: 'break-word'
};
const sharedStyles = {
  link: linkStyle,

  articleLayout: {
    container: {
      display: 'flex',
      minHeight: 'calc(100vh - 60px)',
      width: '100%',
      maxWidth: 640,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    content: {
      marginTop: 40,
      marginBottom: 80,

      [media.greaterThan('medium')]: {
        marginTop: 50
      }
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid green',
      marginRight: 80
    },

    editLink: {
      color: colors.primary,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem'
    }
  },

  markdown: {
    lineHeight: '25px',

    '& .gatsby-highlight': {
      marginTop: 25,
      marginBottom: 25,

      [media.lessThan('small')]: {
        borderRadius: 0
      }
    },

    '& a:not(.anchor):not(.gatsby-resp-image-link)': linkStyle,

    '& p': {
      color: 'rgba(0, 0, 0, 0.75)',
      marginTop: 30,
      fontSize: 16,
      lineHeight: 2.2,
      wordBreak: 'break-word',
      '&:first-of-type': {
        marginTop: 15
      },

      '&:first-child': {
        marginTop: 0
      },

      [media.lessThan('large')]: {
        marginTop: 25
      }
    },

    '& h3 + p, & h3 + p:first-of-type': {
      marginTop: 20
    },

    '& p > code, & li > code': {
      background: hex2rgba(colors.gray, 0.2),
      color: colors.text
    },

    '& p > code, & li > code, & p > a > code, & li > a > code': {
      padding: '0 3px',
      fontSize: '0.94em', // 16px on 17px text, smaller in smaller text
      wordBreak: 'break-word'
    },

    '& hr': {
      height: 1,
      marginBottom: -1,
      border: 'none',
      borderBottom: `1px solid ${colors.gray}`,
      marginTop: 40,

      ':first-child': {
        marginTop: 0
      }
    },

    '& h1': {
      lineHeight: 1.2,
      color: '#2c3e50',
      [media.size('xsmall')]: {
        fontSize: 25
      },

      [media.between('small', 'large')]: {
        fontSize: 30
      }
    },

    '& h2': {
      borderTop: `1px solid ${colors.gray}`,
      marginTop: 44,
      paddingTop: 40,
      lineHeight: 1.2,
      color: '#2c3e50',
      ':first-child': {
        borderTop: 0,
        marginTop: 0,
        paddingTop: 0
      },

      [media.lessThan('large')]: {
        fontSize: 20
      },
      [media.greaterThan('xlarge')]: {
        fontSize: 25
      }
    },

    '& hr + h2': {
      borderTop: 0,
      marginTop: 0
    },

    '& h3': {
      paddingTop: 45,
      color: '#2c3e50',
      [media.lessThan('small')]: {
        overflowWrap: 'break-word',
        wordBreak: 'break-word'
      },

      [media.greaterThan('xlarge')]: {
        fontSize: 25,
        lineHeight: 1.3
      }
    },

    '& h2 + h3, & h2 + h3:first-of-type': {
      paddingTop: 30
    },

    '& h4': {
      fontSize: 20,
      lineHeight: 1.3,
      marginTop: 50,
      fontWeight: 400,
      color: '#2c3e50'
    },

    '& h4 + p': {
      marginTop: 20
    },

    '& ol, & ul': {
      marginTop: 20,
      fontSize: 16,
      color: colors.text,
      paddingLeft: 20,

      '& p, & p:first-of-type': {
        fontSize: 16,
        marginTop: 0,
        lineHeight: 1.2
      },

      '& li': {
        marginTop: 10
      },

      '& li.button-newapp': {
        marginTop: 0
      },

      '& ol, & ul': {
        marginLeft: 20,
        marginTop: 10
      }
    },

    '& img': {
      maxWidth: '100%'
    },

    '& ol': {
      listStyle: 'decimal'
    },

    '& ul': {
      listStyle: 'disc'
    },

    '& blockquote': {
      backgroundColor: colors.white,
      borderLeftColor: colors.primary,
      borderLeftWidth: 6,
      borderLeftStyle: 'solid',
      padding: '20px 45px 20px 26px',
      marginBottom: 30,
      marginTop: 20,

      '& p': {
        marginTop: 15,

        '&:first-of-type': {
          fontWeight: 400,
          marginTop: 0
        },

        '&:nth-of-type(2)': {
          marginTop: 0
        }
      }
    },

    '& .gatsby-highlight + blockquote': {
      marginTop: 40
    }
  }
};

export { colors, fonts, media, sharedStyles };
