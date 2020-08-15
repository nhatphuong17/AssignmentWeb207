import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({ products, categories }) => {
    const price = products.length
    const price2 = categories.length
    return (
        <div>
            <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                    <div className="card-body">Products: <a>{price}</a></div>                
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                    <div className="card-body"> Category: <a>{price2}</a></div>
                   
                </div>
            </div>
        </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
