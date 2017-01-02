import store from "./store";
import { saveSearchResults } from "./actions/actions";

/**
 *  setup for test/development mode
 */
var production = false;
const testURL = 'http://localhost:8080/neo-api';
const basicAuth = `Basic ${btoa('admin:district')}`;

/**
 * Setup for production mode
 */
const manifest = require('json!../manifest.webapp');
const URL = manifest.activities.neo.href;
console.log("manifest:", manifest, URL);

//Check if we are running development or production mode
if (URL && URL != "*") {
    var productionURL = URL  + "/neo-api";
    production  = true;
}

const headers = production ? { 'Content-Type': 'application/json' } : {Authorization: basicAuth, 'Content-Type': 'application/json' };
const serverUrl = production ? productionURL : testURL;

console.log("serverUrl:", serverUrl, "headers:", headers);

/**
 * Default options object to send along with each request
 */
const fetchOptions = {
    method: 'GET',
    headers: headers
};

/**
 * `fetch` will not reject the promise on the a http request that is not 2xx, as those requests could also return valid responses.
 * We will only treat status codes in the 200 range as successful and reject the other responses.
 */
function onlySuccessResponses(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        console.log("Request failed:", response);
        alert(`Request failed: ${response.statusText}`);
        return Promise.reject(response);
    }
}

export function findConcepts(term) {
    console.log("searching for:", term);
    return fetch(`${serverUrl}/concepts?term=${term.trim()}`)
        .then(onlySuccessResponses)
        .then(response => response.json())
        .then(response => store.dispatch(saveSearchResults(response)));
}

export function saveConcept(concept) {
    const id = concept.id;
    let method, URL;
    if (id && id != "") { //Should we POST a new unit, or update an existing one?
        method = "PUT";
        URL = `${serverUrl}/concepts/${id}`;
    } else {
        method = "POST";
        URL = `${serverUrl}/concepts`;
    }

    console.log("saving: ", method, concept);

    return fetch(URL, Object.assign({}, fetchOptions, { method: method, body: JSON.stringify(concept) }))
        .then(onlySuccessResponses)
        // Parse the json response
        .then(response => response.json())
        // Log any errors to the console.
        .catch(error => console.error(error));
}

export function deleteConcept(id) {
    console.log("deleting:", id);
    // Send DELETE request to the server to delete the concept
    return fetch(
        `${serverUrl}/concepts/${id}`,
        {
            headers: fetchOptions.headers,
            method: 'DELETE',
        }
    )
    .then(onlySuccessResponses);
}
