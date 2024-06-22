document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get Form Data
  const formData = new FormData(event.target);
  const search = formData.get("search"); // comes from name attribute in form check input   field
  const page = formData.get("page");

  // Create a new URL ?search=humidity&page=1
  const url = new URL(window.location.href);
  console.log(url.search);

  // append Query Parameters
  const params = new URLSearchParams();
  params.append("search", search);
  params.append("page", page);
  console.log(params);

  // Update the urls search part
  url.search = params.toString();

  // Update the browser's URL without reloading the page
  window.history.pushState({}, "", url);

  document.body.innerHTML = `<p>New URL: ${url.href}</p>`;
});
