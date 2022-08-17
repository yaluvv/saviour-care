const sectionBtn = document.querySelector('.hero__btn');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');
const body = document.body;
const headerNavLinks = document.querySelectorAll('.header__nav-link');
const burgerMenu = document.querySelector('.burger-menu')
const headerNav = document.querySelector('.header__nav')
let lengthLinks = headerNavLinks.length

sectionBtn.addEventListener('click', () => {
    popup.classList.toggle('popup--active')
    body.classList.toggle('scroll-hidden')
})

closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('popup--active')
    body.classList.toggle('scroll-hidden')
})

popup.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.classList.remove('popup--active')
        body.classList.remove('scroll-hidden')
    }
})
const makeScrollHidden = () => {
    if (headerNav.classList.contains('header__nav--active')) {
        body.classList.add('scroll-hidden')
    } else {
        body.classList.remove('scroll-hidden')
    }
}

burgerMenu.addEventListener('click', () => {

    headerNav.classList.toggle('header__nav--active')
    burgerMenu.classList.toggle('burger-menu--active')

    makeScrollHidden()

})

headerNavLinks.forEach(link => link.addEventListener('click', () => {
    headerNav.classList.remove('header__nav--active')
    burgerMenu.classList.remove('burger-menu--active')
    makeScrollHidden()
}
))

function navActive(el) {
    for (let i = 0; i < lengthLinks; i++) {
        headerNavLinks[i].classList.remove("header__nav-link--active")
    }

    el.classList.add("header__nav-link--active")
}

for (let i = 0; i < lengthLinks; i++) {
    headerNavLinks[i].addEventListener("click", function () {
        navActive(this);
    })
}

headerNavLinks.forEach(anc => anc.addEventListener('click', function (event) {
    event.preventDefault();

    const id = anc.getAttribute('href')
    const elem = document.querySelector(id);


    window.scroll({
        top: elem.offsetTop,
        behavior: "smooth"
    })
}))