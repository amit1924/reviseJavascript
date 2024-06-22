// Base URL
const baseUrl = "http://example.com";

// Create a new URL object
const url = new URL(baseUrl);
console.log(url);

// Create URLSEARCHPARAMS object to construct query parameters

const params = new URLSearchParams();
params.append("search", "query");
params.append("page", "2");
console.log(params);

//Attch the query string to the base URL
url.search = params.toString();

document.body.innerHTML = `<p>Constructed URL:${url.href}</p>`;
