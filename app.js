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

 function chalja(){
    setTimeout(show, 1500);

    function show(){
        document.getElementById('main').style.display="block";
    document.getElementById('imglogo').style.display="none"   }
 }

