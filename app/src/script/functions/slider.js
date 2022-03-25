class Slider {
    constructor(obj) {
        this.slider = document.querySelector(obj.slider)
        this.sliderLine = this.slider.querySelector(obj.sliderLine)
        this.slides = [...this.sliderLine.children]
        this.next = this.slider.querySelector(obj.next)
        this.prev = this.slider.querySelector(obj.prev)

        this.width = this.slider.clientWidth
        this.height = this.slider.clientHeight
        this.dir = obj.direction.toUpperCase() == 'X' ? 'X' : 'Y'
        this.moveSize = this.dir === 'X' ? this.width : this.height

        this.activeSlide = 0

        this.sliderLine.style = `
        position: relative;
        height: ${this.height}px;
        overflow: hidden;
        `
        
        this.slides.forEach((slide, i) => {
            slide.style = `
            position: absolute;
            height: ${this.height}px;
            width: ${this.width}px;
            `


            if(i != this.activeSlide) {
                slide.style.transform = `translate${this.dir}(${this.moveSize}px)`
            }

            if(i === this.slides.length - 1) {
                slide.style.transform = `translate${this.dir}(${-this.moveSoze}px)`
            }
           

        })
    }

    move(btn) {
        let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize

        this.slides.forEach((slide,i) => {

            if(i != this.activeSlide) {
                slide.style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`
            }

            this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`
            this.slides[this.activeSlide].style.transition = '1s'
         })
    }
}

const slider = new Slider({
    slider: '.slider',
    sliderLine: '.slider__line',
    next: '.slider__next',
    prev: '.slider__prev',
    direction: 'X'
})


