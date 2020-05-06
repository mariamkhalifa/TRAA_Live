export default {
    template: `
		<section id="about" class="container">
			<picture>
				<source media="(max-width: 600px)" srcset="images/home_about_small.jpg">
				<img src="images/home_about.jpg" alt="River Image">
			</picture>

			<div id="aboutCon">
				<h2>{{ title }}</h2>
				<p id="aboutDesc">{{ statement }}</p>

				<section id="statements">
					<h3 class="hidden">Mission Statements</h3>

					<div v-for="(mission, index) in missions" class="statement">
						<img id="homeAboutIconProtect" :src="'images/' + mission.icon" alt="icon">
						<p class="statementTitle">{{ mission.title }}</p>
						<p>{{ mission.desc }}</p>
					</div>
									
				</section>

				<div class="btnCon">
					<div class="btnAnimateCon">
						<router-link :to="{ name: 'join' }" class="btnSmall dark">JOIN US</router-link>
						<router-link :to="{ name: 'join' }" class="btnAnimateOverlay"></router-link>
						<router-link :to="{ name: 'join' }" class="btnAnimateOverlay btnAnimateOverlay2"></router-link>
					</div>
					<div class="btnAnimateCon">
						<router-link :to="{ name: 'about' }" class="btnSmall light">LEARN MORE</router-link>
						<router-link :to="{ name: 'about' }" class="btnAnimateOverlay"></router-link>
						<router-link :to="{ name: 'about' }" class="btnAnimateOverlay btnAnimateOverlay2"></router-link>
					</div>
				</div>

			</div>
		</section>
	`,
	
	data() {
		return {
			title: 'About The TRAA',
			statement: 'We are a “hands on” environmental group who likes to work at a grass roots level.',
			missions: [
				{ icon: 'icon_fish_protect.svg', title: 'WE PROTECT', desc: 'Our fishery, river fish, and environment' },
				{ icon: 'icon_angler.svg', title: 'WE PROMOTE', desc: 'Safe fishing practices, pollution control, and awareness' },
				{ icon: 'icon_fish_sharing.svg', title: 'WE PARTICIPATE', desc: 'In rehabilitation, environmental clean-up, and our community' },
			]
		}
	}
}