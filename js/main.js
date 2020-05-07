import router from './components/Router.js'

const vm = new Vue ({
    data: {
        burger: false,
        submenu1: false,
        submenu2: false,
    },

    created() {
        this.headerScroll();
    },

    methods: {
        headerScroll() {
            window.onscroll = function(){
                let pageScroll = window.pageYOffset,
                    scrollTop = 0,
                    mediaQuery1 = window.matchMedia('(min-width: 938px)'); 
        
                if (pageScroll > 200) {
                    if (pageScroll > scrollTop && mediaQuery1.matches){
                    mainHeader.style.top = '-100%';
                    mainHeaderCon.style.top = '-100%';
                    }
                    else {
                        mainHeaderCon.style.top = '0';
                    }
                   scrollTop = pageScroll;
                }
                else if (pageScroll < 50 && mediaQuery1.matches) {
                    mainHeader.style.top = '0';
                    mainHeaderCon.style.top = '52px';
                }
            }
        },

        expandBurger() {
            this.burger = !(this.burger);
        },

        collapseBurger() {
            this.burger = false;
            gsap.to(window, {duration: 2, scrollTo: {y: 0}});
        },

        revealSubMenu1() {
            this.submenu1 = !(this.submenu1);
        },

        revealSubMenu2() {
            this.submenu2 = !(this.submenu2);
        },

        navTo() {
            gsap.to(window, {duration: 2, scrollTo: {y: 0}});
        }
    },

    router
}).$mount('#app')
