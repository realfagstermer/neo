import React, { Component, PropTypes } from 'react';

export default class SearchBox extends Component {
    constructor(props) {
        super(props);

        // For clearing the form
        this.emptyState = {
            query: "",
        };

        this.state = Object.assign({}, this.emptyState);
    }

    setQuery(event) {
        this.setState({ query: event.target.value });
    }

    render() {
        return (
            <div className="SearchBox">
                <form>
                    <div>
                        <label>
                            <span>Query</span>
                            <input type="text" value={this.state.query} onChange={value=>this.setQuery(value)} />
                        </label>
                    </div>
                    <div>
                        <button disabled={this.state.query.trim() == ""} id="submit" onClick={() => this.props.onSearchClick(this.state.query)}>
                        {this.props.searching ? "Searching": (this.props.failure ? "Failed" : "Search")}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    static PropTypes = {
        onSearchClick: PropTypes.func.isRequired,
        searching: PropTypes.bool.isRequired,
        failure: PropTypes.bool.isRequired,
    }
}
