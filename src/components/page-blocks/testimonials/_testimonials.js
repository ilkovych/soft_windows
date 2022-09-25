function testimonialSliders() {
  const videoSlider = new Swiper(".testimonials__video-slider .swiper", {
    slidesPerView:1,
      navigation: {
    nextEl: '.testimonials__video-slider .swiper-button-next',
    prevEl: '.testimonials__video-slider .swiper-button-prev',
    },
    pagination: {
        el:'.testimonials__video-slider .swiper-pagination'
      }
  });
  const googleSlider = new Swiper(".testimonials__google-wrapper .swiper", {});


}
testimonialSliders();