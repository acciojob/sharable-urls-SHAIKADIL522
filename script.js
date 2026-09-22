// your code here
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const nameInput = document.getElementById("name");
  const yearInput = document.getElementById("year");
  const button = document.getElementById("button");
  const urlDisplay = document.getElementById("url");

  const BASE_URL = "https://localhost:8080/";

  function updateUrl(e) {
    if (e) e.preventDefault(); 

    const name = nameInput.value.trim();
    const year = yearInput.value.trim();

    const params = new URLSearchParams();
    if (name !== "") params.append("name", name);
    if (year !== "") params.append("year", year);

    const queryString = params.toString();
    urlDisplay.textContent = queryString ? `${BASE_URL}?${queryString}` : BASE_URL;
  }

  if (form) {
    form.addEventListener("submit", updateUrl);
  } else {
    button.addEventListener("click", updateUrl);
  }
});