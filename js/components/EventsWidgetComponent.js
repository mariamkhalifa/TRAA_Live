import EventComponent from "./EventComponent.js";

export default {
    template: `
    <section id="eventsWidget">
	    <h2>{{ title }}</h2>

		<div id="scrollWrap">
			
			<i @click="scrollLeft" id="eventsArrowLeft" class="fa fa-angle-left carouselArrow"></i>
            
            <section id="events">
				<h3 class="hidden">Events Widget</h3>
				<ul class="eventsCon">
					
                    <event v-for="(event, index) in eventsdata"
                    :event="event" :key="index"/>
					
					
				</ul>
			</section>
			
			<i @click="scrollRight" id ="eventsArrowRight" class="fa fa-angle-right carouselArrow"></i>
		</div>

		<div class="btnCon">
			<div class="btnAnimateCon">
				<a href="#" class="btnSmall dark">View Calendar</a>
				<a href="#" class="btnAnimateOverlay"></a>
				<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
		</div>
	</section>
    `,

    data() {
        return {
            title: 'Upcoming Events',
            eventsdata: [
                { day: '09', month: 'JAN', title: 'General Meeting', desc: `Happy New Year! We are meeting at 7:00pm at 790 Southdale Road to do awesome things.` },
                { day: '06', month: 'FEB', title: 'Visit the hatchery', desc: `Come visit the hatchery from 10:00am to 3pm at 123 Fish Rd. and see our brown trout.` },
                { day: '08', month: 'MAR', title: 'Brown Trout Program', desc: `We are proud to announce our newest project: the release of our brown trout.` },
                { day: '26', month: 'MAR', title: 'Salmon Release', desc: `Did you know that the average size of the salmon we release is 40cm large?` }
            ]
        }
    },

    methods: {
        scrollLeft() {
            gsap.to('.eventsCon', .5, {left:'-270px'});
        },

        scrollRight() {
            gsap.to('.eventsCon', .5, {left:0});
        }
    },

    components: {
        event: EventComponent
    }


}