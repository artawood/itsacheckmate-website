import React from 'react'

class Benefits extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-8 justify-content-center">
            <hr class="mb-5" />
            <div class="row pb-3 pb-sm-5 px-4">
              <div class="col-6 col-md-3 py-2">
                <img
                  class="rounded-circle img-center infographic mb-3"
                  src="https://www.itsacheckmate.com/wp-content/uploads/2019/06/infographic-1.png"
                />
                <p class="text-center px-3 px-md-2">
                  <strong>Reduce the need for tablets</strong>
                </p>
              </div>
              <div class="col-6 col-md-3 py-2">
                <img
                  class="rounded-circle img-center infographic mb-3"
                  src="https://www.itsacheckmate.com/wp-content/uploads/2019/06/infographic-2.png"
                />
                <p class="text-center px-3 px-md-2">
                  <strong>Reduce order entry error</strong>
                </p>
              </div>
              <div class="col-6 col-md-3 py-2">
                <img
                  class="rounded-circle img-center infographic mb-3"
                  src="https://www.itsacheckmate.com/wp-content/uploads/2019/06/infographic-3.png"
                />
                <p class="text-center px-3 px-md-2">
                  <strong>Decrease labor costs</strong>
                </p>
              </div>
              <div class="col-6 col-md-3 py-2 px-lg-1">
                <img
                  class="rounded-circle img-center infographic mb-3"
                  src="https://www.itsacheckmate.com/wp-content/uploads/2019/06/infographic-4.png"
                />
                <p class="text-center">
                  <strong>Increase revenue potential</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
    )
  }
}

export default Benefits
