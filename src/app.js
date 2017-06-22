import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import { Provider } from 'react-redux'
import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout'
import Home from './pages/Home';
import Classify from './pages/Classify';
import Admin from './pages/Admin';
import Users from './pages/Users';
import Help from './pages/Help';
import store from "./store";

// Create routes between the pages
render(
        <Provider store={store}>
    		<Router history={hashHistory}>
    			<Route path="/" component={Layout}>
    				<IndexRoute component={Home}></IndexRoute>
    				<Route path="classify" component={Classify}></Route>
    				<Route path="admin" component={Admin}></Route>
    				<Route path="users" component={Users}></Route>
    				<Route path="help" component={Help}></Route>
    			</Route>
    		</Router>
		</Provider>,
		document.querySelector('.app'));
