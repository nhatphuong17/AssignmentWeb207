import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import ProductList from '../pages/views/Main/ProductList';
import AddProduct from '../pages/views/Admin/AddProduct';
import AddToCart from '../pages/views/Main/AddToCart';
import Blogg from '../pages/views/Main/Blog/Blogg';
import SingleBlog from '../pages/views/Main/Blog/SingleBlog';
import Details from '../pages/views/Main/Details';

import Editproduct from '../pages/views/Admin/EditProducts/Editproduct';
import AddCategory from '../pages/views/Admin/AddCategory';
import ListCategory from '../pages/views/Admin/Category';
import EditCategory from '../pages/views/Admin/EditCategory/EditCategory';
import Cate from '../pages/views/Main/Cate/Cate';

const Routers = ({ products, onRemove, onAdd, onUpdate, categories,
    onRemoveCategory,onAddCategory, onUpdateCategory                }) => {
    const onHandleRemove = (id) => {
        onRemove(id)

    }
    const onHanleAdd = (product) => {
        // onAdd(product)
        onAdd(product);
        console.log(product);
    };
    const onHandleUpdate = (product) => {
        onUpdate(product)
    }

    // category
    const onHandleDelete = (id) => {
        onRemoveCategory(id)

    }
    const onHandleAddCategory = (category) => {  
        onAddCategory(category);;
    };
    const onHandleUpdateCategory = (category) => {
        onUpdateCategory(category)
    }




    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} categories={categories}/>
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} categories={categories} />
                            </Route>

                            
                           
                            <Route path='/admin/addproduct'>
                                <AddProduct onAdd={onHanleAdd} /></Route>
                            
                            <Route path='/admin/category'>
                                <ListCategory categories={categories} onRemoveCategory={onHandleDelete} />
                            </Route>
                            <Route path='/admin/addcategory'>
                                <AddCategory onAddCategory={onHandleAddCategory} /></Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/admin/product/:path?">
                    <LayoutAdmin>
                    <Route path='/admin/product/:id'>
                                <Editproduct products={products} onUpdate={onHandleUpdate} />
                            </Route>
                    </LayoutAdmin>
                </Route>
                <Route path="/admin/caterogies/:path?">
                    <LayoutAdmin>
                    <Route path='/admin/caterogies/:id'>
                                <EditCategory categories={categories} onUpdateCategory={onHandleUpdateCategory} />
                            </Route>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/home" exact>
                                <Home />
                            </Route>
                            <Route path="/shopping">
                                <ProductList products={products} categories={categories}/>
                            </Route>
                            <Route path="/confirmation">
                                <About />

                            </Route>
                            <Route path="/cart">
                                <AddToCart />
                            </Route>

                            <Route path="/blog">

                                <Blogg products={products} />

                            </Route>
                            <Route path="/single">

                                <SingleBlog products={products} />
                            </Route>
                            <Route path="/details/:id" >
                            <Details  products={products} />
                            </Route>
                            <Route path="/cate/:id"> 
                              <Cate products={products} categories={categories}/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
