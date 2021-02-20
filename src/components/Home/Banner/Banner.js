import React from 'react'
import PropTypes from 'prop-types'

// 

// scss
import "./Banner.css";

const Banner = props => {
  return (
    <section style={{ backgroundImage: "url('https://www.zillowstatic.com/s3/homepage/static/_Desktop_overlay_2.jpg')" }} className="banner">
      <h1 className="banner__title">Reimagine Home</h1>
      <h3 className="banner__sub-title">We'll help you find a place you'll love</h3>

      <div className="banner__search-input position-relative">
        <input type="text" placeholder="Enter a district, city, or an address" className="absolute custom-input" />
        <i className="fas fa-search position-absolute"></i>
      </div>
    </section>
  )
}

Banner.propTypes = {

}

export default Banner
