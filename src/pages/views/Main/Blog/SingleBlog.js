import React from 'react'
import PropTypes from 'prop-types'

const SingleBlog = ({ products}) => {
    return (
        <div>
          <section className="blog-banner-area" id="blog">
          <div className="container h-100">
            <div className="blog-banner">
              <div className="text-center">
                <h1>Blog Details</h1>
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>


        <section className="blog_area single-post-area py-80px section-margin--small">
          <div className="container">
            <div className="row">
            {/* {products.map(({ id, name, image, price }, index) => ( */}
                <div className="col-lg-8 posts-list">
                <div className="single-post row">
                  <div className="col-lg-12">
                    <div className="feature-img">
                      <img className="img-fluid" src="http://lorempixel.com/640/480/food" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3  col-md-3">
                    <div className="blog_info text-right">
                      <div className="post_tag">
                        <a href="#">Food,</a>
                        <a className="active" href="#">Technology,</a>
                        <a href="#">Politics,</a>
                        <a href="#">Lifestyle</a>
                      </div>
                      <ul className="blog_meta list">
                        <li>
                          <a href="#">Mark wiens
                            <i className="lnr lnr-user" />
                          </a>
                        </li>
                        <li>
                          <a href="#">12 Dec, 2017
                            <i className="lnr lnr-calendar-full" />
                          </a>
                        </li>
                        <li>
                          <a href="#">1.2M Views
                            <i className="lnr lnr-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="#">06 Comments
                            <i className="lnr lnr-bubble" />
                          </a>
                        </li>
                      </ul>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />																				
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-github" />																				
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance" />																				
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 blog_details">
                    <h2>Astronomy Binoculars A Great Alternative</h2>
                    <p className="excert">
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                      on boot camp when you can get the MCSE study materials yourself at a fraction.
                    </p>
                    <p>
                      Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot
                      camp when you can get the MCSE study materials yourself at a fraction of the camp price.
                      However, who has the willpower to actually sit through a self-imposed MCSE training. who
                      has the willpower to actually sit through a self-imposed
                    </p>
                    <p>
                      Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot
                      camp when you can get the MCSE study materials yourself at a fraction of the camp price.
                      However, who has the willpower to actually sit through a self-imposed MCSE training. who
                      has the willpower to actually sit through a self-imposed
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <div className="quotes">
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                      on boot camp when you can get the MCSE study materials yourself at a fraction of the camp
                      price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <img className="img-fluid" src="http://lorempixel.com/640/480/city" alt="" />
                      </div>
                      <div className="col-6">
                        <img className="img-fluid" src="http://lorempixel.com/640/480/sports" alt="" />
                      </div>
                      <div className="col-lg-12 mt-4">
                        <p>
                          MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                          on boot camp when you can get the MCSE study materials yourself at a fraction of
                          the camp price. However, who has the willpower.
                        </p>
                        <p>
                          MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                          on boot camp when you can get the MCSE study materials yourself at a fraction of
                          the camp price. However, who has the willpower.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
           
               
                
            {/* ))} */}
              
              </div> 
               
            </div>
     
        </section>
       
        </div>
    )
}

SingleBlog.propTypes = {

}

export default SingleBlog
