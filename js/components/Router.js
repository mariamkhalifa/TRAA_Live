import HomePageComponent from './HomePageComponent.js'
import AboutPageComponent from './AboutPageComponent.js'
import MembershipPageComponent from './MembershipPageComponent.js'

const router = new VueRouter ({
    routes: [
        { path: '/', name: 'home', component: HomePageComponent },
        { path: '/about', name: 'about', component: AboutPageComponent },
        { path: '/join', name: 'join', component: MembershipPageComponent }
    ]
})

export default router 