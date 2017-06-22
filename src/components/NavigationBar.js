import React from "react";
import { Link } from "react-router";

// Renders the navigation bar on the top with links to various pages.
export default function NavigationBar() {
	return (
		<div className="nav">
			<ul>
				<li><Link to="/">Search</Link></li>
				<li><Link to="/help">Help</Link></li>
			</ul>
		</div>
	);
}
