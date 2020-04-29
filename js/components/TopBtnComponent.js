export default {
    template: `
		<div class="btnTop container">
			<div @click.prevent="scrollTop" class="btnAnimateConTop btnAnimateCon">
				<a href="#"><div class="btnTopBg"><i class="fa fa-angle-up"></i></div></a>
				<a href="#" class="btnAnimateOverlay"></a>
				<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
			<p>TOP</p>
		</div>
    `,

    methods: {
        scrollTop() {
            gsap.to(window, {duration: 2, scrollTo: {y: 0}});
        }
    }
}