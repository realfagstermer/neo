import React from "react";


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
                        <button id="submit" onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
