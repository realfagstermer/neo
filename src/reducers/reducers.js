import * as actions from "../actions/actions";
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

const reducer = combineReducers({
    search,
});

export default reducer;