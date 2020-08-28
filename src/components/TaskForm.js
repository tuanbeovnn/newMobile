import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name : '',
            price: '',
            discountCode: '',
            Quantity: '',
            Unit: '',
            Origin: '',
            Warranty : '',
            Description: '',
            status : false
        };
    }
    onClose = () => {
        this.props.onCloseForm();
    }

    onClear = () => {
        this.setState({
            id: '',
            name : '',
            price: '',
            discountCode: '',
            Quantity: '',
            Unit: '',
            Origin: '',
            Warranty : '',
            Description: '',
            status : false
        });
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name] : value 
        });
    }
    componentWillMount() {
        if(this.props.updateItem && this.props.updateItem.id){
            this.setState({
                id: this.props.updateItem.id,
                name : this.props.updateItem.productName,
                price: this.props.updateItem.price,
                discountCode: this.props.updateItem.discountCode,
                Quantity: this.props.updateItem.quantity,
                Unit: this.props.updateItem.unit,
                Origin: this.props.updateItem.origin,
                Warranty : this.props.updateItem.warranty,
                Description: this.props.updateItem.description,
                status : this.props.updateItem.status
            });
        }else {
            this.onClear();
        }
    }
    onSave = (event) => {
        event.preventDefault(); 
        this.props.onSaveProduct(this.state);
        this.props.onCloseForm();

    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(nextProps && nextProps.updateItem){
            this.setState({
                id: nextProps.updateItem.id,
                name : nextProps.updateItem.productName,
                price: nextProps.updateItem.price,
                discountCode: nextProps.updateItem.discountCode,
                Quantity: nextProps.updateItem.quantity,
                Unit: nextProps.updateItem.unit,
                Origin: nextProps.updateItem.origin,
                Warranty : nextProps.updateItem.warranty,
                Description: nextProps.updateItem.description,
                status : nextProps.updateItem.status
                
            });
        }else {
            this.onClear();
        }
    }
    render() {
        if(!this.props.isDisplayForm) return null;
        return (
            <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {!this.state.id ? 'Add Product' : 'Update'}
                    <span className= "fa fa-times-circle text-right" onClick = {this.onClose}>

                    </span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Name :</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={this.state.name || ""}
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
                        value={this.state.unit}
                        onChange = {this.onChange}
                        >
                            <option value="pcs">pcs</option>
                            <option value="cai">cai</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Origin :</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="Origin" 
                        value={this.state.origin}
                        onChange = {this.onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Warranty :</label>
                        <input 
                        type="number" 
                        className="form-control"
                        name="Warranty" 
                        value={this.state.warranty}
                        onChange = {this.onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Description :</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="Description" 
                        value={this.state.description}
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
        isDisplayForm : state.isDisplayForm,
        updateItem : state.updateItem
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveProduct : (product) =>{
            dispatch(actions.saveProduct({product}));
        },
        onCloseForm : () => {
            dispatch(actions.closeForm())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
