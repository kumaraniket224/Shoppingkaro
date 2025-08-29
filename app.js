let mode =document.querySelector("#mbtn");
let body = document.querySelector("body");
let currentMode = "light";

mode.addEventListener("click", () => {
    if(currentMode === "light"){
        currentMode = "Dark";
        body.classList.add("Dark");
        body.classList.remove("light");

    }
    else{
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("Dark");
    }
})
