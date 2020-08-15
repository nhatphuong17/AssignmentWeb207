import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import apiRequest from './../../../../api/productApi'
const Details = ({ products }) => {
  // const [products, setProducts] = useState({ image: '' })
  const [product,setProduct]= useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getProduct = async () => {
      try {
          const {data} = await apiRequest.get(id);
          console.log(data)
          setProduct(data);
      } catch (error) {
        
      }
    }
    getProduct()
  }, [])
  // const pro = products.find((product) => product.id === id);
  // setProduct(pro);
  // console.log(product)

  return (
    <div>
      <section className="blog-banner-area" id="blog">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Shop Single</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/home">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Shop Single</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="product_image_area">
        <div className="container">
          
        {/* {products.map(({ id, name, image, price, status,description }, index) => ( */}
          <div className="row s_product_inner">

          <div className="col-lg-6">
            <div className="owl-carousel owl-theme s_Product_carousel">
              <div className="single-prd-item">
                <img className="img-fluid" src={product.image} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
              <h3>{product.name}</h3>
              <h2>{product.price}</h2>
              <ul className="list">
                <li><a className="active" href="#"><span>Category</span> : Household</a></li>
                <li><span>{product.status == true ? "In stock" : "Out stock"}</span></li>
              </ul>
              <p>{product.description}</p>
              <div className="product_count">
                <label htmlFor="qty">Quantity:</label>
                <button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="ti-angle-left" /></button>
                <input type="text" name="qty" id="sst" size={2} maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
                <button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="ti-angle-right" /></button>
                <a className="button primary-btn" href="/cart">Add to Cart</a>
              </div>
            </div>
          </div>

        </div>
     {/* ))} */}
          

        </div>

      </div>
    </div>
  )
}

Details.propTypes = {

}

export default Details
