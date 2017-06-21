import React, { Component, PropTypes } from 'react';
import { boundFindConcept } from "../actions/actions";

export default class SearchBox extends Component {
    constructor(...args) {
        super(...args);

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
                        <button disabled={this.state.query.trim() == ""} id="submit" onClick={() => boundFindConcept(this.state.query)}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
