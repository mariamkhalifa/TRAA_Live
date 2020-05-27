import MissionComponent from "./MissionComponent.js"
import HistoryComponent from "./HistoryComponent.js"
import MembersComponent from "./MembersComponent.js"
import TopBtnComponent from "./TopBtnComponent.js"
import ScrollDownComponent from "./ScrollDownComponent.js"

export default {
    name: 'about',

    template: `
    <div>
        <section class="hero heroAbout">
            <h2>{{ title.page_title }}</h2>
            <scrolldown/>
        </section>

        <div class="container">
            <div id="tagline">
                <p>{{ title.tagline }}</p>
            </div>

            <section id="mission">
                <h2>{{ title.missions_title }}</h2>

                <div class="statementsCon">
                    <mission v-for="(mission, index) in missiondata"
                    :icon="mission.mission_icon" :title="mission.mission_title" :desc="mission.mission_desc" :key="index"/>					
                </div>
            </section> 
        </div>

        <section id="history">
            <h2>{{ title.history_title }}</h2>
            <div id="historyCon">
                
                <history v-for="(history, index) in historydata"
                :year="history.history_year" :entry="history.history_entry" :key="index"/>
                
            </div>
        </section>
	
        <div class="container">
            <section id="team">
            <h2>{{ title.team_title }}</h2>
                <p id="teamStatement">{{ title.team_statement }}</p>
                
                <section id="executives">
                        <div class="membersCard">
                            <h3>{{ title.team_title1 }}</h3>
                        </div>

                        <member v-for="(member, index) in executives"
                        :name="member.exec_name" :role="member.exec_role" :key="index"/>
                </section>

                <section id="volunteers">
                        <div class="membersCard">
                            <h3>{{ title.team_title2 }}</h3>
                        </div>

                        <member v-for="(member, index) in volunteers"
                        :name="member.volunteer_name" :role="member.volunteer_role" :key="index"/>

                </section>
            </section>

            <topbtn/>
        
        </div>
    </div>
    `,

    data() {
        return {
            title: [],
            missiondata: [],
            historydata: [],
            executives: [],
            volunteers: []
        }
    },

    created() {
        this.fetchAboutTitle();
        this.fetchAboutMissions();
        this.fetchAboutHistory();
        this.fetchExecutives();
        this.fetchVolunteers();
    },

    methods: {
        fetchAboutTitle() {
            let url = `./includes/index.php?tbl=tbl_about_title`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.title = data[0];
            })
            .catch(err=>console.log(err))
        },

        fetchAboutMissions() {
            let url = `./includes/index.php?tbl=tbl_about_missions`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.missiondata = data;
            })
            .catch(err=>console.log(err))
        },

        fetchAboutHistory() {
            let url = `./includes/index.php?tbl=tbl_about_history`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.historydata = data;
            })
            .catch(err=>console.log(err))
        },

        fetchExecutives() {
            let url = `./includes/index.php?tbl=tbl_executives`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.executives = data;
            })
            .catch(err=>console.log(err))
        },

        fetchVolunteers() {
            let url = `./includes/index.php?tbl=tbl_volunteers`;

            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                //console.log(data);
                this.volunteers = data;
            })
            .catch(err=>console.log(err))
        },
    },

    components: {
        scrolldown: ScrollDownComponent,
        mission: MissionComponent,
        history: HistoryComponent,
        member: MembersComponent,
        topbtn: TopBtnComponent
    }
}