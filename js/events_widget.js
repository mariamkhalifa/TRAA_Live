(()=>{

	let eventsCon = document.querySelector('.eventsCon'),
		arrowLeft = document.querySelector('#eventsArrowLeft'),
		arrowRight = document.querySelector('#eventsArrowRight');

	function scrollEventsLeft(){
		TweenLite.to(eventsCon, .5, {left:'-270px'});
	}

	function scrollEventsRight(){
		TweenLite.to(eventsCon, .5, {left:0});
	}


	arrowLeft.addEventListener('click', scrollEventsLeft);
	arrowRight.addEventListener('click', scrollEventsRight);


})();