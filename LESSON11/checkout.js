const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const firstname = urlParams.get("firstname");
const lastname = urlParams.get("lastname");
alert("Welcome " + firstname + " " + lastname);

