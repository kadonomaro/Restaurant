window.addEventListener('load', function () {

    //аккордион для секции "Меню"
    let menuBtn = document.querySelectorAll('.menu-card__title');
    let menuContent = document.querySelectorAll('.menu-card__content');
    for (let i = 0; i < menuBtn.length; i++) {
        menuContent[i].style.maxHeight = menuContent[i].scrollHeight + 'px';
        menuBtn[i].addEventListener('click', function () {
            
            if (menuContent[i].clientHeight === menuContent[i].scrollHeight) {
                menuContent[i].style.maxHeight = 0 + 'px';
            }
            else {
                menuContent[i].style.maxHeight = menuContent[i].scrollHeight + 'px';
            }
        });
    }

    //Добавление появления кнопки для скролла в начало страницы
    let scrollTopButton = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function () {

        if (window.pageYOffset > window.innerHeight) {
            scrollTopButton.classList.add('scroll-top_active');
        } else {
            scrollTopButton.classList.remove('scroll-top_active');
        }
    });

    //Плавная прокрутка
    // let logo = document.querySelector('.logo');
    // let menu = document.querySelector('.menu');

    // logo.style.cursor = "pointer";
    // logo.addEventListener('click', function () {
    //     window.scrollTo({
    //         top: menu.offsetTop,
    //         behavior: "smooth"
    //     });
        
    // });

});