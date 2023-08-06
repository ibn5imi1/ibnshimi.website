// start vars
let header = document.querySelector("header");
let menu = document.querySelector(".menu");
let links = document.querySelectorAll("header nav a")
// end vars


menu.onclick = function() {
    if(header.className === "long") {
        header.classList.remove("long");
        links.forEach((ele)=> ele.style.display = "none");
    }else {
        header.classList.add("long");
        links.forEach((ele)=> ele.style.display = "block");
    }
}

