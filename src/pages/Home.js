import React, { Component, PropTypes } from 'react';
import Search from '../components/Search'
import SearchResult from '../components/SearchResult'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
		    <div className="page">
			        <Search />
			        <SearchResult />
			</div>
		);
	}
}
