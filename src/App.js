import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a><button
                        className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i
                            className="fas fa-bars"></i></button>
                    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search"
                                aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="userDropdown" href="www.google.com" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" >Settings</a><a className="dropdown-item" href="www.google.com">Activity Log</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                      
                    </div>
                    <div id="layoutSidenav_content">
                        <div className="container-fluid">
                            <h1 className="mt-4">LIST OF PRODUCTS</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Product</li>
                            </ol>
                            <div className="card mb-4">
                                <div className="card-header"><i className="fas fa-table mr-1"></i>DataProducts</div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Select</th>
                                                    <th>Name</th>
                                                    <th>Discount Code</th>
                                                    <th>Unit</th>
                                                    <th>Origin</th>
                                                    <th>Warranty</th>
                                                    <th>Description</th>
                                                    <th>Status</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>


                                                </tr>
                                                <tr>
                                                    <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <form>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Actions: </label>
                                        <button type="button" className="btn btn-danger">Remove</button>
                                        <button type="button" className="btn btn-warning">Update</button>
                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <footer className="py-4 bg-light mt-auto">

                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
