const navBar = document.querySelector(".navbar")
window.addEventListener('scroll', () => {
    if(window.scrollTop() > 90) {
        navBar.classList.add("navbar-shrink")
    } else {
        navBar.classList.remove("navbar-shrink")
    }
})