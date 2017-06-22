import React from "react";
import NavigationBar from "./NavigationBar.js";

// Outermost component. Renders the navigation bar
// and everything else below it.
export default function Layout(props) {
	return (
		<div className="layout">
			<NavigationBar />
			{props.children}
		</div>
	);
}
