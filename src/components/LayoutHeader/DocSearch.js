import React, { Component } from 'react';
import { colors, media } from 'theme';
import hex2rgba from 'hex2rgba';

class DocSearch extends Component {
  state = {
    enabled: true
  };

  componentDidMount() {
    if (window.docsearch) {
      window.docsearch({
        apiKey: '91fce6c04d7f68bbb346278719149541',
        indexName: 'nervos',
        inputSelector: '#docsearch-input'
      });
    } else {
      console.warn('Search has failed to load and now is being disabled');
      this.setState({ enabled: false });
    }
  }

  render() {
    const { enabled } = this.state;

    return enabled ? (
      <form
        css={{
          display: 'flex',
          flex: '0 0 auto',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: '0.25rem',
          paddingRight: '0.25rem',

          [media.lessThan('expandedSearch')]: {
            justifyContent: 'flex-end'
          },

          [media.greaterThan('expandedSearch')]: {
            minWidth: 100
          }
        }}
      >
        <input
          css={{
            width: '100%',
            appearance: 'none',
            background: hex2rgba(colors.primary, 0.7),
            border: 0,
            color: colors.white,
            fontSize: 18,
            fontWeight: 300,
            fontFamily: 'inherit',
            position: 'relative',
            padding: '6px 6px 6px 29px',
            backgroundImage: 'url(/search.svg)',
            backgroundSize: '16px 16px',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
            backgroundPositionX: '6px',
            borderRadius: '0.25rem',
            '&::placeholder': {
              color: colors.white,
              paddingLeft: 4,
              opacity: 0.7
            },
            ':focus': {
              outline: 0,
              backgroundColor: colors.primary
            },

            [media.lessThan('expandedSearch')]: {
              fontSize: 16,
              width: 24,
              transition: 'width 0.2s ease, padding 0.2s ease',
              paddingLeft: 24,
              ':focus': {
                paddingLeft: 29,
                width: '9rem',
                outline: 'none'
              }
            }
          }}
          id="docsearch-input"
          type="search"
          placeholder="Search"
          aria-label="Search docs"
        />
      </form>
    ) : null;
  }
}

export default DocSearch;
