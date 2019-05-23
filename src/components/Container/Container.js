import React from 'react';
import { media } from 'theme';

/**
 * This component wraps page content sections (eg header, footer, main).
 * It provides consistent margin and max width behavior.
 */
const Container = ({ children, style }) => (
  <div
    css={{
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      [media.greaterThan('medium')]: {
        width: '90%'
      },

      [media.size('xxlarge')]: {
        maxWidth: 1200
      },
      ...style
    }}
  >
    {children}
  </div>
);

export default Container;
