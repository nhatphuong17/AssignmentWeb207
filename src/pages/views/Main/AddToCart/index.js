import React from 'react'
import PropTypes from 'prop-types'

const AddToCart = props => {
    return (
        <div>
             <section className="blog-banner-area" id="category">
          <div className="container h-100">
            <div className="blog-banner">
              <div className="text-center">
                <h1>Shopping Cart</h1>
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* ================ end banner area ================= */}
        {/*================Cart Area =================*/}
        <section className="cart_area">
          <div className="container">
            <div className="cart_inner">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="d-flex">
                            <img src="img/cart/cart1.png" alt="" />
                          </div>
                          <div className="media-body">
                            <p>Minimalistic shop for multipurpose use</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h5>$360.00</h5>
                      </td>
                      <td>
                        <div className="product_count">
                          <input type="text" name="qty" id="sst" maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
                          <button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="lnr lnr-chevron-up" /></button>
                          <button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="lnr lnr-chevron-down" /></button>
                        </div>
                      </td>
                      <td>
                        <h5>$720.00</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="d-flex">
                            <img src="img/cart/cart2.png" alt="" />
                          </div>
                          <div className="media-body">
                            <p>Minimalistic shop for multipurpose use</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h5>$360.00</h5>
                      </td>
                      <td>
                        <div className="product_count">
                          <input type="text" name="qty" id="sst" maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
                          <button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="lnr lnr-chevron-up" /></button>
                          <button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="lnr lnr-chevron-down" /></button>
                        </div>
                      </td>
                      <td>
                        <h5>$720.00</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="d-flex">
                            <img src="img/cart/cart3.png" alt="" />
                          </div>
                          <div className="media-body">
                            <p>Minimalistic shop for multipurpose use</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h5>$360.00</h5>
                      </td>
                      <td>
                        <div className="product_count">
                          <input type="text" name="qty" id="sst" maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
                          <button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="lnr lnr-chevron-up" /></button>
                          <button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="lnr lnr-chevron-down" /></button>
                        </div>
                      </td>
                      <td>
                        <h5>$720.00</h5>
                      </td>
                    </tr>
                    <tr className="bottom_button">
                      <td>
                        <a className="button" href="#">Update Cart</a>
                      </td>
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                        <div className="cupon_text d-flex align-items-center">
                          <input type="text" placeholder="Coupon Code" />
                          <a className="primary-btn" href="#">Apply</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td>
                        <h5>$2160.00</h5>
                      </td>
                    </tr>
                    <tr className="shipping_area">
                      <td className="d-none d-md-block">
                      </td>
                      <td>
                      </td>
                      <td>
                        <h5>Shipping</h5>
                      </td>
                      <td>
                        <div className="shipping_box">
                          <ul className="list">
                            <li><a href="#">Flat Rate: $5.00</a></li>
                            <li><a href="#">Free Shipping</a></li>
                            <li><a href="#">Flat Rate: $10.00</a></li>
                            <li className="active"><a href="#">Local Delivery: $2.00</a></li>
                          </ul>
                          <h6>Calculate Shipping <i className="fa fa-caret-down" aria-hidden="true" /></h6>
                          <select className="shipping_select">
                            <option value={1}>Hà Nội</option>
                            <option value={2}>Hà Đông</option>
                            <option value={4}>Ninh Bình </option>
                            <option value={4}>Quảng Ninh
                            </option>
                            <option value={4}>Nghệ An </option>
                            <option value={4}>Thái Bình </option>
                            <option value={4}>Hà Tĩnh </option>
                          </select>
                          <select className="shipping_select">
                            <option value={1}>Select a City</option>
                            <option value={2}>Hà Nội</option>
                            <option value={4}>Ninh Bình</option>
                          </select>
                          <input type="text" placeholder="Postcode/Zipcode" />
                          <a className="gray_btn" href="#">Update Details</a>
                        </div>
                      </td>
                    </tr>
                    <tr className="out_button_area">
                      <td className="d-none-l">
                      </td>
                      <td className>
                      </td>
                      <td>
                      </td>
                      <td>
                        <div className="checkout_btn_inner d-flex align-items-center">
                          <a className="gray_btn" href="/shopping">Continue Shopping</a>
                          <a className="primary-btn ml-2" href="#">Proceed to checkout</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

AddToCart.propTypes = {

}

export default AddToCart
