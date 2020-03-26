<?php  include 'template/header.php'; ?>

	<div id="carousel">
<!-- 		<div id="carouselArrows">
			<div class="arrowCircleLeft"><i class="fa fa-angle-left carouselArrow"></i></div>
			<div class="arrowCircleRight"><i class="fa fa-angle-right carouselArrow"></i></div>
		</div>
		<div id="carouselPickerCon">
			<div id="carouselPicker">
				<div class="carouselOption" data-offset="0"></div>
				<div class="carouselOption" data-offset="1"></div>
				<div class="carouselOption" data-offset="2"></div>
				<div class="carouselOption" data-offset="3"></div>
			</div>
		</div> -->
		<!-- <div id="carouselImages"> -->
			<div id="vidCon">
				<video controls>
					<source src="video/traa_video.mp4" type="video/mp4">
					<source src="video/traa_video_small.mp4" type="video/mp4">
					Oops! Something went wrong. Click to view the video <a href="#">here</a>
				</video>
			</div>
			<!-- <picture id="imagesCon">
				<source srcset="images/home_hero.jpg" media="(min-width: 938px)">
	    		<img src="images/home_hero_small.jpg"/> -->

<!-- 				<source srcset="images/about_hero.jpg" media="(min-width: 938px)">
	    		<img src="images/about_hero_small.jpg"/>
				
				<source srcset="images/contact_hero.jpg" media="(min-width: 938px)">
	    		<img src="images/contact_hero_small.jpg"/> -->
			<!-- </picture> -->
		<!-- </div> -->
		<div class="videoOverlay"><i class="fa fa-play-circle-o"></i></div>
	</div> <!-- end carousel -->
	
	<div class="container">
		<section id="welcome">
		<h2 id="traaWelcome">WELCOME TO THE 
				<span><span class="welcomeGreen">T</span>HAMES
				<span class="welcomeGreen">R</span>IVER</span>
				<span><span class="welcomeGreen">A</span>NGLERS
				<span class="welcomeGreen">A</span>SSOCIATION</span></h2>
			<div id="welcomeDesc">	
				<p> 
					"For the enhancement, protection and promotion of a viable, multi-species fishery within the Thames River watershed. Dedication today for tomorrow.”
				</p>
			</div>
		</section>
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

		<div class="btnCon">
			<div class="btnAnimateCon">
				<a href="#" class="btnSmall dark">View Calendar</a>
				<a href="#" class="btnAnimateOverlay"></a>
				<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
		</div>
	</section> <!-- end events widget -->
	
	<div class="container">
		<section id="about">
			<picture>
				<source media="(max-width: 600px)" srcset="images/home_about_small.jpg">
				<img src="images/home_about.jpg" alt="River Image">
			</picture>
			<div id="aboutCon">
				<h2>ABOUT THE TRAA</h2>
				<p id="aboutDesc">
					We are a “hands on” environmental group who likes to work at a grass roots level.
				</p>
				<section id="statements">
				<h3 class="hidden">Mission Statements</h3>
					<div class="statement">
						<img id="homeAboutIconProtect" src="images/icon_fish_protect.svg" alt="We Protect">
						<p class="statementTitle">WE PROTECT</p>
						<p>Our fishery, river fish, and environment</p>
					</div>
					<div class="statement">
						<img id="homeAboutIconPromote" src="images/icon_angler.svg" alt="We Promote">
						<p class="statementTitle">WE PROMOTE</p>
						<p>Safe fishing practices, pollution control, and awareness</p>
					</div>
					<div class="statement">
						<img id="homeAboutIconParticipate" src="images/icon_fish_sharing.svg" alt="We Participate">
						<p class="statementTitle">WE PARTICIPATE</p>
						<p>In rehabilitation, environmental clean-up, and our community</p>
					</div>					
				</section>
				<div class="btnCon">
					<div class="btnAnimateCon">
						<a href="join.html" class="btnSmall dark">JOIN US</a>
						<a href="join.html" class="btnAnimateOverlay"></a>
						<a href="join.html" class="btnAnimateOverlay btnAnimateOverlay2"></a>
					</div>
					<div class="btnAnimateCon">
						<a href="about.html" class="btnSmall light">LEARN MORE</a>
						<a href="about.html" class="btnAnimateOverlay"></a>
						<a href="about.html" class="btnAnimateOverlay btnAnimateOverlay2"></a>
					</div>
				</div>
			</div>
		</section> <!-- end about section -->
	</div>

	<section id="impact">
	<h2>OUR IMPACT</h2>
		<p>
			Our work is what sets the TRAA apart from other clubs and organizations. You’ll find us right in the water clearing obstructions from streams, measuring returning salmonids & taking scale samples for DNA analysis, educating through trout hatchery tours & stream walks, being a voice for the Thames River watershed inhabitants...
		</p>
		<p>The list goes on.</p>
		<div class="btnCon">
			<div class="btnAnimateCon">
				<a href="#" class="btnSmall dark">DONATE</a>
				<a href="#" class="btnAnimateOverlay"></a>
				<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
			<div class="btnAnimateCon">
				<a href="projects.html" class="btnSmall light">LEARN MORE</a>
				<a href="projects.html" class="btnAnimateOverlay"></a>
				<a href="projects.html" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
		</div>
	</section> <!-- end impact section -->

	<section id="productsCon">
			<picture>
				<source srcset="images/products_gallery_reel.jpg" media="(max-width: 600px)">
					<img class="productImg" src="images/products_large_reel.jpg" alt="Reel Decal Sticker Merch">
			</picture>
		<h2>OUR PRODUCTS</h2>
		<p>Check out our products. From stickers for your gear. to notepads and keychains. All profits help fund our projects.</p>
		<div class="btnCon">
			<div class="btnAnimateCon">
				<a href="products.html" class="btnSmall dark">SEE PRODUCTS</a>
				<a href="products.html" class="btnAnimateOverlay"></a>
				<a href="products.html" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
		</div>
	</section>

	<div class="container">
		<section id="latestNews">
		<h2>LATEST NEWS</h2>
			<p id="latestNewsDesc">
				Events and activities are what the TRAA’s all about! See our blog for past events.
			</p>
			<div id="newsCon">
				<div class="newsConColumn">
					<div class="newsStory">
						<img class="newsImg" src="images/home_news_1.jpg" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								Mar 02, 2019
							</p>
							<p class="newsTitle">EVENT RECAP</p>
							<p class="newsSubtitle">Our Latest Clean-Up Effort</p>
						</div>
					</div>
					<div class="newsStory">
						<img class="newsImg" src="images/home_news_2.jpg" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								Feb 20, 2019
							</p>
							<p class="newsTitle">FAMILY FISHING DAY</p>
							<p class="newsSubtitle">Another TRAA Tradition</p>
						</div>						
					</div>					
					<div class="newsStory">
						<img class="newsImg" src="images/home_news_3.jpg" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								Feb 16, 2019
							</p>
							<p class="newsTitle">PROJECT DAYS</p>
							<p class="newsSubtitle">Our Latest Clean-Up Effort</p>
						</div>						
					</div>
				</div> <!-- end newsConColumn1 -->

				<div class="newsConColumn">
					<div class="newsStory">
						<img class="newsImg" src="images/home_news_4.jpg" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								Feb 06, 2019
							</p>
							<p class="newsTitle">WORK PARTY</p>
							<p class="newsSubtitle">Stream Habitat Party</p>
						</div>
					</div>
					<div class="newsStory">
						<img class="newsImg" src="images/home_news_5.jpg" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								Feb 23, 2019
							</p>
							<p class="newsTitle">EVENT RECAP</p>
							<p class="newsSubtitle">Our Latest Clean-Up Effort</p>
						</div>						
					</div>					
					<div class="newsStory">
						<img class="newsImg" src="images/home_news_6.jpg" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								Jan 09, 2019
							</p>
							<p class="newsTitle">ANNUAL PADDLE & FISH</p>
							<p class="newsSubtitle">Third Annual Paddle and Fish</p>
						</div>						
					</div>
				</div> <!-- end newsConColumn2 -->

				<div class="newsConColumn">
					<div class="newsStory">
						<img class="newsImg" src="images/home_news_7.jpg" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								Jan 24, 2019
							</p>
							<p class="newsTitle">TROUT RELEASE</p>
							<p class="newsSubtitle">Releasing the Rainbow Trout</p>
						</div>
					</div>
					<div class="newsStory">
						<img class="newsImg" src="images/home_news_8.jpg" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								Feb 02, 2019
							</p>
							<p class="newsTitle">Angling BBQ</p>
							<p class="newsSubtitle">Hotdogs, Burgers, and fun!</p>
						</div>						
					</div>					
					<div class="newsStory">
						<img class="newsImg" src="images/home_news_9.jpg" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								Jan 29, 2019
							</p>
							<p class="newsTitle">“DAM” NATION</p>
							<p class="newsSubtitle">Presenting the Documentary</p>
						</div>						
					</div>
				</div> <!-- end newsConColumn3 -->
			</div>
			<div class="btnCon">
