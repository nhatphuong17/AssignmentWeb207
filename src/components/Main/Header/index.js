import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Header = props => {
    return (
   
        <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="index.html"><img src="../../img/logo.png" alt="" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="../../icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                  <li className="nav-item active"><Link to="/home" className="nav-link">Home</Link></li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><Link to="shopping" className="nav-link">Shop Category</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/details" >Product Details</Link></li>
                      <li className="nav-item"><a className="nav-link" href="checkout.html">Product Checkout</a></li>
                      <li className="nav-item"><Link className="nav-link" to ="/confirmation">Confirmation</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/cart">Shopping Cart</Link></li>
                    </ul>
                  </li>
                  <li class="nav-item active submenu dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Blog</a>
                <ul class="dropdown-menu">
                  <li class="nav-item active"><Link class="nav-link" to="/blog">Blog Single</Link></li>
                  <li class="nav-item"><Link class="nav-link" to="/single">Blog Details</Link></li>
                </ul>
							</li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
                      <li className="nav-item"><a className="nav-link" href="register.html">Register</a></li>
                      <li className="nav-item"><a className="nav-link" href="tracking-order.html">Tracking</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
                <ul className="nav-shop">
                  {/* <li className="nav-item"><button><i className="ti-search" /></button></li>
                  <li className="nav-item"><button><i className="ti-shopping-cart" /><span className="nav-shop__circle">3</span></button> </li> */}
                  <li className="nav-item"><a className="button button-header" href="#">Buy Now</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
}


export default Header
