let ownerName = "Gabriel g"
let userName = "gabrielg6594";

document.querySelectorAll(".Gabriel G").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
