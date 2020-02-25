import { graphql } from 'gatsby'
import get from 'lodash/get'
import HeroImg from '../../content/images/redesign-itsachecmate-concept-graphic-112719_POSlogo_v01.png'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'

class Home extends React.Component {
  render() {
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Home" />
        <div className="jumbotron jumbotron-fluid text-center bg-white">
          <h1 className="display-4">
            Integrate 3rd Party Orders Directly to Your{' '}
            <span className="text-primary font-italic">POS</span>
          </h1>
          <img src={HeroImg} />
        </div>
      </Layout>
    )
  }
}

export default Home
