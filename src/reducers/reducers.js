import * as actions from "../actions/actions";
import { RECEIVE_USERS } from "../actions/users";
import { combineReducers } from 'redux'

function search(state = {results: [], searching: false, failure: false}, action) {
    switch(action.type) {
        case actions.SEARCH_CONCEPTS:
            console.log("starting search");
            return {...state, searching: true};
        case actions.SEARCH_FAILURE:
            console.log("search failed");
            return {...state, searching: false,failure: true}
        case actions.SAVE_SEARCH_RESULTS:
            console.log("search completed");
            return {...state, searching: false,failure: false, results:action.payload};
        default:
            return state;
    }
}

function users(state = {list:[]}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {...state, list: action.payload};
        default:
            return state;
    }
}

function display(state = {message: []}, action) {
    switch(action.type) {
        case actions.FAILURE:
            return {...state, message: action.payload.message};
        default:
            return state;
    }
}

const reducer = combineReducers({
    search,
    users,
    display,
});

export default reducer;