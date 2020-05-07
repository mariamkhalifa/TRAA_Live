export default {
    template: `
        <i @click="skipHero" class="fa fa-angle-down downArrow"></i>
    `,

    methods: {
        skipHero() {
            let mediaQuery1 = window.matchMedia('(min-width: 938px)');

            if (mediaQuery1.matches) {
                gsap.to(window, 1, {scrollTo:{y:740}});
            }
            else {
                gsap.to(window, 1, {scrollTo:{y:430}});
            }
        }
    }
}