import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'


const Cate =({ categories, products }) => {
    const { id } = useParams()
    // const product = products.filter(product => product.cateid === id)
    return (
        <div>
            <section className="section-margin--small mb-5">
      <div className="container">
          
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="sidebar-categories">
              <div className="head">Browse Categories</div>
              <ul className="main-categories">
                <li className="common-filter">
                  <form action="#">
                      
                    <ul>
                    {categories.map(({idCate,nameCate},index)=>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="men" name="brand" /><label htmlFor="men">{nameCate}</label></li>
                      )}
                      
                     
                    </ul>
                  </form>
                </li>
              </ul>
            </div>
            <div className="sidebar-filter">
              <div className="top-filter-head">Product Filters</div>
              <div className="common-filter">
                <div className="head">Brands</div>
                <form action="#">
                  <ul>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand" /><label htmlFor="apple">Apple</label></li>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand" /><label htmlFor="asus">Asus</label></li>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand" /><label htmlFor="gionee">Gionee</label></li>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand" /><label htmlFor="micromax">Micromax</label></li>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label htmlFor="samsung">Samsung</label></li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7">
            {/* Start Filter Bar */}
            <div className="filter-bar d-flex flex-wrap align-items-center">
              <div className="sorting">
                <select>
                  <option value={1}>Default sorting</option>
                  <option value={1}>Default sorting</option>
                  <option value={1}>Default sorting</option>
                </select>
              </div>
              <div className="sorting mr-auto">
                <select>
                  <option value={1}>Show </option>
                  <option value={1}>Show 1</option>
                  <option value={1}>Show 2</option>
                </select>
              </div>
              <div>
                <div className="input-group filter-bar-search">
                  <input type="text" placeholder="Search" />
                  <div className="input-group-append">
                    <button type="button"><i className="ti-search" /></button>
                  </div>
                </div>
              </div>
            </div>
            {/* End Filter Bar */}
            {/* Start Best Seller */}
            <section className="lattest-product-area pb-40 category-list">
              <div className="row">
                {products.filter((prod)=>prod.cateid==id).map(({ id, name, image, price, status, cateid }, index) => {

                  return (
                    <div className="col-md-6 col-lg-4" key={index}>
                      <div className="áicard text-center card-product">
                        <div className="card-product__img">
                          <ul className="card-product__">
                            <li><button className="btn btn-danger fl-10">{status ? 'còn hàng' : 'hết hàng'}</button></li>
                          </ul>
                          <img className="card-img" src={image} alt="" />

                          <ul className="card-product__imgOverlay">
                            <li><button><i className="ti-search" /></button></li>
                            <li><button><i className="ti-shopping-cart" /></button></li>
                            <li><button><i className="ti-heart" /></button></li>
                          </ul>
                        </div>
                        <div className="card-body">
                          {
                            categories.map((idCate) => { // mỗi lần chạy map 1 dữ liệu product thì nó so sánh vs thằng map ở dưới thôi
                              if (cateid == idCate.idCate) {// nếu id trên kia giống bs thằng id của thằng danh mục này thì return ra tên của thằng id đó
                                return idCate.nameCate
                              }
                            })
                          }
                          <h4 className="card-product__title"><Link to={"/details/" + id}>{name}</Link></h4>
                          <p className="card-product__price">{price}</p>
                          {/* <p className="card-product__status">{}</p> */}

                        </div>
                    )
                  </div>
                    </div>
                  )
                })}

              </div>
            </section>
            {/* End Best Seller */}
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

Cate.propTypes = {

}

export default Cate
