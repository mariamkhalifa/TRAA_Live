export default {
    template: `
    <section id="impact">
		<h2>{{ title }}</h2>
		<p>{{ text1 }}</p>
		<p>{{ text2 }}</p>
		
		<div class="btnCon">
			<div class="btnAnimateCon">
				<a href="#" class="btnSmall dark">DONATE</a>
				<a href="#" class="btnAnimateOverlay"></a>
				<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
			<div class="btnAnimateCon">
				<a href="projects.html" class="btnSmall light">LEARN MORE</a>
				<a href="projects.html" class="btnAnimateOverlay"></a>
				<a href="projects.html" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
		</div>
	</section> 
	`,
	
	data() {
		return {
			title: 'Our Impact',
			text1: 'Our work is what sets the TRAA apart from other clubs and organizations. You’ll find us right in the water clearing obstructions from streams, measuring returning salmonids & taking scale samples for DNA analysis, educating through trout hatchery tours & stream walks, being a voice for the Thames River watershed inhabitants...',
			text2: 'The list goes on.'
		}
	}
}