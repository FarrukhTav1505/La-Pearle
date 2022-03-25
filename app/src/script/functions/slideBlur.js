const mainSlide = document.querySelectorAll('.main__slide'),
      mainSlideImg = document.querySelectorAll('.main__slide-img'),
      mainSlideText = document.querySelectorAll('.main__slide-text'),
      mainSlideBtn = document.querySelectorAll('.main__slide-btn');


mainSlide.forEach((item,i)=> {
    item.addEventListener('click', () => {
        removeActive()
        mainSlideText[i].classList.add('active')
        mainSlideImg[i].classList.add('active')
        mainSlideBtn[i].classList.add('active')
    })
})

function removeActive(array) {
    mainSlide.forEach((item,i)=> {
        item.classList.remove('active');
        mainSlideText[i].classList.remove('active')
        mainSlideImg[i].classList.remove('active')
        mainSlideBtn[i].classList.remove('active')
    })
}
