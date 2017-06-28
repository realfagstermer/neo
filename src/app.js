import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import MainContainer from './components/MainContainer'
import store from "./store";

// Create routes between the pages
render(
        <Provider store={store}>
    		<HashRouter>
    		    <MainContainer />
    		</HashRouter>
		</Provider>,
		document.querySelector('.app'));
