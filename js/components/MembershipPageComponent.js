import ScrollDownComponent from "./ScrollDownComponent.js";

export default {
    name: 'join',
    
    template: `
    <div>
    <section class="hero heroJoin">
		<h2>Membership</h2>
		<scrolldown/>
	</section>

	<section id="mainJoin">
		<h2>TRAA MEMBERSHIP</h2>
		<p>Participate, help out, have fun and give a little bit back to the Thames River watershed! <br>Join at the <span><a href="#">next TRAA meeting</a></span> or fill out the application below.</p>
	</section>
	
	<section id="formCon">
		<h2 class="hidden">Membership Info and Form</h2>
		
		<div id="joinProcess">
			<div class="processOrder">
				<div class="circle">1</div>
				<p>PERSONAL INFO</p>
			</div>
			<div class="connector"></div>
			<div class="processOrder">
				<div class="circle">2</div>
				<p>PAYMENT</p>
			</div>
			<div class="connector"></div>
			<div class="processOrder">
				<div class="circle">3</div>
				<p>SUBMIT</p>	
			</div>
		</div>

		<div id="infoAndForm">
			<div id="priceCon">
				<div id="membershipPrice">$25</div>
				<div id="joinInfo">
					<p>BEST VALUE DEAL!</p>
					<ul>
						<li>Annual plan</li>
						<li>TRAA membership card</li>
						<li>Share your membership with your family</li>
						<li>Good standing as a TRAA member</li>
						<li>Periodic updates about TRAA activities</li>
					</ul>
				</div>
			</div>

			<div id="joinForm">
				<a href="#">Already A Member?</a>
				<p>required fields *</p>
				<form id="membershipForm" action="contact-form.php" method="post">
					<label>Name:*</label>
					<input type="text" required id="nameContact" placeholder="e.g. John Smith" size="30">
					<label>Email:*</label>
					<input type="email" required id="email" placeholder="example@email.com" size="30">
					<label>Confirm Email:*</label>
					<input type="text" required id="subject" placeholder="example@email.com" size="30">
					<label>Date of Birth:*</label>
					<input type="text" required id="dateBirth" placeholder="yyyy-mm-dd" size="30">
					<label>Phone:</label>
					<input type="tel" id="phone" placeholder="555-555-5555" size="30" >
					
					<div class="btnCon">
						<div class="btnAnimateCon">
							<input type="submit" value="NEXT" class="btnLarge light">
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
	
	components: {
		scrolldown: ScrollDownComponent
	}
}