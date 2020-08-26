import React, { Component } from 'react';
import ProductItem from './ProductItem';
import {connect} from 'react-redux';

class ProductList extends Component {
    render() {
        let { products } = this.props;
        
        let eleTasks = products.map((product, index)=>{
            return  <ProductItem 
            key = {product.id} 
            index = {index} 
            product = {product}
            onUpdate = {this.props.onUpdate}
            />
        });
        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Discount Code</th>
                            <th>Unit</th>
                            <th>Origin</th>
                            <th>Warranty</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eleTasks}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        products : state.products
    }
};
export default connect(mapStateToProps,null) (ProductList);
