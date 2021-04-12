let colorModeBtn = document.getElementById("colorModeBtn");
let body = document.querySelector("body");
let sideBar = document.getElementById("sidebar");
let links = document.querySelectorAll("a");
let header = document.querySelector("header");
let posts = document.getElementsByClassName("post");
let buttons = document.getElementsByTagName("button");
let textArea = document.getElementsByTagName("textarea");
let contentArea = document.getElementsByClassName("content")

colorModeBtn.onclick = function() {
    toggleBtnText(this);
    toggleColorMode();
}

function toggleBtnText(colorModeBtn) {
    if(colorModeBtn.innerHTML === "Light Mode") {
        colorModeBtn.innerHTML = "Dark Mode";
    } else {
        colorModeBtn.innerHTML = "Light Mode";
    }
}

function toggleColorMode() {
    body.classList.toggle("light-mode-for-body");
    sideBar.classList.toggle("light-mode");
    header.classList.toggle("light-mode");
    for(let i = 0; i < posts.length; i++) {
        posts[i].classList.toggle("light-mode-for-posts");
    }
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("light-mode-for-btns");
    }
    for(let i = 0; i < textArea.length; i++) {
        textArea[i].classList.toggle("light-mode-for-textarea");
    }
    for(let i = 0; i < contentArea.length; i++) {
        contentArea[i].classList.toggle("light-mode-for-content");
    }
};

