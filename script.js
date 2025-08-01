let sideNavButton = document.getElementById("sideNav-button")
let sideNav = document.getElementById("sidenav")
let state = 1 
let mainContent = document.querySelector("main-content")

sideNavButton.onclick = function () {
    if(state == 1) {
        sideNav.style.width = "100vw";
        mainContent.style.left = "0";
        sideNav.style.display = "none";
        state = 0
    } else {
        
        mainContent.style.width = "calc(100vw - 18vw)";
        mainContent.style.left = "18vw";
        sideNav.style.display = "flex";
        state = 1
    }
}