import navEn from '../../content/book/en/nav.yml'
import navZh from '../../content/book/zh/nav.yml'

const sectionListEn = navEn.map(section => ({
  ...section,
  directory: 'book/en'
}))

const sectionListZh = navZh.map(section => ({
  ...section,
  directory: 'book/zh'
}))

const sectionListByLocation = location => {
  const version = location.pathname.split('/').slice(2, 3)[0]
  if (version && version === 'en') {
    return sectionListEn
  }
  return sectionListZh
}

export { sectionListByLocation }
