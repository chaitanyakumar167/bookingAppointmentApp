const form = document.getElementById("form");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const date = document.getElementById("date");
const time = document.getElementById("time");
const list = document.getElementById("list");
form.addEventListener("submit", function (e) {
  if (!form.checkValidity()) {
    e.preventDefault();
  } else {
    e.preventDefault();

    let myobj = {
      name: name1.value,
      email: email.value,
      number: number.value,
      date: date.value,
      time: time.value,
    };
    let myobj1 = JSON.stringify(myobj);
    localStorage.setItem(email.value, myobj1);
    showItems(myobj);
  }
  form.classList.add("was-validated");
});

function showItems(obj) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  let deletebtn = document.createElement("button");
  deletebtn.className = "btn btn-danger btn-sm float-right delete";
  deletebtn.appendChild(document.createTextNode("X"));
  const editbtn = document.createElement("button");
  editbtn.className = "btn btn-warning btn-sm float-right edit";
  editbtn.textContent = "E";

  li.appendChild(
    document.createTextNode(
      name1.value +
        "   " +
        email.value +
        "   " +
        number.value +
        "   " +
        date.value +
        "   " +
        time.value
    )
  );
  deletebtn.onclick = () => {
    localStorage.removeItem(obj.email);
    list.removeChild(li);
  };
  editbtn.onclick = () => {
    name1.value = obj.name;
    email.value = obj.email;
    number.value = obj.number;
    date.value = obj.date;
    time.value = obj.time;
    localStorage.removeItem(obj.email);
    list.removeChild(li);
  };
  li.appendChild(editbtn);
  li.appendChild(deletebtn);
  list.appendChild(li);
}
