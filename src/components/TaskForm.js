import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            price: '',
            discountCode: '',
            Quantity: '',
            Unit: '',
            Origin: '',
            Warranty : '',
            Description: '',
            status : false
        }
    }
    onClose = () => {
        this.props.onClose();
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name] : value 
        });
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddProduct(this.state);
    }
    render() {
        return (
            <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">ADD PRODUCT
                    <span className= "fa fa-times-circle text-right" onClick = {this.onClose}>

                    </span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <label>Name :</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={this.state.name}
                        onChange = {this.onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Price :</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="price" 
                        value={this.state.price}
                        onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity :</label>
                        <input 
                        type="number" 
                        className="form-control"
                        name="Quantity" 
                        value={this.state.Quantity}
                        onChange = {this.onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Discount Code :</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="discountCode" 
                        value={this.state.discountCode}
                        onChange = {this.onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Unit :</label>
                        <select 
                        className="form-control" 
                        required="required"
                        name="Unit" 
                        value={this.state.Unit}
                        onChange = {this.onChange}
                        >
                            <option value="1">pcs</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Origin :</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="Origin" 
                        value={this.state.Origin}
                        onChange = {this.onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Warranty :</label>
                        <input 
                        type="number" 
                        className="form-control"
                        name="Warranty" 
                        value={this.state.Warranty}
                        onChange = {this.onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Description :</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="Description" 
                        value={this.state.Description}
                        onChange = {this.onChange}  
                        />
                    </div>
                    <label>Status :</label>
                    <select 
                    className="form-control" 
                    required="required"
                    name="status" 
                    value={this.state.status}
                    onChange = {this.onChange} 
                    >
                        <option value={true}>In Stock</option>
                        <option value={false}>Out of Stock</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                        <button type="submit" className="btn btn-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct : (product) =>{
            dispatch(actions.addProduct(product));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
