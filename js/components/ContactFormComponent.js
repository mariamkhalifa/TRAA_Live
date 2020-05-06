export default {
    template: `
        <form @submit.prevent="handleMail" id="contactForm">
            <p class="formMsg" :class="{ 'error' : error }">{{ formmsg }}</p>

			<label for="nameContact" class="sr-only">Name</label>
			<input v-model="input.name" type="text" id="nameContact" name="name" placeholder="name">
                    
            <label for="email" class="sr-only">Email</label>
			<input v-model="input.email" type="email" id="email" name="email" placeholder="email">
                    
            <label for="subject" class="sr-only">Subject</label>
			<input v-model="input.subject" type="text" id="subject" name="subject" placeholder="subject" list="subjectOptions">
			<datalist id="subjectOptions">
                <option value="Membership"></option>
                <option value="Fundraising"></option>
				<option value="Volunteering"></option>
				<option value="Merchandising"></option>
				<option value="General Inquiry"></option>
			</datalist>

			<label for="message" class="sr-only">Message</label>
			<textarea v-model="input.message" id="message" name="message" placeholder="leave a message"></textarea>
					
			<div class="btnCon">
				<div class="btnAnimateCon">
					<input id="cont-submit" type="submit" value="SEND" class="btnLarge light">
					<a href="#" class="btnAnimateOverlay"></a>
					<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
				</div>
			</div>

		</form> 
    `,

    data() {
        return {
            formmsg: '',
            error: false,
            input: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },

    methods: {
        handleMail() {
            //console.log('!');
            if(this.input.name !== '' && this.input.email !== '' && this.input.subject !== '' && this.input.message !== '') {
                let url = 'includes/contact.php',
                    formdata = new FormData(document.querySelector('#contactForm')),
                    maildata = {};

                for (let [key, value] of formdata.entries()) {
                    maildata[key] = value;
                }
                

                console.log(maildata);

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(maildata)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.formmsg = data;
                })
                .catch((err) => console.log(err));


            } else {
                this.error = true;
                this.formmsg = 'Please fill out the required fields!';
            }
        }
    }
}