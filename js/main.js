var writeUsButton = document.querySelector('.map-button');
var writeUsModal = document.querySelector('.modal.write-us');
var mapButton = document.querySelector('.map-preview');
var mapModal = document.querySelector('.modal.map');
var writeUsClose = document.querySelector('.write-us-close');
var mapClose = document.querySelector('.map-close');


writeUsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsModal.classList.toggle("modal-show");
});

mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.toggle("modal-show");
});

writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsModal.classList.remove("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("modal-show");
});

//slidos

var sliderButton = document.querySelectorAll('.features-slider .features-slider-button-item');
var slides = document.querySelectorAll('.features-slider .features-slider-item');
var currentSlide = 0;
var sliderNext = document.querySelector('.features-slider-button-forward');
var sliderPrev = document.querySelector('.features-slider-button-back');

sliderButton.forEach(function callback(element, index) {
    element.addEventListener('click', function (evt) {
        evt.preventDefault();
        sliderButton.forEach(element => {
            element.classList.remove('active');
        })
        element.classList.add('active');
        slides.forEach(element => {
            element.classList.remove('active');
        })
        slides[index].classList.add('active');
        currentSlide = index;
    })
});

sliderNext.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove('active');
        slides[currentSlide + 1].classList.add('active');
        sliderButton[currentSlide].classList.remove('active');
        sliderButton[currentSlide + 1].classList.add('active');
        currentSlide = currentSlide + 1;
    }
});

sliderPrev.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (currentSlide > 0) {
        slides[currentSlide].classList.remove('active');
        slides[currentSlide - 1].classList.add('active');
        sliderButton[currentSlide].classList.remove('active');
        sliderButton[currentSlide - 1].classList.add('active');
        currentSlide = currentSlide - 1;
    }
});

//services

var servicesControl = document.querySelectorAll('.services .services-list-item');
var services = document.querySelectorAll('.services .service');

servicesControl.forEach(function callback(element, index) {
    element.addEventListener('click', function (evt) {
        evt.preventDefault();
        servicesControl.forEach(element => {
            element.classList.remove('services-list-item-active');
        })
        element.classList.add('services-list-item-active');
        services.forEach(element => {
            element.classList.remove('service-active');
        })
        services[index].classList.add('service-active');
    })
});
