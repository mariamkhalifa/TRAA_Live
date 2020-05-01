import router from './components/Router.js'

const vm = new Vue ({
    data: {
        burger: false,
        submenu1: false,
        submenu2: false,
    },

    methods: {
        expandBurger() {
            this.burger = !(this.burger);
        },

        revealSubMenu1() {
            this.submenu1 = !(this.submenu1);
        },

        revealSubMenu2() {
            this.submenu2 = !(this.submenu2);
        },

        navTo() {
            window.scrollTo(0,0);
        }
    },

    router
}).$mount('#app')