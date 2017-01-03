import React, { Component, PropTypes } from 'react';
import { findConcepts } from "../api";

export default class Form extends Component {
    constructor(...args) {
        super(...args);

        // For clearing the form
        this.emptyState = {
            query: "",
        };

        this.state = Object.assign({}, this.emptyState);

        this.setQuery = this.setQuery.bind(this);
    }

    setQuery(event) {
        this.setState({ query: event.target.value });
    }

    render() {
        return (
            <div className="form">
                <form>
                    <div>
                        <label>
                            <span>Query</span>
                            <input type="text" value={this.state.query} onChange={this.setQuery} />
                        </label>
                    </div>
                    <div>
                        <button disabled={this.state.query.trim() == ""} id="submit" onClick={() => findConcepts(this.state.query)}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
