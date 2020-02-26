import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import VideoTestimonials from 'components/VideoTestimonials/index'
import Hero from 'components/Hero/index'
import HappyCustomers from 'components/HappyCustomers/index'

class Home extends React.Component {
  render() {
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Home" />
        <Hero />
        <VideoTestimonials />
        <HappyCustomers />
      </Layout>
    )
  }
}

export default Home
