import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';

const EditCategory = ({ categories, onUpdateCategory }) => {
    let { id } = useParams();
    let history = useHistory();
    const categorie = categories.find(categories => categories.id === id);

    const [currentCategory, setCurrent] = useState(categorie);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdateCategory(currentCategory);
        history.push('/admin/category');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrent({
            ...currentCategory,
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
                            <input type="text" name="name" className="form-control" value={currentCategory.name} onChange={onHandleChange}  />
                            
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Image</label>
                            <input type="file" name="image" className="form-control-file" />
                        </div> */}
                        {/* <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Price</label>
                            <input type="text" name="price" className="form-control" value={currentProduct.price} onChange={onHandleChange} />
                        </div> */}

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

EditCategory.propTypes = {

}

export default EditCategory
