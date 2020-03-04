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
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const spanErr = document.querySelector('.error');
let error;
const regex = /[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}/;

btn.addEventListener('click', () => {
    if (!regex.test(email.value)) {
        spanErr.textContent = "the email enterd is not valid ";
    }else {
        spanErr.textContent = '';
    }
})

