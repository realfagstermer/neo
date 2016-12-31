import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducers'

import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout'
import Home from './pages/Home';
import Help from './pages/Help';

const store = createStore(reducer);

// Create routes between the pages
render(
        <Provider store={store}>
    		<Router history={hashHistory}>
    			<Route path="/" component={Layout}>
    				<IndexRoute component={Home}></IndexRoute>
    				<Route path="help" component={Help}></Route>
    			</Route>
    		</Router>
		</Provider>,
		document.querySelector('.app'));
