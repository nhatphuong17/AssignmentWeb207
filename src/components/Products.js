import React, { Component } from "react";

export default class Products extends Component {
  render() {
    let elmProduct = this.props.listproduct.map((product, index) => {
      return (
        <tr key={product.id}>
          <td>{index +1}</td>
          <td>{product.name}</td>
          <td>
            <img width="100px" src={product.image}/>
          </td>
          <td>{product.price}</td>
          <td>
          <button type="button" class="btn btn-danger">Remove</button>
          </td>
        </tr>
      );
    });
    return (
      <table
        className="table table-bordered"
        id="dataTable"
        width="100%"
        cellSpacing={0}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{elmProduct}</tbody>
      </table>
    );
  }
}
