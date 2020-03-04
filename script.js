let Menu = document.getElementById("menu");
let Menu2 = document.getElementById("menu2");
Menu.addEventListener("click", function () {
    document.getElementById("navList2").style.display = "block";
    Menu2.style.display = "block";
    Menu.style.display = "none";
}) 
Menu2.addEventListener("click", function () {
    document.getElementById("navList2").style.display = "none";
    Menu.style.display = "block";
    Menu2.style.display = "none";
}) 