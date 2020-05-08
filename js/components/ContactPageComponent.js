import ScrollDownComponent from "./ScrollDownComponent.js"
import ContactFormComponent from "./ContactFormComponent.js"
import EventsWidgetComponent from "./EventsWidgetComponent.js"
import MapAPIComponent from "./MapAPIComponent.js"

export default {
    name: 'contact',

    template: `
    <div>
        <section class="hero heroContact">
			<h2 id="contact-h2">{{ pagetitle }}</h2>
			<scrolldown/>
		</section>

		<section id="mainContact">
			<h3>{{ introtitle }}</h3>
			<p>{{ introtext }}</p>
			<div id="announcement">
				<div @click="closeAnnouncement" id="close"><div id="circle">X</div></div>
				<a href="#">{{ announcement }}</a>
			</div>

			<div id="addresses">
				<div class="addressesCon">
					<h4><span><img class="contactIcon" src="images/contact_location.svg" alt="Location Icon"></span>{{ generalmeeting }}</h4>
					<p>{{ meetingtext }}</p>
				</div>

				<div class="addressesCon">
					<h4><span><img class="contactIcon" src="images/contact_mail.svg" alt="Mail Icon"></span>{{ mailingaddress }}</h4>
					<p>{{ mailingaddresstext }}</p>
				</div>
			</div>
      
			<contactform/>
			
		</section>
        
        <googlemaps/>
		
        <eventswidget/>
        
    </div>
    `,

    data() {
        return {
            pagetitle: 'Contact Us',
            introtitle: 'The TRAA Would Like To Hear From You',
            introtext: `Need more information? Want to get involved? Please don't hesitate to contact us.`,
            announcement: 'Get in touch with us at the next meeting. Check the events page for the next meeting location.',
            generalmeeting: 'General Meetings',
            meetingtext: 'Come to our meetings every second Wednesday of the month at 7:00pm at WOFGPA.',
            mailingaddress: 'Mailings Address Only',
            mailingaddresstext: 'Thames River Anglers Association 2202 Coronation Drive London, ON N6G 0B9',
        }
    },

    components: {
        scrolldown: ScrollDownComponent,
        contactform: ContactFormComponent,
        eventswidget: EventsWidgetComponent,
        googlemaps: MapAPIComponent
    },

    methods: {
        closeAnnouncement() {
            document.querySelector('#announcement').style.display = 'none';
        }
    },

}