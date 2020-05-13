export default {
    template: `
    <section id="sponsors">
	    <h2>{{ intro.title }}</h2>
		<p>{{ intro.text }}</p>
		<div class="sponRow">
            <img v-for="(sponsor, index) in sponsors" :key="index"
            :src="'images/' + sponsor.spon_img" :alt="sponsor.spon_name">
		</div>			
	</section>
    `,

    data() {
        return {
            intro: [],
            sponsors: []
        }
    },

    created() {
        this.fetchIntro();
        this.fetchSponsors();
    },

    methods: {
        fetchIntro() {
            let url = `./includes/index.php?tbl=tbl_home_sponsors_intro`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.intro = data[0];
            })
            .catch(err=>console.log(err))
        },

        fetchSponsors() {
            let url = `./includes/index.php?tbl=tbl_home_sponsors`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.sponsors = data;
            })
            .catch(err=>console.log(err))
        },
    }
} 