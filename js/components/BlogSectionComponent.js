export default {
    template: `
		<section id="latestNews" class="container">
		<h2>{{ news.title }}</h2>
            <p id="latestNewsDesc">{{ news.intro }}</p>
            
			<div id="newsCon">
	
					<div v-for="(post, index) in blog" :key="index" class="newsStory">
						<img class="newsImg" :src="'images/' + post.blog_thumb" alt="Blog Post Image">
						<div class="newsDesc">
							<p class="newsDate">
								<span class="newsIcon"></span>
								{{ post.blog_date }}
							</p>
							<p class="newsTitle">{{ post.blog_title }}</p>
							<p class="newsSubtitle">{{ post.blog_subtitle }}</p>
						</div>
					</div>
								
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
            news: [],
			blog: []
        }
	},

	created() {
		this.fetchTitle();
		this.fetchBlog();
	},
	
	methods: {
		fetchTitle() {
			let url = `./includes/index.php?tbl=tbl_home_news`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                this.news = data[0];
            })
            .catch(err=>console.log(err))
		},

		fetchBlog() {
			let url = `./includes/index.php?blog=true`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                this.blog = data;
            })
            .catch(err=>console.log(err))
		},

		navToBlog() {
			gsap.to(window, {duration: 1, scrollTo: {y:0}});
		}
	}
}