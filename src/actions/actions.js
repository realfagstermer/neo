//Action types
const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";

// Action creators
export function saveSearchResults(results) {
    return{type:SAVE_SEARCH_RESULTS, results}
}