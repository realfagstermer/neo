import React, { Component, PropTypes } from 'react';
import NavigationBar from "./NavigationBar";
import Message from "./Message";
import { boundGetAllUsers } from "../actions/users";

// Outermost component. Renders the navigation bar
// and everything else below it.
export default class Main extends Component {
    componentWillMount() {
        // Load some data on application startup
        boundGetAllUsers();
    }
    
    render() {
        return (
    		<div className="main">
    		    <Message message= {this.props.message} />
    			<NavigationBar />
    			{this.props.children}
    		</div>
    	);
    }
}