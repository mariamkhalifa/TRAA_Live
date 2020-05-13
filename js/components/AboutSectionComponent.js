export default {
    template: `
		<section id="about" class="container">
			<picture>
				<source media="(min-width: 600px)" :srcset="'images/' + about.image_large">
				<img :src="'images/' + about.image_small" alt="River Image">
			</picture>

			<div id="aboutCon">
				<h2>{{ about.title }}</h2>
				<p id="aboutDesc">{{ about.statement }}</p>

				<section id="statements">
					<h3 class="hidden">Mission Statements</h3>

					<div v-for="(mission, index) in missions" class="statement">
						<img id="homeAboutIconProtect" :src="'images/' + mission.icon" alt="icon">
						<p class="statementTitle">{{ mission.title }}</p>
						<p>{{ mission.desc }}</p>
					</div>
									
				</section>

				<div @click="navTo" class="btnCon">
					<div class="btnAnimateCon">
						<router-link :to="{ name: 'join' }" class="btnSmall dark">Join Us</router-link>
						<router-link :to="{ name: 'join' }" class="btnAnimateOverlay"></router-link>
						<router-link :to="{ name: 'join' }" class="btnAnimateOverlay btnAnimateOverlay2"></router-link>
					</div>
					<div class="btnAnimateCon">
						<router-link :to="{ name: 'about' }" class="btnSmall light">Learn More</router-link>
						<router-link :to="{ name: 'about' }" class="btnAnimateOverlay"></router-link>
						<router-link :to="{ name: 'about' }" class="btnAnimateOverlay btnAnimateOverlay2"></router-link>
					</div>
				</div>

			</div>
		</section>
	`,
	
	data() {
		return {
			about: [],
			missions: []
		}
	},

	created() {
		this.fetchAbout();
		this.fetchMissions();
	},

	methods: {
		fetchAbout() {
            let url = `./includes/index.php?tbl=tbl_home_about`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                this.about = data[0];
            })
            .catch(err=>console.log(err))
		},
		
		fetchMissions() {
            let url = `./includes/index.php?tbl=tbl_home_about_missions`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                this.missions = data;
            })
            .catch(err=>console.log(err))
		},
		
		navTo() {
			gsap.to(window, {duration: 2, scrollTo: {y: 0}});
		}
	}
}