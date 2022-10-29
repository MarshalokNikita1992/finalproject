var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

$(function() {
  $('#nav-icon3').click(function(){
      $(this).toggleClass('open');
  });
});

let menuBtn = document.querySelector('#nav-icon3');
let menu = document.querySelector('.navig__menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

function onLinkClick() {
  document.getElementsByTagName('section')[3].scrollIntoView();
  // will scroll to 4th h3 element
}

