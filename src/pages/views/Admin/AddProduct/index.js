import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import firebase from '../../../../firebase'
import { storage } from 'firebase';



const AddProduct = ({ onAdd }) => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    // const [valueInput, setValueInput] = useState({});

    // const onHandleChange = (e) => {
    //     const {name,value} = e.target;n

    //     setValueInput({
    //         ...valueInput,
    //         [name]: e.target.value,

    //     });
    // }
    // console.log(onAdd); 

    //     const onHandleSubmit = (data) => {
    //         let file = data.image[0];
    //         let storageRef = firebase.storage().ref(`images/${file.name}`); // tạo folder chứa ảnh trên firesbase
    //         let uploadTask = storageRef.put(file);// đẩy ảnh lên đường dẫn trên
    //         uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED); // thực hiện

    //       // lấy ảnh từ firestore
    //         firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => { 
    //      // Tạo object mới chứa toàn bộ thông tin từ input
    //             const newData = {
    //                 id: Math.random().toString(36).substr(2, 9),
    //                 ...data,
    //                 desc,
    //                 image: url
    //             }
    // // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
    //             onAdd(newData)

    //         })
    //     }
    const onHandleSubmit = (data) => {
       
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    // desc,
                    image: url
                }
                console.log('test data ', newData, data);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
            })
        });
        history.replace('/admin/products')
    }

    // const onHandleSubmit = (data) => {
    //     // e.preventDefault();

    //     const newData = {
    //         id: Math.random().toString(36).substr(2, 9),
    //         ...data
    //     }
    //     onAdd(newData)
    //     history.push("/admin/products");
    // }
    return (
        <div className="card shadow my-4">
            <div className="card-header py-3">
                <button className="m-0 font-weight-bold text-primary"> Thêm sản phẩm</button>

            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onHandleSubmit)}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" id="name" name="name" className="form-control" ref={register({ required: true, minLength: 10 })} />
                        {errors.name && <span className="text-danger mt-3">Bạn cần phải nhập field này</span>}
                        {errors.name && errors.name.type === "minlength" && <span className="text-danger mt-3">Tên phải lớn hơn 10 ký tự</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Category</label>
                        <select class="form-control" name='cateid' ref={register({ required: true })}>
                            <option value="s678awytk">Perfumer</option>
                            <option value="ax2s6mh7k">Lipstick</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Image</label><br />
                        <input
                            type="file"
                            name="image"
                            id="productImage"
                            ref={register({ required: true })}
                            aria-describedby="imageHelp"
                        />
                        <small id="imageHelp" className="form-text text-danger">{errors.image && <span>Please fill in the Image field</span>}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Price</label>
                        <input type="text" id="price" name="price" className="form-control" ref={register({ required: true })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="description" ref={register({ required: true })}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Status</label>
                        <input type="text" id="status" name="status" className="form-control" ref={register({ required: true })} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
