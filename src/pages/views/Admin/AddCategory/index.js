import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
const AddCategory = ({ onAddCategory }) => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = (data) => {
        // e.preventDefault();

        const newData = {
            id: Math.random().toString(36).substr(2, 9),
            ...data
        }
        onAddCategory(newData)
        history.push("/admin/categories");
    }
    return (
        <div>
                <div className="card shadow my-4">
            <div className="card-header py-3">
                <button className="m-0 font-weight-bold text-primary"> Thêm </button>

            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onHandleSubmit)}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" id="name" name="name" className="form-control" ref={register({ required: true, maxLength: 30, minLength: 10 })} />
                        {errors.name && errors.name.type === "required" && <p className="text-danger mt-3">Bạn cần phải nhập field này</p>}
                        {errors.name && errors.name.type === "maxLength" && <p className="text-danger mt-3">Tên phải lớn hơn 10 ký tự</p>}
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Image</label>
                        <input type="file"  name="image" className="form-control-file" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Price</label>
                        <input type="text" id="price" name="price" className="form-control" ref={register({ required: true })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Description</label>
                        <input type="text" id="description" name="description" className="form-control" ref={register({ required: true })} />
                    </div> */}

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
        </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
