export default {
    template: `
		<section id="latestNews" class="container">
		<h2>{{ title }}</h2>
            <p id="latestNewsDesc">{{ intro }}</p>
            
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
            
			<div @click="navToBlog" class="btnCon">
				<div class="btnAnimateCon">
					<router-link :to="{ name: 'blog' }" class="btnSmall light">SEE BLOG</router-link>
					<router-link :to="{ name: 'blog' }" class="btnAnimateOverlay"></router-link>
					<router-link :to="{ name: 'blog' }" class="btnAnimateOverlay btnAnimateOverlay2"></router-link>
				</div>
			</div>
		</section>
    `,

    data() {
        return {
            title: 'Latest News',
            intro: 'Events and activities are what the TRAA’s all about! See our blog for past events.'
        }
	},
	
	methods: {
		navToBlog() {
			gsap.to(window, {duration: 1, scrollTo: {y:0}});
		}
	}
}