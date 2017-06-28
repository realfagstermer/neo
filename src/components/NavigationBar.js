import React from "react";
import { Link } from "react-router-dom";

// Renders the navigation bar on the top with Links to various pages.
export default function NavigationBar() {
	return (
		<div className="nav">
    		<nav>
    			<ul>
    				<li><Link to="/">Search</Link></li>
    				<li><Link to="/classify">Classify</Link></li>
    				<li><Link to="/admin">Admin</Link></li>
    				<li><Link to="/users">Users</Link></li>
    				<li><Link to="/help">Help</Link></li>
    			</ul>
			</nav>
		</div>
	);
}
