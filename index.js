// const hamburger = document.getElementById('.hamburger');
// const navBut = document.getElementById("#nav-but");

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle("active");
//     navBut.classList.toggle('active');
// })

function showmenuBar() {
    const menuBar = document.querySelector('.menu-bar')
    menuBar.style.display = 'flex'
}
function hidemenuBar() {
    const menuBar = document.querySelector('.menu-bar')
    menuBar.style.display = 'none'
}