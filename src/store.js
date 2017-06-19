/**
 * the redux store
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/reducers'

const loggerMiddleware = createLogger();

const store = createStore(
        rootReducer,
        applyMiddleware(
          apiMiddleware,
          // thunk lets us dispatch() functions
          thunkMiddleware,
          // logs actions
          loggerMiddleware 
        )
      );

export default store;