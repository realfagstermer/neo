import React, { Component, PropTypes } from 'react';
import SearchContainer from "../components/SearchContainer";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
		    <div className="page">
			        <SearchContainer />
			</div>
		);
	}
}
