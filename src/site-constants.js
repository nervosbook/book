// Code repo address on GitHub
const gitHubRepo = 'https://github.com/nervosbook/book/tree/master'

// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
const urlRoot = 'https://nervosbook.github.io'

// algolia search
const apiKey = 'xxx'

export { urlRoot, gitHubRepo, apiKey }
