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
            <h2>{{ title }}</h2>
            <scrolldown/>
        </section>

        <div class="container">
            <div id="tagline">
                <p>{{ tagline }}</p>
            </div>

            <section id="mission">
                <h2>{{ mission.title }}</h2>

                <div class="statementsCon">
                    <mission v-for="(mission, index) in missiondata"
                    :icon="mission.icon" :title="mission.title" :desc="mission.desc" :key="index"/>					
                </div>
            </section> 
        </div>

        <section id="history">
            <h2>{{ history.title }}</h2>
            <div id="historyCon">
                
                <history v-for="(history, index) in historydata"
                :year="history.year" :entry="history.entry" :key="index"/>
                
            </div>
        </section>
	
        <div class="container">
            <section id="team">
            <h2>{{ team.title }}</h2>
                <p id="teamStatement">{{ team.statement }}</p>
                
                <section id="executives">
                        <div class="membersCard">
                            <h3>{{ members.title1 }}</h3>
                        </div>

                        <member v-for="(member, index) in executives"
                        :name="member.name" :role="member.role" :key="index"/>
                </section>

                <section id="volunteers">
                        <div class="membersCard">
                            <h3>{{ members.title2 }}</h3>
                        </div>

                        <member v-for="(member, index) in volunteers"
                        :name="member.name" :role="member.role" :key="index"/>

                </section>
            </section>

            <topbtn/>
        
        </div>
    </div>
    `,

    data() {
        return {
            title: 'Who is the TRAA?',
            tagline: 'Hands-on Environmentalism is what we do.',

            mission: {
                title: 'Our Mission',
            },
            missiondata: [
                { icon: 'icon_fish_protect.svg', title: 'Protect the Fishery', desc: 'Protect, enhance and regenerate a viable, multi-species, year-round fishery.' },
                { icon: 'icon_vest.svg', title: 'Environmental Clean Up', desc: 'Promote and participate in environmental clean-up, pollution control and rehabilitation.' },
                { icon: 'icon_give_back.svg', title: 'Monitor Species', desc: 'Breed, relocate and stock to re-establish or augment appropriate species of fish.' },
                { icon: 'icon_fish_sharing.svg', title: 'Form Partnerships', desc: 'Form partnerships with community businesses, government agencies, special interest groups, landowners, and other stakeholders in the Thames River Watershed.' },
                { icon: 'icon_angler.svg', title: 'Promote Safe Fishing', desc: 'Promote environmentally sound sport fishing practices.' },
                { icon: 'icon_fish_circle.svg', title: 'Increase Awareness', desc: 'Increase public awareness of the unique diversity of the Thames River Watershed, its challenges, its recreational opportunities and its vital importance to our community.' },
            ],

            history: {
                title: 'Our History',
            },
            historydata: [
                { year: '1986', entry: 'The TRAA was formed by anglers concerned with the state of the fishery in the Thames River watershed, particularly the dwindling smallmouth bass population in the North Thames River. We began rearing rainbow trout in an outdoor upwelling incubation box.' },
                { year: '1999', entry: 'The TRAA and the Upper Thames River Conservation Authority (UTRCA), with the blessing of the Ministry of Natural Resources (MNR), agreed to the operation of a walleye hatchery in Fanshawe Conservation Area, just north-east of London, Ontario.' },
                { year: '2010', entry: 'TRAA members start a 5-year Salmonid Tagging and Monitoring Program with personnel from the Upper Thames River Conservation Authority (UTRCA) and Jon George, an MNR biologist from Thunder Bay.' },
                { year: '2019', entry: 'We continue to celebrate over 30 years of operation and are still very involved in our community through educational tours of our trout hatchery, release programs, removing deadfalls from Komoka Creek, working towards our Brook Trout program and the decommissioning of the Spring Bank dam.' },
            ],

            team: {
                title: 'Meet The Team',
                statement: 'The TRAA has a history of always having a core group of active members supported by those who just want to be part of the solution. Either way, every member of the TRAA is active in their advocacy for the health of the Thames River watershed and its inhabitants.'
            },

            members: {
                title1: 'Executives',
                title2: 'Volunteers'
            },

            executives: [
                { name: 'Rob Hunter', role: 'President' },
                { name: 'Paul Holmes', role: 'Vice-Presidient' },
                { name: 'Jeremy Beaton', role: 'Secretary' },
                { name: 'Randy Bailey', role: 'Treasurer' },
                { name: 'Adam Bengen', role: 'Chairperson' },
            ],
            
            volunteers: [
                { name: 'Rob Huber, Paul Noble, Randy Bailey', role: 'Public Relations' },
                { name: 'Adam Bengen, Randy Bailey', role: 'Hatchery Managemnet' },
                { name: 'Dan Schinkelshoek', role: 'Trout' },
                { name: 'Pud Hunter', role: 'Warmwater' },
                { name: 'Jeremy Beaton, Paul Holmes, Randy Bailey', role: 'Habitat' },
            ]
        }
    },

    components: {
        scrolldown: ScrollDownComponent,
        mission: MissionComponent,
        history: HistoryComponent,
        member: MembersComponent,
        topbtn: TopBtnComponent
    }
}