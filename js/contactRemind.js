
(() => {

	let 	closeContactRemind	= document.querySelector('#close'),
			contactRemind 		= document.querySelector('#announcement');
			
  	//functions

	function closeContactAnnouncement() {
		contactRemind.style.display = 'none';
	}

	//events

	closeContactRemind.addEventListener('click', closeContactAnnouncement);

})();