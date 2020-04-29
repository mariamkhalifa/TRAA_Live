import HomeComponent from './HomeComponent.js'

const router = new VueRouter ({
    routes: [
        { path: '/', name: 'home', component: HomeComponent }
    ]
})

export default router 