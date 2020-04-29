import React from 'react'
import HeroImg from '../../../content/images/itsachecmate-concept-graphic-022520-Final.png'
import Benefits from 'components/Benefits/index'

class Hero extends React.Component {
  render() {
    return (
      <section>
        <div className="jumbotron jumbotron-fluid text-center bg-white pb-0">
          <h1 className="display-4">
            Integrate 3rd Party Orders <br /> Directly to Your
            <span className="text-primary font-italic"> POS</span>
          </h1>
          <div className="container-fluid px-lg-5 mt-lg-5">
            <img src={HeroImg} />
          </div>
        </div>
        <Benefits />
      </section>
    )
  }
}

export default Hero