<!-- 				<a href="blog.html" class="btnSmall light">SEE BLOG</a> -->
				<div class="btnAnimateCon">
					<a href="blog.html" class="btnSmall light">SEE BLOG</a>
					<a href="blog.html" class="btnAnimateOverlay"></a>
					<a href="blog.html" class="btnAnimateOverlay btnAnimateOverlay2"></a>
				</div>
			</div>
		</section> <!-- end latestNews section -->
	</div>

	<section id="sponsors">
	<h2>SPONSORS</h2>
		<p>
			The support of the following local area businesses is much appreciated:
		</p>
		<div class="sponRow">
			<img src="images/home_sponsor_melchers.jpg" alt="Melchers Logo" width="187">
			<img src="images/home_sponsor_muma.jpg" alt="Muma Logo" width="194">
			<img src="images/home_sponsor_guillevin.jpg" alt="Guillevin Logo" width="202">
		</div>
		<div class="sponRow">
			<img class="tryRecycling" src="images/home_sponsor_tryRecycling.jpg" alt="Try Recycling Logo" width="195">
			<img src="images/home_sponsor_angling.jpg" alt="Angling Logo" width="95">
		</div>			
	</section> <!-- end sponsors section -->

	<div class="container">
		<div class="btnTop">
			<div class="btnAnimateConTop btnAnimateCon">
				<a href="#"><div class="btnTopBg"><i class="fa fa-angle-up"></i></div></a>
				<a href="#" class="btnAnimateOverlay"></a>
				<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
			</div>
			<p>TOP</p>
		</div>
	</div>

	<?php  include 'template/footer.php'; ?>
	
	<!-- JavaScript -->
	<script src="js/btnTop.js"></script>
	<script src="js/nav.js"></script>
	<script src="js/videoOverlay.js"></script>
	<script src="js/events_widget.js"></script>
	<script src="js/subNav_mobile.js"></script>
</body>
</html>