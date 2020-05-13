export default {
    template: `
    <div  id="carousel">
        <div id="vidCon">
            <video controls>
                <source :src="'video/' + video.video" type="video/mp4">
                Oops! Something went wrong. Click to view the video <a href="#">here</a>
            </video>
        </div>
		<div @click="playVideo" class="videoOverlay"><i class="fa fa-play-circle-o"></i></div>
	</div>
    `,
    data() {
        return {
            video: ''
        }
    },

    created() {
        this.fetchVideo();
    },

    methods: {
        fetchVideo() {
            let url = `./includes/index.php?tbl=tbl_home_video`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.video = data[0];
            })
            .catch(err=>console.log(err))
        },

        playVideo() {
            let video = document.querySelector('video'),
                videoOverlay = document.querySelector('.videoOverlay');
        
            videoOverlay.style.display = 'none';
            video.load();
            video.play();
        }
    }
}