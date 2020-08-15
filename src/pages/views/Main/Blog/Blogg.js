import React from 'react'
import PropTypes from 'prop-types'

const Blogg = ({ products, categories }) => {
  console.log(categories, "list")
  return (
    <div>
      <section className="blog-banner-area" id="blog">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Our Blog</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Blog</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>



      <section className="blog_categorie_area">
        <div className="container">
          <div className="row">
            {products.map(({ id, name, image, price,cateid }, index) => {
         
                  return(
                    <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                    <div className="categories_post">
                      <img className="card-img rounded-0" src={image} alt="post" />
                      <div className="categories_details">
                        <div className="categories_text">
                          <a href="/single">
                  <td>
                  {
                            categories.map((idCate) => { // mỗi lần chạy map 1 dữ liệu product thì nó so sánh vs thằng map ở dưới thôi
                              if (cateid == idCate.idCate) {// nếu id trên kia giống bs thằng id của thằng danh mục này thì return ra tên của thằng id đó
                                return idCate.nameCate
                              }
                            })
                          }
                  </td>
                            {/* <h5>Nhật</h5> */}
                          </a>
                          <div className="border_line" />
                             <p>{name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
              )
                              
                                  
                   } )}) 




           </div>
          </div>
        </section>
        </div >
    )
}

Blogg.propTypes = {

}

export default Blogg
