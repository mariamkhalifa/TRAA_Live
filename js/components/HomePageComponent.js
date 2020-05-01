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
                <p>{{ intro }}</p>
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
            intro: '"For the enhancement, protection and promotion of a viable, multi-species fishery within the Thames River watershed. Dedication today for tomorrow.”'
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