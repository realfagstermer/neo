import * as actions from "../actions/actions";
// import { SAVE_SEARCH_RESULTS } from "../actions/actions";
import { combineReducers } from 'redux'

function searchResults(state = [], action) {
// console.log("searchResults reducer", action);
    switch(action.type) {
        case actions.SAVE_SEARCH_RESULTS:
            return action.payload;
            break;
        default:
            return state;
    }
}

function display(state = [], action) {
    switch(action.type) {
        case actions.SEARCH_CONCEPTS:
            console.log("starting search");
            return {...state, searching: true};
        case actions.SEARCH_FAILURE:
            console.log("search failed");
            return {...state, searching: false,failure: true}
        case actions.SAVE_SEARCH_RESULTS:
            console.log("search completed");
            return {...state, searching: false,failure: false}
        default:
            return state;
    }
}

const reducer = combineReducers({
    searchResults,
    display,
});

export default reducer;