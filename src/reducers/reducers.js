//import * as actions from "../actions/actions";
import { SAVE_SEARCH_RESULTS } from "../actions/actions";
import { combineReducers } from 'redux'

function searchResults(state =[], action) {
    switch(action.type) {
        case SAVE_SEARCH_RESULTS:
            return action.results;
        default:
            return state;
    }
}

const reducer = combineReducers({
    searchResults,
});

export default reducer;