import Flex from 'components/Flex';
import React from 'react';
import { colors, fonts, media } from 'theme';

const MarkdownHeader = ({ title }) => (
  <Flex type="header" halign="space-between" valign="baseline">
    <h1
      css={{
        color: colors.dark,
        marginBottom: 0,
        marginTop: 40,
        ...fonts.header,

        [media.size('medium')]: {
          marginTop: 60
        }
      }}
    >
      {title}
    </h1>
  </Flex>
);

export default MarkdownHeader;
