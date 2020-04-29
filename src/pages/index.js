import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import VideoTestimonials from 'components/VideoTestimonials/index'
import Hero from 'components/Hero/index'
import HappyCustomers from 'components/HappyCustomers/index'
import Featurettes from 'components/Featurettes/index'
import Pricing from 'components/Pricing/index'
import Integration from 'components/Integration/index'

class Home extends React.Component {
  render() {
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Home" />
        <Hero />
        <VideoTestimonials />
        <HappyCustomers />
        <Featurettes />
        <Pricing />
        <Integration />
      </Layout>
    )
  }
}

export default Home
