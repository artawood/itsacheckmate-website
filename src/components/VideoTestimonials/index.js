import React from 'react'
import Icon from 'components/icon'

class VideoTestimonials extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="bg-gray-300">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="iframe-container mb-3 mb-md-0">
                <iframe
                  src="https://www.youtube.com/embed/CXP_p5A_GAs"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="iframe-container">
                <iframe
                  src="https://www.youtube.com/embed/XgAEYDPXPME"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default VideoTestimonials
