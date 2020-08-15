import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const About =  props => {
    return (
        <div>
            	 <section className="blog-banner-area" id="category">
          <div className="container h-100">
            <div className="blog-banner">
              <div className="text-center">
                <h1>Order Confirmation</h1>
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop Category</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="order_details section-margin--small">
          <div className="container">
            <p className="text-center billing-alert">Thank you. Your order has been received.</p>
        
            <div className="checkout_btn_inner d-flex align-items-center">
              <a className="gray_btn" href="/shopping">Continue Shopping</a>
              <a className="primary-btn ml-2" href="#">Proceed to checkout</a>
            </div>
          </div>
        </section>
        </div> 
    )
}

About.propTypes = {

}

export default About
