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

var servicesControl = document.querySelectorAll('.services .services-list-item');
var services = document.querySelectorAll('.services .service');

servicesControl.forEach(function callback(element, index) {
    element.addEventListener('click', function(evt) {
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
