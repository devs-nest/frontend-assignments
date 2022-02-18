var user = prompt("Enter your Name: ");
var nam = document.getElementById("user");
nam.innerHTML = user;
document.querySelector("#btn").addEventListener("click", handleClick);
console.log(user);
async function handleClick() {
  await new Promise((resolve) => setTimeout(resolve, 50));
  user = prompt("Enter your Name: ");
  var nam = document.getElementById("user");
  nam.innerHTML = user;
}
