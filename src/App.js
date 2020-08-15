import React, { useState ,useEffect} from 'react';
import './App.css';
import dataFake from './dataFake';
import Routers from './routers';
import apiRequest from './api/productApi';
import apiRequestCate from './api/categoryApi';

import productFake from './resources/productFake';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
 
  const [products, setProducts] = useState([]);
    // Danh sách sản phẩm
    useEffect(() => {
      const getProducts = async () => {
        try {
          const { data } = await apiRequest.getAll();
          console.log(data);
          setProducts(data);
        } catch (error) {
          console.log('failed to request API: ', error)
        }
      }
      getProducts();
    }, []);
  
  
    // Xóa sản phẩm
    const onHandleRemove = async (id) => {
      try {
        const { data } = await apiRequest.remove(id);
        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
  
    }
    // Thêm sản phẩm
    const onHandleAdd = async (product) => {
      try {
        const { data } = await apiRequest.create(product);
        setProducts([
          ...products,
          data
        ])
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }


  
  
    // Cập nhật product 
    const onHandleUpdate = async (updateProduct) => {
      try {
        const { data } = await apiRequest.update(updateProduct.id, updateProduct);
        const newProducts = products.map(product => (
          product.id === data.id ? data : product
        ));
        setProducts(newProducts);
      } catch (error) {
        console.log('loi api', error)
      }
  
    }

    // // category
    const [categories, setCategory] = useState([]);
    // Danh sách thể loại
    useEffect(() => {
      const getCategories = async () => {
        try {
          const { data } = await apiRequestCate.getAll();
          console.log(data);
          setCategory(data);
        } catch (error) {
          console.log('failed to request API: ', error)
        }
      }
      getCategories();
    }, []);
  
  
    // Xóa thể loại
    const onHandleDelete = async (id) => {
      try {
        const { data } = await apiRequestCate.remove(id);
        const newCategories =categories.filter(category => category.id !== data.id);
        setCategory(newCategories);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
  
    }
    // Thêm thể loại
    const onHandleAddCategory = async (category) => {
      try {
        const { data } = await apiRequestCate.create(category);
        setCategory([
          ...categories,
          data
        ])
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }


  
  
    // Cập nhật thể loại 
    const onHandleUpdateCategory = async (updateCategory) => {
      try {
        const { data } = await apiRequestCate.update(updateCategory.id, updateCategory);
        const newCategories = categories.map(category => (
          category.id === data.id ? data : category
        ));
        setCategory(newCategories);
      } catch (error) {
        console.log('loi api', error)
      }
  
    }
  return (
    <div className="App">
   


   {/* <Routers AddProduct onAdd={onHanleAdd}></Routers> */}
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd}  onUpdate={onHandleUpdate}
      categories={categories}  onRemoveCategory={onHandleDelete}  onAddCategory={onHandleAddCategory} onUpdateCategory={onHandleUpdateCategory}/>

    </div>
  )

}
export default App;