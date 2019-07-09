// 'use strict';

(function() {
    var op = document.getElementsByClassName('op')[0];
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerContain = document.getElementsByClassName('b-container')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];
    var popupThanks = document.querySelector('.popup-thanks');

    burgerMenu.addEventListener('click', function toggleClasses() {
        [op, burgerContain, burgerNav].forEach(function (el) {
            el.classList.toggle('open');
        });
    }, false);

    if (popupThanks) {
        popupThanks.addEventListener('click', function(e) {
            popupThanks.classList.toggle('popup-thanks_closed');
        })
    }
})();

/*****************************Accordion FAQ**************************/
(function() {
    function accordion() {
        var widthScreen = document.documentElement.clientWidth;

        console.log(widthScreen);

        if (widthScreen > 991) {
            var accordDesk = new HandyCollapse({
                nameSpace: "desk",
                activeClass: "is-active",
                isAnimation: false,

            });
        } else {
            var accordMob = new HandyCollapse({
                nameSpace: "mob",
                activeClass: "is-active",
            })
        }
    }
    accordion();
    window.addEventListener('resize', function() {
        accordion();
    })
})();



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    var a = div.getElementsByTagName("a");
    var i;
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

