import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'

class Team extends React.Component {
  render() {
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Team" />
        <div className="container">
          <div className="jumbotron">
            <h1>Hello World</h1>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Team
