import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import ProductList from './components/ProductList';
import './App.css';
import Header from './components/Header';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           
            isDisplayForm : false,
        }
    }
    onToggleForm = () =>{
        this.setState({
            isDisplayForm : !this.isDisplayForm
        });
    }
    onClose = () => {
        this.setState({
            isDisplayForm : false
        });
    }
    render() {
        let {isDisplayForm} = this.state;
        let elmTaskForm = isDisplayForm ? <TaskForm onClose={ this.onClose }/> : '';
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                    <Header />
                </div>

                <div className= {isDisplayForm ? 'col-3' : ''}>
                    {/* <TaskForm /> */}
                    {elmTaskForm}
                </div>

                <div id="layoutSidenav" className={isDisplayForm ? 'col-9' : 'col-12'}>
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
                                    <ProductList/>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary" onClick = {this.onToggleForm}>Add</button>&nbsp;
                                    <button type="button" className="btn btn-danger text-center">Remove</button>&nbsp;
                                    <button type="button" className="btn btn-warning">Update</button>
                                    
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
export default App;
