import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {

    onToggleForm = () => {
        let { updateItem } = this.props;
        if (updateItem && updateItem.id !== '') {
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        // this.props.onClearProduct(
        //     {
        //         id: '',
        //         name : '',
        //         price: '',
        //         discountCode: '',
        //         Quantity: '',
        //         Unit: '',
        //         Origin: '',
        //         Warranty : '',
        //         Description: '',
        //         status : false
        //     }
        // );
    }

    render() {
        const { deleteAnyItem, checkItem } = this.props;
        return (
            <div className="col-6 display">
                <div className="col-3">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>
                                <a role="button">
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        Name A-Z
                                </span>
                                </a>
                            </li>
                            <li>

                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Name Z-A
                                </span>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-9">
                    <button type="submit" className="btn btn-success" onClick={this.onToggleForm}>Add</button>&nbsp;&nbsp;&nbsp;
                    {checkItem.length ? <button type="button" className="btn btn-danger " onClick={() => deleteAnyItem(checkItem)}>Xóa mục đã chọn</button> : ""}
                </div>
                <div className="col-4">
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // chuyen state tu store thanh props cua apps
        isDisplayForm: state.isDisplayForm,
        updateItem: state.updateItem,
        checkItem: state.checkItem,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        },
        onClearProduct: (item) => {
            dispatch(actions.saveProduct(item))
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        deleteAnyItem: (checkItem) => dispatch(actions.deleteAnyItem(checkItem)),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
