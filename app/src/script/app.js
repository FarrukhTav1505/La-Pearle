import * as header from "./functions/header.js";
import * as slideBlur from "./functions/slideBlur.js";
import  Slider from './functions/slider.js';
import SliderNext from './functions/slider-1.js';

const slide = new Slider({
    slider: '.slider',
    sliderLine: '.slider__line',
    next: '.slider__next',
    prev: '.slider__prev',
    direction: 'X'
})
const slide1 = new SliderNext({
    slider: '.slider1',
    sliderLine: '.slider__line1',
    next: '.slider__next1',
    prev: '.slider__prev1',
    direction: 'X'
})


