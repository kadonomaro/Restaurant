window.addEventListener('load', function () {

    let menuBtn = document.querySelectorAll('.menu-card__title');
    let menuContent = document.querySelectorAll('.menu-card__content');
    for (let i = 0; i < menuBtn.length; i++) {
        menuContent[i].style.maxHeight = menuContent[i].scrollHeight + 'px';
        menuBtn[i].addEventListener('click', function () {
            console.dir(menuContent[i]);
            
            if (menuContent[i].clientHeight === menuContent[i].scrollHeight) {
                menuContent[i].style.maxHeight = 0 + 'px';
            }
            else {
                menuContent[i].style.maxHeight = menuContent[i].scrollHeight + 'px';
            }


        })
        
    }

});