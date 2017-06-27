import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import { Provider } from 'react-redux'
import NavigationBar from './components/NavigationBar';
import MainContainer from './components/MainContainer'
import HomePage from './pages/Home';
import ClassifyPage from './pages/Classify';
import AdminPage from './pages/Admin';
import UsersPage from './pages/Users';
import HelpPage from './pages/Help';
import store from "./store";

// Create routes between the pages
render(
        <Provider store={store}>
    		<Router history={hashHistory}>
    			<Route path="/" component={MainContainer}>
    				<IndexRoute component={HomePage}></IndexRoute>
    				<Route path="classify" component={ClassifyPage}></Route>
    				<Route path="admin" component={AdminPage}></Route>
    				<Route path="users" component={UsersPage}></Route>
    				<Route path="help" component={HelpPage}></Route>
    			</Route>
    		</Router>
		</Provider>,
		document.querySelector('.app'));
