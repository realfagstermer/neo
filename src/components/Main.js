import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassifyPage from './pages/ClassifyPage';
import AdminPage from './pages/AdminPage';
import UsersPageContainer from './pages/UsersPageContainer';
import HelpPage from './pages/HelpPage';
import NavigationBar from "./NavigationBar";
import Message from "./Message";
import { boundGetCurrentUser, boundGetAllUsers } from "../actions/users";
import { CurrentUser } from "./users";

// Outermost component. Renders the navigation bar
// and everything else below it.
export default class Main extends Component {
    componentWillMount() {
        // Load some data on application startup
        boundGetAllUsers();
        boundGetCurrentUser();
    }
    
    render() {
        return (
    		<div className="main">
    		    <Message message= {this.props.message} />
    			<NavigationBar />
    		    <CurrentUser {...this.props.me}/>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/classify" component={ClassifyPage}></Route>
                    <Route path="/admin" component={AdminPage}></Route>
                    <Route path="/users" component={UsersPageContainer}></Route>
                    <Route path="/help" component={HelpPage}></Route>
                </Switch>
    		</div>
    	);
    }
}