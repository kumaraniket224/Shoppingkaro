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

const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach( 
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)


const goprev = () => {

    if(counter !=0){
       counter--;
    slideImage(); 
    }
    
};

const gonext = () =>{
    if(counter < slides.length -1){
        counter++;
    slideImage();
    }
    
};
 
const slideImage = () => {
 slides.forEach(
    (slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    }
 )
};