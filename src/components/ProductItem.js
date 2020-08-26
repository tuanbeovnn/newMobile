import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class ProductItem extends Component {

    onDeleteItem = () => {
        this.props.onDeleteItem(this.props.product.id);
        this.props.onCloseForm();
    }

    onUpdate = () => {
        
        this.props.onOpenForm();
        this.props.onUpdateItem(this.props.product); 
        
    }

    render() {
        let { product, index } = this.props;
        console.log('product :>> ', product);
        return (
            <tr>
                <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.discountCode}</td>
                <td>{product.unit}</td>
                <td>{product.origin}</td>
                <td>{product.warranty} year</td>
                <td>{product.description}</td>
                <td className="text-center">
                    <span className={product.status === true ? 'label label-danger' : 'label label-success'}>
                        {product.status === true ? 'In Stock' : 'Out of Stock'}
                    </span>
                </td>
                <td>
                    <button type="button" className="btn btn-danger text-center" onClick={this.onDeleteItem}>Remove</button>&nbsp;
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={this.onUpdate}
                    >Update</button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = state => {
    return {
        // chuyen state tu store thanh props cua apps
        products : state.products
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteItem : (id) => {
            dispatch(actions.deteleItem(id))
        }
        ,onCloseForm : () => {
            dispatch(actions.closeForm())
        },
        onOpenForm : () =>{
            dispatch(actions.openForm())
        },
        onUpdateItem : (item) =>{
            dispatch(actions.updatedItem(item))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductItem);

