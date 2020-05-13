export default {
    props: ['event'],

    template: `
        <li class="event">
            <div class="dateTitleCon">
                <div class="date">
                    <p class="day">{{ event.events_month }}</p>
                    <p class="month">{{ event.events_day }}</p>
                </div>
                <p class="title">{{ event.events_title }}</p>
            </div>
            <p class="eventDesc">{{ event.events_desc }}</p>
        </li>
    `
}