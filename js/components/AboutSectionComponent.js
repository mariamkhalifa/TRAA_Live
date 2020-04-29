export default {
    template: `
		<section id="about" class="container">
			<picture>
				<source media="(max-width: 600px)" srcset="images/home_about_small.jpg">
				<img src="images/home_about.jpg" alt="River Image">
			</picture>
			<div id="aboutCon">
				<h2>ABOUT THE TRAA</h2>
				<p id="aboutDesc">
					We are a “hands on” environmental group who likes to work at a grass roots level.
				</p>
				<section id="statements">
				<h3 class="hidden">Mission Statements</h3>
					<div class="statement">
						<img id="homeAboutIconProtect" src="images/icon_fish_protect.svg" alt="We Protect">
						<p class="statementTitle">WE PROTECT</p>
						<p>Our fishery, river fish, and environment</p>
					</div>
					<div class="statement">
						<img id="homeAboutIconPromote" src="images/icon_angler.svg" alt="We Promote">
						<p class="statementTitle">WE PROMOTE</p>
						<p>Safe fishing practices, pollution control, and awareness</p>
					</div>
					<div class="statement">
						<img id="homeAboutIconParticipate" src="images/icon_fish_sharing.svg" alt="We Participate">
						<p class="statementTitle">WE PARTICIPATE</p>
						<p>In rehabilitation, environmental clean-up, and our community</p>
					</div>					
				</section>
				<div class="btnCon">
					<div class="btnAnimateCon">
						<a href="join.html" class="btnSmall dark">JOIN US</a>
						<a href="join.html" class="btnAnimateOverlay"></a>
						<a href="join.html" class="btnAnimateOverlay btnAnimateOverlay2"></a>
					</div>
					<div class="btnAnimateCon">
						<a href="about.html" class="btnSmall light">LEARN MORE</a>
						<a href="about.html" class="btnAnimateOverlay"></a>
						<a href="about.html" class="btnAnimateOverlay btnAnimateOverlay2"></a>
					</div>
				</div>
			</div>
		</section>
    `
}