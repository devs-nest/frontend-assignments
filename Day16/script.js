var user = prompt("Enter your Name: ");
var nam = document.getElementById("user");
nam.innerHTML = user;
console.log(user);

one();
async function getUsers(names) {
  let git = [];

  for (let name of names) {
    let gituser = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      (failResponse) => {
        return null;
      }
    );
    git.push(gituser);
  }

  let results = await Promise.all(git);

  return results;
}

var bio = document.querySelector("#bio");
async function one() {
  let users = await getUsers([nam.innerText]);
  var bio = document.querySelector("#bio");
  bio.innerHTML = users[0].bio;
}

document.querySelector("#btn").addEventListener("click", handleClick);
async function handleClick() {
  await new Promise((resolve) => setTimeout(resolve, 50));
  user = prompt("Enter your Name: ");
  var nam = document.getElementById("user");
  nam.innerHTML = user;
  one();
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
  mess.innerHTML = user + " : " + input.value;
  chatDisplay.appendChild(mess);
}
