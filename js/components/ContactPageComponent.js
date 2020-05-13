import ScrollDownComponent from "./ScrollDownComponent.js"
import ContactFormComponent from "./ContactFormComponent.js"
import EventsWidgetComponent from "./EventsWidgetComponent.js"
import MapAPIComponent from "./MapAPIComponent.js"

export default {
    name: 'contact',

    template: `
    <div>
        <section class="hero heroContact">
			<h2 id="contact-h2">{{ contact.page_title }}</h2>
			<scrolldown/>
		</section>

		<section id="mainContact">
			<h3>{{ contact.intro_title }}</h3>
			<p>{{ contact.intro_text }}</p>
			<div id="announcement">
				<div @click="closeAnnouncement" id="close"><div id="circle">X</div></div>
				<a href="#">{{ contact.announcement }}</a>
			</div>

			<div id="addresses">
				<div class="addressesCon">
					<h4><span><img class="contactIcon" src="images/contact_location.svg" alt="Location Icon"></span>{{ contact.gen_meeting_title }}</h4>
					<p>{{ contact.gen_meeting_text }}</p>
				</div>

				<div class="addressesCon">
					<h4><span><img class="contactIcon" src="images/contact_mail.svg" alt="Mail Icon"></span>{{ contact.mail_add_title }}</h4>
					<p>{{ contact.mail_add_text }}</p>
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
            contact: []
        }
    },

    components: {
        scrolldown: ScrollDownComponent,
        contactform: ContactFormComponent,
        eventswidget: EventsWidgetComponent,
        googlemaps: MapAPIComponent
    },

    created() {
        this.fetchcontact();
    },

    methods: {
        fetchcontact() {
            let url = `./includes/index.php?tbl=tbl_contact`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.contact = data[0];
            })
            .catch(err=>console.log(err))
        },

        closeAnnouncement() {
            document.querySelector('#announcement').style.display = 'none';
        }
    },

}