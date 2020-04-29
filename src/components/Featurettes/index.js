import React from 'react'

const Featurettes = () => {
  return (
    <section className="bg-gray-300">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-3">
            <img src="https://www.itsacheckmate.com/wp-content/uploads/2018/08/1-1.png" />
            <h2 className="my-3">It just works.</h2>
            <p>Automatically receive 3rd party orders directly to your POS.</p>
          </div>
          <div className="col-lg-3">
            <img src="https://www.itsacheckmate.com/wp-content/uploads/2018/08/2-1.png" />
            <h2 className="my-3">No Suprises.</h2>
            <p>
              Simple flat-pricing as your orders grow. Your monthly fee doesn't.
            </p>
          </div>
          <div className="col-lg-3">
            <img src="https://www.itsacheckmate.com/wp-content/uploads/2018/08/3-1.png" />
            <h2 className="my-3">No commitments.</h2>
            <p>Month-to-month. Cancel anytime.</p>
          </div>
          <div className="col-lg-3">
            <img src="https://www.itsacheckmate.com/wp-content/uploads/2018/08/4-1.png" />
            <h2 className="my-3">Dedicated support.</h2>
            <p>24/7 support from our team.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featurettes
