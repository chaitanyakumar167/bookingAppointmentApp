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

    axios
      .post(
        "https://crudcrud.com/api/35e3b43a4c4646d985e69878a6b32452/BookingApp",
        myobj
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // let myobj1 = JSON.stringify(myobj);
    // localStorage.setItem(email.value, myobj1);
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
      obj.name +
        "   " +
        " - " +
        obj.email +
        "   " +
        " - " +
        obj.number +
        "   " +
        " - " +
        obj.date +
        "   " +
        " - " +
        obj.time
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
function showAllBookings() {
  axios
    .get("https://crudcrud.com/api/35e3b43a4c4646d985e69878a6b32452/BookingApp")
    .then((res) => {
      const data = res.data;
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        showItems(data[i]);
      }
    })
    .catch((err) => console.log(err));
}

window.addEventListener("DOMContentLoaded", showAllBookings);
