//toogle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



var typed = new Typed(".multiple-text", {
    strings: ['UI/UX Designer', 'Chartered Accountant', 'Software Engineer', 'Marketer','Financial Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

    // sticky navbar

    let header =document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    //remove toogle icon and navbar when click navbar link and scroll

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// Scroll reveal

ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
