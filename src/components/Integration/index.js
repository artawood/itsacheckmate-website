import React from 'react'
import IntegrationImg from '../../../content/images/Integration-Homepage-BG.png'
import './style.scss'

const style = {
  backgroundImage: `url(${IntegrationImg})`
}

class Integration extends React.Component {
  render() {
    return (
      <section>
        <div
          className="jumbotron jumbotron-fluid text-center bg-white pb-0 integration-bg"
          style={style}
        >
          <div className="container pt-5 mt-5">
            <div className="py-3 mt-lg-3">
              <h1
                className="px-lg-5 text-center"
                style={{ fontSize: '3.25rem' }}
              >
                Integration with over <span style={{ color: 'red ' }}>100</span>{' '}
                Point of Sale, Delivery, and Ordering Services
              </h1>
            </div>
            <div className="container py-3">
              <h2 className="text-center" style={{ fontSize: '2.25rem' }}>
                See our Integrations
              </h2>
            </div>
            <div className="py-3">
              <button type="button" class="btn btn-primary btn-lg mr-4">
                Delivery/Ordering
              </button>
              <button type="button" class="btn btn-primary btn-lg">
                Point of Sale
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Integration
