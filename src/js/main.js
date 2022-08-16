const sectionBtn = document.querySelector('.hero__btn');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');
const body = document.body;

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