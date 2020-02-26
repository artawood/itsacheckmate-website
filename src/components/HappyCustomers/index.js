import React from 'react'
import data from '../../../data/happyCustomers'

const HappyCustomers = () => {
  return (
    <section>
      <div className="container text-center">
        <div className="py-4">
          <h1>Some of our Happy Customers</h1>
        </div>
        <div className="row">
          {data.map(img => {
            return (
              <div className="col-xs-6 col-sm-4 col-lg-2">
                <img src={img.imgURL} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HappyCustomers
