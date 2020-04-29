<?php
	if(empty($_POST)){
		$msg = 'Please fill out all the required fields...';
	}
	
	$name = '';
	$email = '';
	$subject = '';
	$message = '';
	$recipient = 'traa@anglers.org';

	if (isset($_POST['nameContact'])) {
		$name = filter_var($_POST['nameContact'], FILTER_SANITIZE_STRING);
	}
	
	if (isset($_POST['email'])) {
	   $email = str_replace(array("\r", "\n", "%0a", "%0d"),'',$_POST['email']);
	   $email = filter_var($email,FILTER_VALIDATE_EMAIL);
	}

	if (isset($_POST['subject'])) {
		$subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
	}
	
	if (isset($_POST['message'])) {
		$message = $_POST['message']; 
	}

	// $headers = array(
	// 	'From'=>'no-reply@mariamkhalifa.ca',
	// 	'Reply-To'=>$name.'<'.$email.'>'
	// );
	
	//if(mail($recipient, $subject, $message, $headers)){
	if (mail($recipient, $subject, $message)) {
		$msg = 'Your email was sent. We will get back to you soon.';
	}
	else {
		$msg = 'Sorry, the email did not go through!';
	}
	
?>

<?php  include 'template/header.php'; ?>

		<section class="hero heroContact">
			<h2 id="contact-h2">CONTACT US</h2>
			<i class="fa fa-angle-down downArrow"></i>
		</section>

		<section id="mainContact">
			<h3>THE TRAA WOULD LIKE TO HEAR FROM YOU</h3>
			<p>Need more information? Want to get involved? Please don't hesitate to contact us.</p>
			<div id="announcement">
				<div id="close"><div id="circle">X</div></div>
				<a href="#">Get in touch with us at the next meeting. Check the events page for the next meeting location.</a>
			</div>

			<div id="addresses">
				<div class="addressesCon">
					<h4><span><img class="contactIcon" src="images/contact_location.svg" alt="Location Icon"></span>GENERAL MEETINGS</h4>
					<p>Come to our meetings every second Wednesday of the month at 7:00pm at WOFGPA.</p>
				</div>

				<div class="addressesCon">
					<h4><span><img class="contactIcon" src="images/contact_mail.svg" alt="Mail Icon"></span>MAILINGS ADDRESS ONLY</h4>
					<p>Thames River Anglers Association 2202 Coronation Drive London, ON N6G 0B9</p>
				</div>
			</div>
      
			<div id="form">
				<form id="contactForm" action="contact.php" method="post">
					<div class="nameEmailCon">
						<label for="nameContact"></label>
						<input type="text" id="nameContact" name="name" placeholder="name" size="30">
						<label for="email"></label>
						<input type="email" id="email" name="email" placeholder="email" size="30">
					</div>
					<label for="subject"></label>
					<input type="text" id="subject" name="subject" placeholder="subject" size="30" list="subjectOptions">

					<datalist id="subjectOptions">
					    <option value="Fundraising"></option>
					    <option value="Volunteering"></option>
					    <option value="Merchandising"></option>
					    <option value="General Inquiry"></option>
					</datalist>

					<label for="message"></label>
					<textarea id="message" name="message" placeholder="leave a message" cols="32" rows="8"></textarea>
					
					<div class="btnCon">
						<div class="btnAnimateCon">
							<input id="cont-submit" type="submit" value="SEND" class="btnLarge light">
							<a href="#" class="btnAnimateOverlay"></a>
							<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
						</div>
					</div>

					<div class="msg-popover">
						<p><?php echo $msg; ?></p>
					</div>
				</form> <!-- end form -->
			</div>
		</section>

		<div id="mapArea">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.5518557793494!2d-81.22157848473451!3d42.94557367915192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef3b01c9e9983%3A0x84558efdb9f3a3a1!2s790+Southdale+Rd+E%2C+London%2C+ON+N6E+1A8!5e0!3m2!1sen!2sca!4v1549222596410" allowfullscreen></iframe>
		</div>
		
		<section id="eventsWidget">
		<h2>UPCOMING EVENTS</h2>

		<div id="scrollWrap">
			<!-- add JS to make arrows scroll?  -->
			<i id="eventsArrowLeft" class="fa fa-angle-left carouselArrow"></i>
			<section id="events">
				<h3 class="hidden">Events Widget</h3>
				<div class="eventsCon">
					<div class="event">
						<div class="dateTitleCon">
							<div class="date">
								<p class="day">JAN</p>
								<p class="month">09</p>
							</div>
							<p class="title">General Meeting</p>
						</div>
						<p class="eventDesc">
							Happy New Year! We are meeting at 7:00pm at 790 Southdale Road to do awesome things.
						</p>
					</div>
					<div class="event">
						<div class="dateTitleCon">
							<div class="date">
								<p class="day">FEB</p>
								<p class="month">06</p>
							</div>
							<p class="title">Visit the hatchery</p>
						</div>
						<p class="eventDesc">
							Come visit the hatchery from 10:00am to 3pm at 123 Fish Rd. and see our brown trout.
						</p>
					</div>
					<div class="event">
						<div class="dateTitleCon">
							<div class="date">
								<p class="day">MAR</p>
								<p class="month">08</p>
							</div>
							<p class="title">Brown Trout Program</p>
						</div>
						<p class="eventDesc">
							We are proud to announce our newest project: the release of our brown trout.
						</p>
					</div>
					<div class="event">
						<div class="dateTitleCon">
							<div class="date">
								<p class="day">MAR</p>
								<p class="month">26</p>
							</div>
							<p class="title">Salmon Release</p>
						</div>
						<p class="eventDesc">
							Did you know that the average size of the salmon we release is 40cm large?
						</p>
					</div>
				</div>
			</section>
			<!-- add JS to make arrows scroll?  -->
			<i id ="eventsArrowRight" class="fa fa-angle-right carouselArrow"></i>
		</div>

	</section> <!-- end events widget -->
					
	<?php  include 'template/footer.php'; ?>
	
	<!-- JavaScript -->
	<script src="js/nav.js"></script>
	<script src="js/contactRemind.js"></script>
	<script src="js/contactPopover.js"></script>
	<script src="js/events_widget.js"></script>
	<script src="js/skipHero.js"></script>
	<script src="js/subNav_mobile.js"></script>
</body>
</html>


	