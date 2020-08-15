import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

const Editproduct = ({ products, onUpdate }) => {
    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);

    const [currentProduct, setCurrentProduct] = useState(product);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentProduct);
        history.push('/admin/products');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            <div className="card shadow my-4">
                <div className="card-header py-3">
                    <button className="m-0 font-weight-bold text-primary"> Sửa sản phẩm</button>

                </div>
                <div className="card-body">
                    <form onSubmit={onHandleSubmit}>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" name="name" className="form-control" value={currentProduct.name} onChange={onHandleChange} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Category</label>
                            <select class="form-control" >
                                <option value="s678awytk">Perfumer</option>
                                <option value="ax2s6mh7k">Lipstick</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Image</label>
                            <input type="file" name="image" className="form-control-file" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Price</label>
                            <input type="text" name="price" className="form-control" value={currentProduct.price} onChange={onHandleChange} />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Status</label>
                            <select class="form-control" value={currentProduct.status} >
                                <option>Còn hàng</option>
                                <option>Hết hàng</option>
                            </select>
                        </div> */}
                          <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Status</label>
                        <input type="text" id="status" name="status" className="form-control"  value={currentProduct.status}  onChange={onHandleChange} />
                    </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={currentProduct.detail}  onChange={onHandleChange} ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>

        </div>

    )
}

Editproduct.propTypes = {
    products: PropTypes.array
}

export default Editproduct
