document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});

document.addEventListener('scroll', function() {
    document.querySelectorAll('.stat-item').forEach((block, index) => {
        setTimeout(() => {
            block.classList.add('animate');
        }, index * 300);
    });
});

