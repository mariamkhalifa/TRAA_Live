export default {
    template: `
    <div  id="carousel">
        <div id="vidCon">
            <video controls>
                <source src="video/traa_video.mp4" type="video/mp4">
                <source src="video/traa_video_small.mp4" type="video/mp4">
                Oops! Something went wrong. Click to view the video <a href="#">here</a>
            </video>
        </div>
		<div @click="playVideo" class="videoOverlay"><i class="fa fa-play-circle-o"></i></div>
	</div>
    `, 
    methods: {
        playVideo() {
            let video = document.querySelector('video'),
                videoOverlay = document.querySelector('.videoOverlay');
        
            videoOverlay.style.display = 'none';
            video.load();
            video.play();
        }
    }
}