import React, { Component } from 'react'
import Container from 'components/Container'
import TitleAndMetaTags from 'components/TitleAndMetaTags'
import Layout from 'components/Layout'
import createOgUrl from 'utils/createOgUrl'
import CourseList from 'components/CourseList'

class Home extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <TitleAndMetaTags
          title="Nervos CKB"
          ogUrl={createOgUrl('index.html')}
        />

        <div css={{ width: '100%' }}>
          <section css={{ paddingBottom: 32 }}>
            <Container>
              <CourseList title="书籍" />
            </Container>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Home
