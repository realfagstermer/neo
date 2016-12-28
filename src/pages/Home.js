import React, { Component, PropTypes } from 'react';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    update() {
        this.setState({
            editing: OUStore.getEditing(),
            editParent: OUStore.getEditParent(),
        });
    }

	render() {
		return (
		    <div className="page">
			        <Search />
			</div>
		);
	}
}
