import ScrollDownComponent from "./ScrollDownComponent.js";
import TopBtnComponent from "./TopBtnComponent.js";
import BlogComponent from "./BlogComponent.js";

export default {
    name: 'blog',

    template: `
    <div>
    <section class="hero heroBlog">
		<h2>Blog</h2>
		<scrolldown/>
	</section>
	
		<section id="mainBlog" class="container">
			<h2 class="hidden">Blog Main</h2>
			<div id="blogPosts">
				
				<blogpost v-for="(post, index) in blog" :post="post" :key="index"/>

				<div class="btnCon">
					<div class="btnAnimateCon">
						<a href="#" class="btnSmall light">SEE MORE</a>
						<a href="#" class="btnAnimateOverlay"></a>
						<a href="#" class="btnAnimateOverlay btnAnimateOverlay2"></a>
					</div>
				</div>
			</div>
			<div id="blogLinks">
				<section class="categoryPosts">
					<h4>POPULAR POSTS</h4>
					<div class="postLink">
						<img class="postLinkImage" src="images/blog_post_link_1.jpg" alt="Popular Post Picture">
						<a href="#">Stream Habitat Work</a>
					</div>
					<div class="postLink">
						<img class="postLinkImage" src="images/blog_post_link_2.jpg" alt="Popular Post Picture">
						<a href="#">Annual Paddle & Fish</a>
					</div>
					<div class="postLink">
						<img class="postLinkImage" src="images/blog_post_link_3.jpg" alt="Popular Post Picture">
						<a href="#">TRAA - Show Time!</a>
					</div>
				</section>
				<section class="categoryPosts">
					<h4>RECENT POSTS</h4>
					<div class="postLink">
						<img class="postLinkImage" src="images/blog_post_link_1.jpg" alt="Recent Post Picture">
						<a href="#">Stream Habitat Work</a>
					</div>
					<div class="postLink">
						<img class="postLinkImage" src="images/blog_post_link_2.jpg" alt="Recent Post Picture">
						<a href="#">Annual Paddle & Fish</a>
					</div>
					<div class="postLink">
						<img class="postLinkImage" src="images/blog_post_link_3.jpg" alt="Recent Post Picture">
						<a href="#">TRAA - Show Time!</a>
					</div>
				</section>
				<section id="archives">
					<h4>ARCHIVES</h4>
					<a href="#">2015</a>
					<a href="#">2014</a>
					<a href="#">2013</a>
					<a href="#">2012</a>
					<a href="#">Newsletters</a>
				</section>
			</div>
		</section> 
	
		
        <topbtn/>
	
    </div>
    `,

    components: {
        scrolldown: ScrollDownComponent,
        blogpost: BlogComponent,
        topbtn: TopBtnComponent, 
    },

    data() {
        return {
            blog: []
        }
    },

    created() {
        this.fetchBlog();
    },

    methods: {
        fetchBlog() {
            let url = `./includes/index.php?tbl=tbl_blog`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                this.blog = data;
            })
            .catch(err=>console.log(err))
        }
    }
}