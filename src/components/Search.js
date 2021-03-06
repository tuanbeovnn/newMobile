import React, { Component } from 'react';


class Search extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter keyword..." />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">
                            <span className="fa fa-search mr-5"></span>Search
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}
export default Search;
