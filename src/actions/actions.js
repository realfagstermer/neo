import { CALL_API } from "redux-api-middleware";
import { serverURL } from  "../api";
import store from "../store";

// Action types
// General
export const GET = "GET";
export const FAILURE = "FAILURE";
// Search
export const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";
export const SEARCH_CONCEPTS = "SEARCH_CONCEPTS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

// Action creators
export function findConcept(term) {
    console.log("Executing search for term:", term)
    return {
      [CALL_API]: {
        endpoint: `${serverURL}/concepts?term=${term.trim()}`,
        method: 'GET',
        types: [SEARCH_CONCEPTS, SAVE_SEARCH_RESULTS, SEARCH_FAILURE]
      }
    }
  }

// Bound action creators
// export const boundFindConcept = term => store.dispatch(findConcept(term));
