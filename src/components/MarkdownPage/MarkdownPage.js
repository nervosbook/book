import React from 'react'
import Flex from 'components/Flex'
import MarkdownHeader from 'components/MarkdownHeader'
import NavigationFooter from 'templates/components/NavigationFooter'
import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar'
import TitleAndMetaTags from 'components/TitleAndMetaTags'
import { sharedStyles, colors, media } from 'theme'
import createOgUrl from 'utils/createOgUrl'
import CreateIcon from 'svg/Create'
import { gitHubRepo } from 'site-constants'
import { Link } from 'gatsby'
import ArrowBackIcon from 'svg/ArrowBack'
import findSectionForPath from 'utils/findSectionForPath'

const getPageById = (sectionList, templateFile) => {
  if (!templateFile) {
    return null
  }

  const sectionItems = sectionList.map(section => section.items)
  const flattenedSectionItems = [].concat.apply([], sectionItems)
  const linkId = templateFile.replace('.html', '')

  return flattenedSectionItems.find(item => item.id === linkId)
}

const MarkdownPage = ({
  createLink,
  ogDescription,
  location,
  markdownRemark,
  sectionList,
  titlePostfix = ''
}) => {
  const titlePrefix = markdownRemark.frontmatter.title || ''

  const prev = getPageById(sectionList, markdownRemark.frontmatter.prev)
  const next = getPageById(sectionList, markdownRemark.frontmatter.next)

  const courseId = markdownRemark.fields.slug
    .split('/')
    .slice(0, 2)
    .join('/')

  return (
    <Flex
      direction="row"
      grow="1"
      shrink="0"
      halign="stretch"
      css={{ width: '100%', flex: '1 0 auto', position: 'relative', zIndex: 0 }}
    >
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogUrl={createOgUrl(markdownRemark.fields.slug)}
        title={`${titlePrefix}${titlePostfix}`}
      />

      <StickyResponsiveSidebar
        createLink={createLink}
        defaultActiveSection={findSectionForPath(
          location.pathname,
          sectionList
        )}
        location={location}
        sectionList={sectionList}
      />

      <div
        css={{
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: '#fafafa',
          width: '100%',
          [media.greaterThan('medium')]: {
            width: `calc(100% - 298px)`
          }
        }}
      >
        <div css={sharedStyles.articleLayout.container}>
          <div css={{ width: '100%' }}>
            <Link
              to={`/${courseId}`}
              css={{ display: 'flex', alignItems: 'center', marginTop: 24 }}
            >
              <ArrowBackIcon css={{ fill: colors.primary, width: 20 }} />
              <span
                css={{ color: colors.primary, paddingLeft: 4, fontWeight: 500 }}
              >
                返回
              </span>
            </Link>
            <div id="docSearch-content">
              <MarkdownHeader title={titlePrefix} />

              <div css={sharedStyles.articleLayout.content}>
                <div
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                />

                {(next || prev) && (
                  <NavigationFooter
                    location={location}
                    next={next}
                    prev={prev}
                  />
                )}

                {markdownRemark.fields.path && (
                  <div>
                    <hr
                      css={{
                        height: 1,
                        border: 'none',
                        marginTop: 24,
                        marginBottom: 24,
                        backgroundColor: '#f5f3f7'
                      }}
                    />
                    <a
                      css={sharedStyles.articleLayout.editLink}
                      href={`${gitHubRepo}/${markdownRemark.fields.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CreateIcon
                        css={{
                          width: 20,
                          fill: colors.primary,
                          marginRight: 4
                        }}
                      />
                      edit this page on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flex>
  )
}

export default MarkdownPage
