export default {
    props: ['post'],

    template: `
        <div class="iconPostCon">
            <div class="blogPostIcon"></div>
            <article class="post">
                <h3>{{ post.blog_title }}</h3>
                    <div class="postContent2">
                        <img :src="'images/' + post.blog_thumb" alt="image">
                        
                        <div class="postContent2Text">
                            <p>{{ post.blog_summary }}</p>
                            <a @click.prevent="navToPost" href="#">> READ MORE</a>
                        </div>
                    </div>
                <div class="postTags">
                    <ul>
                        <li><span class="blogDateIcon"></span>{{ post.blog_date }}</li>
                        <li><span class="blogCategoriesIcon"></span>CATEGORIES</li>
                        <!-- <li><span class="blogCommentsIcon"></span>3 COMMENTS</li> -->
                    </ul>
                </div>
            </article>
        </div> 
    `,

    methods: {
        navToPost() {
            this.$router.push({ name: 'post', params: { 'post' : this.post}});
            gsap.to(window, {duration: 1, scrollTo: {y:0}});
        }
    }
}