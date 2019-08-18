
const hamBtn = document.querySelector('.hamburger-btn');
const fullMenu = document.querySelector('.full-screen-menu');
const close = document.querySelector('.close-tab');

hamBtn.addEventListener('click', () =>{
    fullMenu.style.display = "flex";
    document.body.style.overflow = "hidden";
});

close.addEventListener('click', () =>{
    fullMenu.style.display = "none";
    document.body.style.overflow = '';
})