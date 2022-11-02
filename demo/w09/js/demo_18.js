const navbar = document.querySelector('#nav')

window.addEventListener('scroll', function() {
    if(this.window.pageYOffset > 100){
        navbar.classList.add('navbar-fixed');
    }
    else{
        navbar.classList.remove('navbar-fixed');
    }
})