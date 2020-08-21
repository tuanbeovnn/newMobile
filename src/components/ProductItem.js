import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        let { product, index } = this.props;
        
        return (
            <tr>
                <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.discountCode}</td>
                <td>{product.unit}</td>
                <td>{product.origin}</td>
                <td>{product.warranty}</td>
                <td>{product.description}</td>
                <td className="text-center">
                    <span className={product.status === true ? 'label label-danger' : 'label label-success'}>
                       {product.status === true ?'In Stock' : 'Out of Stock'}
                    </span>
                </td>
                {/* <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                </td> */}
            </tr>
        );
    }
}
export default ProductItem;
