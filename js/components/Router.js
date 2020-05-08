import HomePageComponent from './HomePageComponent.js'
import AboutPageComponent from './AboutPageComponent.js'
import MembershipPageComponent from './MembershipPageComponent.js'
import ProjectsPageComponent from './ProjectsPageComponent.js'
import ContactPageComponent from './ContactPageComponent.js'
import BlogPageComponent from './BlogPageComponent.js'
import PostPageComponent from './PostPageComponent.js'

const router = new VueRouter ({
    routes: [
        { path: '/', name: 'home', component: HomePageComponent },
        { path: '/about', name: 'about', component: AboutPageComponent },
        { path: '/join', name: 'join', component: MembershipPageComponent },
        { path: '/projects', name: 'projects', component: ProjectsPageComponent },
        { path: '/contact', name: 'contact', component: ContactPageComponent },
        { path: '/blog', name: 'blog', component: BlogPageComponent },
        { path: '/post', name: 'post', component: PostPageComponent, props: true },
    ]
})

export default router 