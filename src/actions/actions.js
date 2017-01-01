//Action types
export const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";

// Action creators
export function saveSearchResults(results) {
    console.log("Saving search results", results);
    return {type:SAVE_SEARCH_RESULTS, results};
}

