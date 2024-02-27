$(document).ready(function () {
    $('.mobile_menu_icon').click(function () {
        $('.mobile_nav').toggleClass('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const outerDivs = document.querySelectorAll(".sec6Container > div");

    outerDivs.forEach(function (outerDiv) {
        outerDiv.addEventListener("mouseenter", function () {
            const innerDiv = outerDiv.querySelector(".invisible");
            innerDiv.style.display = "block";
        });

        outerDiv.addEventListener("mouseleave", function () {
            const innerDiv = outerDiv.querySelector(".invisible");
            innerDiv.style.display = "none";
        });
    });
});

    var swiper = new Swiper(".mySwiper", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
},
});


