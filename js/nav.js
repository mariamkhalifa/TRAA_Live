
(() => {

	let 	hamburger			= document.querySelector('.hamburger'),
			mainNav 			= document.querySelector('#mainNav'),
			mainHeaderCon		= document.querySelector('#mainHeaderCon'),
			mainHeader			= document.querySelector('#mainHeader'), 
			mediaQuery1 		= window.matchMedia('(min-width: 938px)'),
			
	 	 	scrollTop 			= 0,
			counter   			= 0;

  	//functions
  

	function hamburgerMenu() {
		mainNav.classList.toggle('slideToggle');
		hamburger.classList.toggle('expanded');
	}

	window.onscroll = function(){
		var pageScroll = window.pageYOffset;  

		if (pageScroll > 200) {
			if (pageScroll > scrollTop && mediaQuery1.matches){
			mainHeader.style.top = '-100%';
			mainHeaderCon.style.top = '-100%';
			}
			else {
				mainHeaderCon.style.top = '0';
			}
		   scrollTop = pageScroll;
		}
		else if (pageScroll < 50 && mediaQuery1.matches) {
			mainHeader.style.top = '0';
			mainHeaderCon.style.top = '52px';
		}
	}

	

	
	//events

	hamburger.addEventListener('click', hamburgerMenu);
	

})();