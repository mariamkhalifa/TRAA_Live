import EventComponent from "./EventComponent.js";

export default {
    template: `
    <section id="eventsWidget">
	    <h2>{{ title.title }}</h2>

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
            title: '',
            eventsdata: []
        }
    },

    created() {
        this.fetchTitle();
        this.fetchEvents();
    },

    methods: {
        fetchTitle() {
            let url = `./includes/index.php?tbl=tbl_events_title`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                this.title = data[0];
            })
            .catch(err=>console.log(err))
        },

        fetchEvents() {
            let url = `./includes/index.php?tbl=tbl_events`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                this.eventsdata = data;
            })
            .catch(err=>console.log(err))
        },

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