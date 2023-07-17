const form = document.getElementById("form");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const date = document.getElementById("date");
const time = document.getElementById("time");
form.addEventListener("submit", function (e) {
  if (!form.checkValidity()) {
    e.preventDefault();
  } else {
    let myobj = {
      name: name1.value,
      email: email.value,
      number: number.value,
      date: date.value,
      time: time.value,
    };
    let myobj1 = JSON.stringify(myobj);
    localStorage.setItem(email.value, myobj1);
  }
  form.classList.add("was-validated");
});
