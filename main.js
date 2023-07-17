const form = document.getElementById("form");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const date = document.getElementById("date");
const time = document.getElementById("time");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("name", name1.value);
  localStorage.setItem("emailid", email.value);
  localStorage.setItem("number", number.value);
  localStorage.setItem("date", date.value);
  localStorage.setItem("time", time.value);
});
