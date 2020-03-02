let Menu = document.getElementById("menu");
let Menu2 = document.getElementById("menu2");


Menu.addEventListener("click", function () {
    document.getElementById("navList2").style.display = "block";
    document.getElementById("menu2").style.display = "block";
    document.getElementById("menu").style.display = "none";

}) 
Menu2.addEventListener("click", function () {
    document.getElementById("navList2").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu2").style.display = "none";

}) 