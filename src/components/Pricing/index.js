import React from 'react'

const Featurettes = () => {
  return (
    <section>
      <div className="container text-center">
        <h1 className="py-5">
          Simple, flat-rate monthly pricing. No commitment. No setup fee!
        </h1>
        <div className="row text-center">
          <div className="col-lg-4">
            <img src="https://www.itsacheckmate.com/wp-content/uploads/2018/08/1-1.png" />
            <h2 className="my-3">Absolutely Free Trial</h2>
            <p>We offer an absolutely free 2 weeks trial, with no setup fee.</p>
          </div>
          <div className="col-lg-4">
            <img src="https://www.itsacheckmate.com/wp-content/uploads/2018/08/2-1.png" />
            <h2 className="my-3">Zero setup fee</h2>
            <p>
              First time ever, pay no setup fee. We guarantee you will love our
              solution!
            </p>
          </div>
          <div className="col-lg-4">
            <img src="https://www.itsacheckmate.com/wp-content/uploads/2018/08/3-1.png" />
            <h2 className="my-3">Easy pricing</h2>
            <p>
              $85 / month per location for up to 2 platforms; $100 / month per
              location for unlimited platforms. No per transaction pricing.*
            </p>
          </div>
        </div>
        <div className="py-3">
          <p>
            As your online sales grow, your cost will always stay the same. No
            extra fees. No surprises.
          </p>
          <small>*additional 5c per transaction with Aloha POS</small>
        </div>
      </div>
    </section>
  )
}

export default Featurettes
