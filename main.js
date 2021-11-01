const cards = document.querySelectorAll('.card')
const sliderCard = document.querySelector('.slider-card')
const btnNext = document.querySelector('.btn-next')
cards.forEach( card => console.log(card.getBoundingClientRect())) 

let index = 0

btnNext.onclick = () => {
    index++
    sliderCard.style.transform = `translateX(${-(227 * index)}px)`
}