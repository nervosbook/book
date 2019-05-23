import { css } from 'glamor';

const prismColors = {
  char: '#D8DEE9',
  comment: '#B2B2B2',
  keyword: '#07a',
  lineHighlight: '#353b45',
  primitive: '#673AB7',
  string: '#690',
  variable: '#9a6e3a',
  boolean: '#ff8b50',
  punctuation: '#88C6BE',
  tag: '#a16',
  function: '#dd4a68',
  className: '#d29314',
  bg: '#fff',
  text: '#525252'
};

css.global('.gatsby-highlight', {
  background: prismColors.bg,
  color: prismColors.text,
  borderRadius: 10,
  tabSize: '1.5em',
  WebkitOverflowScrolling: 'touch'
});

css.global(
  `
.gatsby-highlight > code[class*="gatsby-code-"],
.gatsby-highlight > pre[class*="gatsby-code-"],
.gatsby-highlight > pre.prism-code`,
  {
    height: 'auto !important',
    padding: '1rem',
    fontSize: 14,
    lineHeight: 1.8,
    overflow: 'auto',
    whiteSpace: 'pre'
  }
);

css.global('.gatsby-highlight + .gatsby-highlight', {
  marginTop: 20
});

css.global('.gatsby-highlight-code-line', {
  backgroundColor: prismColors.lineHighlight,
  display: 'block',
  margin: '-0.125rem calc(-1rem - 15px)',
  padding: '0.125rem calc(1rem + 15px)'
});

css.global('.token.attr-name', {
  color: prismColors.keyword
});

css.global(
  `
.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata`,
  {
    color: prismColors.comment
  }
);

css.global(
  `
.token.property,
.token.number,
.token.function-name,
.token.constant,
.token.symbol,
.token.deleted`,
  {
    color: prismColors.primitive
  }
);

css.global(`.token.boolean`, {
  color: prismColors.boolean
});

css.global(`.token.tag`, {
  color: prismColors.tag
});

css.global(`.token.string`, {
  color: prismColors.string
});

css.global(`.token.punctuation`, {
  color: prismColors.punctuation
});

css.global(
  `
.token.selector,
.token.char,
.token.builtin,
.token.inserted`,
  {
    color: prismColors.char
  }
);

css.global(`.token.function`, {
  color: prismColors.function
});

css.global(
  `
.token.operator,
.token.entity,
.token.url,
.token.variable`,
  {
    color: prismColors.variable
  }
);

css.global('.token.attr-value', {
  color: prismColors.string
});

css.global('.token.keyword', {
  color: prismColors.keyword
});

css.global(
  `
.token.atrule,
.token.class-name`,
  {
    color: prismColors.className
  }
);

css.global('.token.important', {
  fontWeight: 400
});

css.global('.token.bold', {
  fontWeight: 700
});
css.global('.token.italic', {
  fontStyle: 'italic'
});

css.global('.token.entity', {
  cursor: 'help'
});

css.global('.namespace', {
  opacity: 0.7
});
