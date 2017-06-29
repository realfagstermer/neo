import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import ClassifyPage from '../pages/Classify';
import AdminPage from '../pages/Admin';
import UsersPage from '../pages/Users';
import HelpPage from '../pages/Help';
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
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/classify" component={ClassifyPage}></Route>
                    <Route path="/admin" component={AdminPage}></Route>
                    <Route path="/users" component={UsersPage}></Route>
                    <Route path="/help" component={HelpPage}></Route>
                </Switch>
    		</div>
    	);
    }
}