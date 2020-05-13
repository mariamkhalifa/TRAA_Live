export default {
    template: `
    <section id="impact">
		<h2>{{ impact.title }}</h2>
		<p>{{ impact.text1 }}</p>
		<p>{{ impact.text2 }}</p>
		
		<div @click="navTo" class="btnCon">
			<div class="btnAnimateCon">
				<a href="#" class="btnSmall dark">Donate</a>
				<a href="#" class="btnAnimateOverlay"></a>
				<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
			<div class="btnAnimateCon">
				<router-link :to="{ name: 'projects' }" class="btnSmall light">Learn More</router-link>
				<router-link :to="{ name: 'projects' }" class="btnAnimateOverlay"></router-link>
				<router-link :to="{ name: 'projects' }" class="btnAnimateOverlay btnAnimateOverlay2"></router-link>
			</div>
		</div>
	</section> 
	`,
	
	data() {
		return {
			impact: []
		}
	},

	created() {
		this.fetchImpact();
	},

	methods: {
		fetchImpact() {
			let url = `./includes/index.php?tbl=tbl_home_impact`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.impact = data[0];
            })
            .catch(err=>console.log(err))
		},

		navTo() {
			gsap.to(window, {duration: 2, scrollTo: {y: 0}});
		}
	}
}