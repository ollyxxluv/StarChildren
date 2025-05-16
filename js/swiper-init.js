
function updateNavigation(swiper) {
    const prevBtn = swiper.navigation.prevEl;
    const nextBtn = swiper.navigation.nextEl;

    prevBtn.style.opacity = swiper.isBeginning ? '0.5' : '1';
    prevBtn.style.pointerEvents = swiper.isBeginning ? 'none' : 'auto';
    prevBtn.style.backgroundColor = swiper.isBeginning ? '#cccccc' : 'var(--color-yellow)';
    
    nextBtn.style.opacity = swiper.isEnd ? '0.5' : '1';
    nextBtn.style.pointerEvents = swiper.isEnd ? 'none' : 'auto';
    nextBtn.style.backgroundColor = swiper.isEnd ? '#cccccc' : 'var(--color-yellow)';
  }
  const reviewsSwiper = new Swiper('#section4 .swiper', {
    slidesPerView: 3, 
    spaceBetween: 20,
    loop: false,
    centeredSlides: false,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 2 
      },
      1920: {
        slidesPerView: 3
      }
    },
    on: {
      init: updateNavigation,
      slideChange: updateNavigation,
      reachEnd: updateNavigation,
      reachBeginning: updateNavigation
    }
  });