import Swiper from "swiper";

export var swiper = new Swiper(".slide_content", {
    slidesPerView: 3, 
    spaceBetween: 30, 
    slidesPerGroup: 3, 
    loop: true, 
    loopFillGroupwithBlank: true,
    pagination: {
        el: " swiper-pagination", 
        clickable: true,
    },
    navigation: {
        nextEl: "swiper-button-next", 
        prevEl: ".swiper-button-prev",
    },
});