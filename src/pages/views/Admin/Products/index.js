import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsManager = ({ products, onRemove,categories }) => {
    const removeHandle = (id) => {
        onRemove(id)   
    }
     console.log(categories,"listcate")
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    <Link  className="btn btn-success" to="addproduct">Thêm sản phẩm</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price,cateid,status }, index) => {
                                      const cate = categories.find((category) => category.id == cateid)
                                    //  console.log(cate.name,"ad")
                                       return(
                                        <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                       <td>{name}</td>
                                        <td> {
                            categories.map((idCate) => { // mỗi lần chạy map 1 dữ liệu product thì nó so sánh vs thằng map ở dưới thôi
                              if (cateid == idCate.idCate) {// nếu id trên kia giống bs thằng id của thằng danh mục này thì return ra tên của thằng id đó
                                return idCate.nameCate
                              }
                            })
                          }</td>                    
                                        <td><img src={image} alt="" width="50" /></td>
                                       <td>{status ? 'còn hàng' : 'hết hàng'}</td> 
                                        <td>{price}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(id)}>Delete</button>
                                            <Link className="btn btn-primary" to={`/admin/product/${id}`}>Sửa</Link>
                                            
                                     
                                            </td>
                                    </tr>
                                       )
                              
                                  
                                    } )})
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
