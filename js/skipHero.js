(() => {

let     btnDownHero			= document.querySelectorAll('.downArrow'),
        mediaQuery1 		= window.matchMedia('(min-width: 938px)');

function skipHero(e) {
    e.preventDefault;
    if (mediaQuery1.matches) {
        TweenLite.to(window, 1, {scrollTo:{y:740}});
    }
    else {
        TweenLite.to(window, 1, {scrollTo:{y:430}});
    }
    
}

btnDownHero.forEach(button => {button.addEventListener('click', skipHero);});

})();