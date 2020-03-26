(() => {

    let btnTop				= document.querySelector('.btnTop');
    
    function scrollToTop(e) {
		e.preventDefault();
		TweenLite.to(window, 1, {scrollTo:{y:0}});
    }
    
    btnTop.addEventListener('click', scrollToTop);

})();