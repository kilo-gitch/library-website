
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2

        },
        1024: {
            slidesPerView: 3
        }
    }
});
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu-bar').classList.toggle('active');
});



document.querySelectorAll('.menu-bar > ul > li > a').forEach(function(menuItem) {
    menuItem.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        // Close all other sub-menus
        document.querySelectorAll('.menu-bar > ul > li').forEach(function(item) {
            if (item !== this.parentNode) {
                item.classList.remove('active');
            }
        }, this);

        // Toggle active state for the clicked menu item
        this.parentNode.classList.toggle('active');
    });
});

