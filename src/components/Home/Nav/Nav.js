import React from 'react'
import PropTypes from 'prop-types'

// scss
import "./Nav.css"

const Nav = props => {
  return (
    <div className="nav">
      <div className="container-fluid">
        <div className="nav__list">
          <div className="nav__list--search">
            <input type="text" />
            <i className="fas fa-search"></i>
          </div>
          <div className="nav__list--filter">
            <button>For rent</button>
          </div>
          <div className="nav__list--filter">
            <button>Price</button>
          </div>
          <div className="nav__list--filter">
            <button>Beds & Baths</button>
          </div>
          <div className="nav__list--filter">
            <button>Home type</button>
          </div>
          <div className="nav__list--filter">
            <button className="nav__list-save">
              Save search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Nav.propTypes = {

}

export default Nav
