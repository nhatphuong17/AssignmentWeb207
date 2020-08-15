import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar'



 import '../../assets/css/main/vendors/bootstrap/bootstrap.min.css'
//  import '../../assets/css/main/vendors/fontawesome/css/all.min.css'
 import '../../assets/css/main/vendors/themify-icons/themify-icons.css'
 import '../../assets/css/main/vendors/nice-select/nice-select.css'
 import '../../assets/css/main/vendors/owl-carousel/owl.theme.default.min.css'
import ProductList from '../views/Main/ProductList';
import Home from '../views/Main/Home';
//  import '../../assets/css/main/vendors/owl-carousel/owl.carousel.min.css'


//  import '../../assets/css/main/style.css'

export default ({ children }) => {

  
        
    return (
        <div className="user-page">
            <Header />
            <Navbar />
            <div className="content">
         {/* <Home /> */}
     
                {children}
            

            </div>
            <Footer />
        </div>
    )
}
