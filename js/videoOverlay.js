
(() => {

	let 	video 				= document.querySelector('video'),
			videoOverlay		= document.querySelector('.videoOverlay');

  	//functions

	function playPauseVideo() {
		if (video.paused == true) {
			videoOverlay.style.display = 'none';
			video.load();
			video.play();
		} else {
			video.pause();
		}
	}

	//events

	videoOverlay.addEventListener('click', playPauseVideo);

})();