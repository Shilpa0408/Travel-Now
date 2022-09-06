let formbtn = document.querySelector('#login');
let loginform = document.querySelector('.login-form');
let formclose = document.querySelector('#form-close');
let signbtn = document.querySelector('#sign');
let signupform = document.querySelector('.signup-form');
let signformclose = document.querySelector('#sign-form-close');
let gotosign = document.querySelector('.signin');
let gotologin = document.querySelector('.log');
let menu = document.querySelector('#menu-bar');
let navi = document.querySelector('.navbar');
let btns = document.querySelectorAll('.gif-btn');

formbtn.addEventListener('click', () =>{
    loginform.classList.add('active');
});

formclose.addEventListener('click',()=>{
    loginform.classList.remove('active');
    console.log("hello");
})

signbtn.addEventListener('click', () =>{
    signupform.classList.add('active');
});

signformclose.addEventListener('click',()=>{
    signupform.classList.remove('active');
    console.log("hello");
});

gotosign.addEventListener('click', () =>{
    signupform.classList.add('active');
    loginform.classList.remove('active');
});

gotologin.addEventListener('click', () =>{
    loginform.classList.add('active');
    signupform.classList.remove('active');
});

menu.addEventListener('click',()=>{
    menu.classList.toggle('.fa-xmark');
    navi.classList.toggle('active');
    console.log("hello");
});

btns.forEach(i =>{
    i.addEventListener('click',()=>{
        document.querySelector('.controls .gif-btn').classList.remove('active');
        i.classList.add('action');
        let src = i.getAttribute('data-src');
        document.querySelector('#gif-slider').src = src;
    })
})

var swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        786: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});