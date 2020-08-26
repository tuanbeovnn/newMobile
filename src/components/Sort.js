import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {

    onToggleForm = () =>{
        // this.setState({
        //     isDisplayForm : !this.isDisplayForm
        // });
        this.props.onToggleForm();
    }

    render() {
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
                                <a role="button">
                                    <span className="fa fa-sort-alpha-desc pr-5">
                                        Name Z-A
                                </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-success" onClick={this.onToggleForm}>Add</button>&nbsp;
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // chuyen state tu store thanh props cua apps
        isDisplayForm : state.isDisplayForm
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.toggleForm())
        }
        
    };
}
export default connect(mapStateToProps, mapDispatchToProps) (Sort);
