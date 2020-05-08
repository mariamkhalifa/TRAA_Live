import ScrollDownComponent from "./ScrollDownComponent.js"

export default {
    name: 'projects',

    template: `
    <div>
        <section class="hero heroProjects">
            <h2>{{ title }}</h2>
            <scrolldown/>
        </section>
		
        <section id="donateBanner">
            <h2 class="hidden">Donate Banner</h2>
            <p>{{ donate.text }}</p>

            <div class="btnAnimateCon btnDonate">
                <router-link :to="{ name: 'donate' }" class="btnLarge dark">DONATE</router-link>
                <router-link :to="{ name: 'donate' }" class="btnAnimateOverlay"></router-link>
                <router-link :to="{ name: 'donate' }" class="btnAnimateOverlay btnAnimateOverlay2"></router-link>
            </div>

            <div class="btnAnimateCon">
                <router-link :to="{ name: 'contact' }" class="btnLarge dark">FUNDRAISE</router-link>
                <router-link :to="{ name: 'contact' }" class="btnAnimateOverlay"></router-link>
                <router-link :to="{ name: 'contact' }" class="btnAnimateOverlay btnAnimateOverlay2"></router-link>
            </div>
        </section>

        <section id="projectArea">
            <h2 class="hidden">Projects</h2>
            
                <div v-for="(project, index) in projects" :key="index" class="animationCon project">
                    <picture class="project-img">
                        <source :srcset="'images/' + project.largeimg" media="(min-width:601px)">
                        <img :src="'images/' + project.smallimg" alt="">
                    </picture>
                    <h3 class="project-title">{{ project.title }}</h3>
                    <div v-if="project.animation"class="animationOverlay"></div>
                    <div v-if="project.animation" class="animationOverlay animationOverlay2"></div>
                    <div v-if="project.comingsoon" class="btnAnimateCon swing">
                        <div class="btnLarge light">Coming Soon</div>
                        <div class="btnAnimateOverlay"></div>
                        <div class="btnAnimateOverlay btnAnimateOverlay2"></div>
                    </div>
                </div>
                    
        </section>

        <section id="projectArchive">
            <a href="#"><h2>Project Archive</h2></a>
            <img src="images/arrow_down.svg" alt="Down Arrow">
        </section>
    </div>
    `,

    data() {
        return {
            title: 'Projects',
            donate: {
                text: `Want to help out in TRAA's most vital projects?`,
            },

            projects: [
                { title: 'Trout Hatchery', smallimg: 'projects_hatchery_small.jpg', largeimg: 'projects_hatchery.jpg', animation: true },
                { title: 'Salmonid Monitoring Program', smallimg: 'projects_salmonid_monitoring_small.jpg', largeimg: 'projects_salmonid_monitoring.jpg', animation: true },
                { title: 'Komoka Creek Hydrological Study', smallimg: 'projects_komoka_creek_small.jpg', largeimg: 'projects_komoka_creek.jpg', animation: true },
                { title: 'Brook Trout Program', smallimg: 'projects_brown_trout_hatchery_small.jpg', largeimg: 'projects_brown_trout_hatchery.jpg', comingsoon: true },
            ]
        }
    },

    components: {
        scrolldown: ScrollDownComponent
    }
}