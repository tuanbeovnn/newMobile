import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import ProductList from './components/ProductList';
import './App.css';
import Header from './components/Header';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    
    render() {
        let {isDisplayForm} = this.props;
        // let elmTaskForm = isDisplayForm === true ? <TaskForm /> : '';
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                    <Header />
                </div>

                <div className= {isDisplayForm ? 'col-2' : ''}>
                    <TaskForm />
                    {/* {elmTaskForm} */}
                </div>

                <div id="layoutSidenav" className={isDisplayForm ? 'col-10' : 'col-12'}>
                    <div id="layoutSidenav_content">
                        <div className="container-fluid">
                            <h1 className="mt-4">LIST OF PRODUCTS</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Product</li>
                            </ol>
                                <Control />
                            <div className="card mb-4 mt-15">
                                <div className="card-header"><i className="fas fa-table mr-1"></i>DataProducts</div>
                                <div className="card-body">
                                    <ProductList
                                      
                                        onUpdate = {this.onUpdate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps) (App);
