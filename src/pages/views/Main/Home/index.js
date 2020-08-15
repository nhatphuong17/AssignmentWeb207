import React from 'react'
import PropTypes from 'prop-types'


const Home = props => {
    return (
        <main className="site-main">
        {/*================ Hero banner start =================*/}
        <section className="hero-banner">
          <div className="container">
            <div className="row no-gutters align-items-center pt-60px">
              <div className="col-5 d-none d-sm-block">
                <div className="hero-banner__img">
                  <img className="img-fluid" src="img/home/hero-banner.png" alt="" />
                </div>
              </div>
              <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
                <div className="hero-banner__content">
                  <h4>Shop is fun</h4>
                  <h1>Browse Our Premium Product</h1>
                  <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                  <a className="button button-hero" href="#">Browse Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ Hero banner start =================*/}
        {/*================ Hero Carousel start =================*/}
        <section className="section-margin mt-0">
          <div className="owl-carousel owl-theme hero-carousel">
            <div className="hero-carousel__slide text-left">
              <img src="img/TOV39Q885_kem_duong_da.jpg" alt="" style={{width: '450px', height: '450px'}} className="img-fluid" />
              <a href="#" className="hero-carousel__slideOverlay">
                <h3>Collagen Lifting Cream</h3>
                <p>Accessories Item</p>
              </a>
            </div>
            <div className="hero-carousel__slide text-left">
              <img src="img/nuoc-hoa-scandal---jean-paul-gaultier_b91749e67fd64ccf9b5932af3f67f03d_master.webp" alt="" style={{width: '450px', height: '450px'}} className="img-fluid" />
              <a href="#" className="hero-carousel__slideOverlay">
                <h3>Nước hoa</h3>
                <p>Accessories Item</p>
              </a>
            </div>
            <div className="hero-carousel__slide text-right">
              <img src="img/images (1).jpg" alt="" style={{width: '450px', height: '450px'}} className="img-fluid" />
              <a href="#" className="hero-carousel__slideOverlay">
                <h3>Son</h3>
                <p>Accessories Item</p>
              </a>
            </div>
          </div>
       </section>
       
        
      </main>

       
    )
}

Home.propTypes = {

}

export default Home
