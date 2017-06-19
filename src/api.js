/**
 * setup for test/development mode
 */
var production = false;
// const testURL = 'http://localhost:8080/neo-api';
const testURL = "https://neo-test.uio.no/neo/api";
// const basicAuth = `Basic ${btoa('admin:district')}`;

/**
 * Setup for production mode
 */
const manifest = require('json!../manifest.webapp');
const URL = manifest.activities.neo.href;
console.log("manifest:", manifest, URL);

// Check if we are running development or production mode
if (URL && URL != "*") {
    var productionURL = URL + "/neo/api";
    production = true;
}

// const headers = production ? { 'Content-Type': 'application/json' } : {Authorization: basicAuth, 'Content-Type':
// 'application/json' };
export const serverURL = production ? productionURL : testURL;

// console.log("serverURL:", serverURL, "headers:", headers);
console.log("serverURL:", serverURL);
