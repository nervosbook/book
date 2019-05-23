import navEn from '../../content/book/en/nav.yml'

const sectionList = navEn.map(section => ({
  ...section,
  directory: 'book/en'
}))

const sectionListByLocation = location => {
  return sectionList
}

export { sectionListByLocation }
