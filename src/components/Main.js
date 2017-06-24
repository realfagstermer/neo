import React, { Component, PropTypes } from 'react';
import NavigationBar from "./NavigationBar.js";

// Outermost component. Renders the navigation bar
// and everything else below it.
export default class Main extends Component {
    
    render() {
        return (
    		<div className="main">
    			<NavigationBar />
    			{this.props.children}
    		</div>
    	);
    }
}