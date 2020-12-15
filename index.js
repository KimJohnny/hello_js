// title = document.getElementById("title");

// console.dir(title);
// console.dir(document);

// title.innerHTML = "Hi! From JS";
// title.style.color="red";

// document.title = "I own you";

// const title = document.querySelector("#title");


/* function handleClick() {
    title.style.color = "red";
}

title.addEventListener("click", handleClick);
// window.addEventListener("resize', handleResize()) */

const title = document.querySelector("#title");
console.log(title)
console.log(title.className)
console.log(typeof(title))
/* const BASE_COLOR = "red";
const OTHER_COLOR = "blue";

function handleClick() {
    const currentColor = title.style.color;

    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
        console.log("color is changed !")
    } else {
        title.style.color = BASE_COLOR;
        console.log("color is restored !")
    }

} */

/*
function handleOff() {
    console.log("Internet Connection is OFF");
}


function handleOn() {
    console.log("Internet Connection is ON");
}

window.addEventListener('offline', handleOff);
window.addEventListener('online', handleOn);

console.log("hello")

window.addEventListener('offline', (event) => {
    console.log("The network connection has been lost.");
});

window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
}); 
*/

const CLICKED_CLASS = "clicked";

function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // console.log(hasClass);
    // if (!hasClass) {
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS)
    // }
    title.classList.toggle(CLICKED_CLASS);

}


function init() {
    // title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);

} 

init();
