import VideoComponent from "./VideoSectionComponent.js";
import EventsWidgetComponent from "./EventsWidgetComponent.js";
import AboutSectionComponent from "./AboutSectionComponent.js";
import impactSectionComponent from "./impactSectionComponent.js";
import MerchSectionComponent from "./MerchSectionComponent.js";
import BlogSectionComponent from "./BlogSectionComponent.js";
import SponsorsComponent from "./SponsorsComponent.js";
import TopBtnComponent from "./TopBtnComponent.js";

export default {
    name: 'home',

    template: `
    <section>
        <traavideo/>

        <section id="welcome" class="container">
            <h2 id="traaWelcome">Welcome to the 
            <span><span class="welcomeGreen">T</span>hames
            <span class="welcomeGreen">R</span>iver</span>
            <span><span class="welcomeGreen">A</span>nglers
            <span class="welcomeGreen">A</span>ssociation</span></h2>
            
            <div id="welcomeDesc">	
                <p>{{ intro.intro }}</p>
            </div>
        </section>
        
        <eventswidget/>

        <aboutsection/>

        <impact/>

        <merch/>

        <blog/>

        <sponsors/>

        <topbtn/>
    </section>
    `,

    data() {
        return {
            intro: ''
        }
    },

    created() {
        this.fetchIntro();
    },

    methods: {
        fetchIntro() {
            let url = `./includes/index.php?tbl=tbl_home_welcome`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                this.intro = data[0];
            })
            .catch(err=>console.log(err))
        }
    },

    components: {
        traavideo: VideoComponent,
        eventswidget: EventsWidgetComponent,
        aboutsection: AboutSectionComponent,
        impact : impactSectionComponent,
        merch: MerchSectionComponent,
        blog: BlogSectionComponent,
        sponsors: SponsorsComponent,
        topbtn: TopBtnComponent
    }
}