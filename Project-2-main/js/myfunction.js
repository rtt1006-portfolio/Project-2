var swiper = new Swiper(".swiper", {
    loop:true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed:800,
    coverflowEffect: {
      rotate: 50,
      stretch: -100,
      depth: 400,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type:"fraction"
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay:1500,
    },
});


let btnPlay = document.getElementById('play');
let btnPause = document.getElementById('pause');

btnPlay.addEventListener('click',function(){
    swiper.autoplay.start();
});
btnPause.addEventListener('click',function(){
    swiper.autoplay.stop();
});