import ScrollDownComponent from "./ScrollDownComponent.js"

export default {
    name: 'projects',

    template: `
    <div>
        <section class="hero heroProjects">
            <h2>{{ title.page_title }}</h2>
            <scrolldown/>
        </section>
		
        <section id="donateBanner">
            <h2 class="hidden">Donate Banner</h2>
            <p>{{ title.donate_text }}</p>

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
                        <source :srcset="'images/' + project.project_largeimg" media="(min-width:601px)">
                        <img :src="'images/' + project.project_smallimg" alt="">
                    </picture>
                    <h3 class="project-title">{{ project.project_title }}</h3>
                    <div v-if="project.project_animation == '1'" class="animationOverlay"></div>
                    <div v-if="project.project_animation == '1'" class="animationOverlay animationOverlay2"></div>
                    <div v-if="project.project_comingsoon == '1'" class="btnAnimateCon swing">
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
            title: [],
            projects: []
        }
    },

    created() {
        this.fetchProjectsTitle();
        this.fetchProjects();
    },

    methods: {
        fetchProjectsTitle() {
            let url = `./includes/index.php?tbl=tbl_projects_title`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.title = data[0];
            })
            .catch(err=>console.log(err))
        },

        fetchProjects() {
            let url = `./includes/index.php?projects=true`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.projects = data;
            })
            .catch(err=>console.log(err))
        }
    },

    components: {
        scrolldown: ScrollDownComponent
    }
}