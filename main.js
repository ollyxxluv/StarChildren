document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы статистики
    const statItems = document.querySelectorAll('.stat-item');
    
    // Функция для проверки, виден ли элемент на экране
    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && 
            rect.bottom > 0
        );
    }
    
    // Функция для запуска анимации
    function animateOnScroll() {
        statItems.forEach((item, index) => {
            // Если элемент виден на экране
            if (isElementVisible(item)) {
                // Добавляем задержку для последовательной анимации
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 150); // 150ms задержка между элементами
            }
        });
    }
    
    // Запускаем проверку сразу при загрузке страницы
    animateOnScroll();
    
    // Запускаем проверку при скролле
    window.addEventListener('scroll', animateOnScroll);
});