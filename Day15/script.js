
var user = prompt("Enter your Name: ");
var nam = document.getElementById("user");
nam.innerHTML = user;
document.querySelector('#btn')
  .addEventListener('click', handleClick)
console.log(user)
async function handleClick() {
  await new Promise((resolve) =>
                    setTimeout(resolve, 50))
  user = prompt("Enter your Name: ");
  var nam = document.getElementById("user");
  nam.innerHTML = user;
}


var input = document.getElementById("messageInput");
var chatDisplay = document.getElementById("chatDisp");
var typing = document.getElementById("typing");

input.addEventListener("keydown", function () {
  typing.style.visibility = "visible";
});

input.addEventListener("keyup", function () {
  typing.style.visibility = "hidden";
});

var displayChat = document.getElementById("chatDisp");

var s = document.querySelector("#sendMessage");
s.addEventListener("click", message, false);

function message() {
  var mess = document.createElement("div");
  mess.setAttribute("class", "right");
  mess.innerHTML = user + " : "+input.value;
  chatDisplay.appendChild(mess);
}
