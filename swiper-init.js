// Сначала определяем функцию
function updateNavigation(swiper) {
    const prevBtn = swiper.navigation.prevEl;
    const nextBtn = swiper.navigation.nextEl;
    
    // Обновляем состояние кнопок
    prevBtn.style.opacity = swiper.isBeginning ? '0.5' : '1';
    prevBtn.style.pointerEvents = swiper.isBeginning ? 'none' : 'auto';
    prevBtn.style.backgroundColor = swiper.isBeginning ? '#cccccc' : 'var(--color-yellow)';
    
    nextBtn.style.opacity = swiper.isEnd ? '0.5' : '1';
    nextBtn.style.pointerEvents = swiper.isEnd ? 'none' : 'auto';
    nextBtn.style.backgroundColor = swiper.isEnd ? '#cccccc' : 'var(--color-yellow)';
  }
  
  // Затем инициализируем Swiper
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
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    },
    
    // Используем функцию в обработчиках
    on: {
      init: function(swiper) {
        updateNavigation(swiper);
      },
      slideChange: function(swiper) {
        updateNavigation(swiper);
      },
      reachEnd: function(swiper) {
        updateNavigation(swiper);
      },
      reachBeginning: function(swiper) {
        updateNavigation(swiper);
      }
    }
  });