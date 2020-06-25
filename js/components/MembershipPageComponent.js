import ScrollDownComponent from "./ScrollDownComponent.js";

export default {
    name: 'join',
    
    template: `
    <div>
    <section class="hero heroJoin">
		<h2>{{ title.page_title}}</h2>
		<scrolldown/>
	</section>

	<section id="mainJoin">
		<h2>{{ title.membership_title}}</h2>
		<p>{{ title.membership_text}} <br>Join at the <span><a href="#">next TRAA meeting</a></span> or fill out the application below.</p>
	</section>
	
	<section id="formCon">
		<h2 class="hidden">Membership Info and Form</h2>

		<div id="infoAndForm">
			<div id="priceCon">
				<div id="membershipPrice">{{ title.membership_price}}</div>
				<div id="joinInfo">
					<p>{{ title.membership_tagline}}</p>
					<ul>
						<li v-for="(info, index) in membership" :key="index">
							{{ info.info_item}}
						</li>
					</ul>
				</div>
			</div>

			<div id="joinForm">
				<p>required fields *</p>
				<form @submit.prevent="handleMembership" id="membershipForm">
					<label>Name:*</label>
					<input v-model="input.name" type="text" required id="nameContact" placeholder="e.g. John Smith">
					
					<label>Email:*</label>
					<input v-model="input.email" type="email" required id="email" placeholder="example@email.com">
					
					<label>Date of Birth:*</label>
					<input v-model="input.dob" type="text" required id="dateBirth" placeholder="yyyy-mm-dd">
					
					<label>Phone:</label>
					<input v-model="input.phone" type="tel" id="phone" placeholder="555-555-5555">
					
					<div class="btnCon">
						<div class="btnAnimateCon">
							<input type="submit" value="SUBMIT" class="btnLarge light">
							<a href="#" class="btnAnimateOverlay"></a>
							<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
						</div>
					</div>
				</form>
			</div>
		</div>

	</section>

	<section id="paperForm">
		<h3 class="hidden">Membership Paper Form</h3>
		<div id="paperFormText">
			<h3>GOING OLD SCHOOL? SEND CHEQUES HERE!</h3>
			<p>Thames River Anglers Association <br>c/o Western Ontario Fish & Game Protective Association<br>790 Southdale Road East<br>London, ON N6E 1A8</p>
		</div>
		<div class="btnCon">
			<div class="btnAnimateCon">
				<a href="#" class="btnLarge dark">APPLICATION PDF VERSION</a>
				<a href="#" class="btnAnimateOverlay"></a>
				<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
		</div>
    </section>
    </div>
	`,

	data() {
		return {
			title: '',
			membership: [],
			input: {
				name: '',
				email: '',
				phone: '',
				dob: ''
			}
		}
	},

	created() {
		this.fetchMembershipTitle();
		this.fetchMembershipInfo();
	},

	methods: {
		fetchMembershipTitle() {
			let url = `./includes/index.php?tbl=tbl_membership_title`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.title = data[0];
            })
            .catch(err=>console.log(err))
		},

		fetchMembershipInfo() {
			let url = `./includes/index.php?tbl=tbl_membership_info`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.membership = data;
            })
            .catch(err=>console.log(err))
		},

		handleMembership() {
			if (this.input.name !== '' && this.input.email !== '' && this.input.dob !== '') {
				let url = './includes/membership=true';
				console.log("working");
			}
		}
	},
	
	components: {
		scrolldown: ScrollDownComponent
	}
}