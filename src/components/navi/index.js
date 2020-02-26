import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../../content/images/ItsaCheckmateLogo_Horizontal_White.png'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar fixed-top navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container-fluid">
          <Link className="text-center pr-3" to="/">
            <img src={Logo} height="30" />
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/3rd-party'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  3rd Party Integrations
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/pos' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  POS Integrations
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/pricing/" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/support/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  How We Support You
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/customers/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Customers
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Testimonials
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/team/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/team/" className="nav-link">
                  Team
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/contact/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
