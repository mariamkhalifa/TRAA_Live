export default {
    template: `
    <section id="sponsors">
	    <h2>{{ title }}</h2>
		<p>{{ text }}</p>
		<div class="sponRow">
            <img v-for="(sponsor, index) in sponsors" :key="index"
            :src="'images/' + sponsor.img" :alt="sponsor.name">
		</div>			
	</section>
    `,

    data() {
        return {
            title: 'Sponsors',
            text: 'The support of the following local area businesses is much appreciated:',
            sponsors: [
                { img: 'home_sponsor_melchers.jpg', name: 'Melchers Construction Limited' },
                { img: 'home_sponsor_muma.jpg', name: 'Muma Manufacturing' },
                { img: 'home_sponsor_guillevin.jpg', name: 'Guillevin International Co' },
                { img: 'home_sponsor_tryRecycling.jpg', name: 'Try Recycling Inc' },
                { img: 'home_sponsor_angling.jpg', name: 'Angling Sports' },
            ]
        }
    }
} 