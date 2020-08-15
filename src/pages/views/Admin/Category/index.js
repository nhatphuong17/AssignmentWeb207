import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ListCategory = ({categories,onRemoveCategory}) => {
    const removeHandleCategory = (id) => {
    onRemoveCategory(id)
    }
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
                <Link  className="btn btn-success" to="category">Thêm Category</Link>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>                      
                          
                                
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(({ idCate, nameCate}, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{nameCate}</td>
                    
                                    <td>
                                        <button className="btn btn-danger" onClick={() => removeHandleCategory(idCate)}>Delete</button>
                                        <Link className="btn btn-primary" to={`/admin/caterogies/${idCate}`}>Sửa</Link>
                                        
                                    </td>
                                </tr>
                            ))}
        
                        </tbody>
                    </table>
        
                </div>
            </div>
        </div>
        </div>
      
    )
}

ListCategory.propTypes = {

}

export default ListCategory
