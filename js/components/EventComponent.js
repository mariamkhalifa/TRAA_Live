export default {
    props: ['event'],

    template: `
        <li class="event">
            <div class="dateTitleCon">
                <div class="date">
                    <p class="day">{{ event.month }}</p>
                    <p class="month">{{ event.day }}</p>
                </div>
                <p class="title">{{ event.title }}</p>
            </div>
            <p class="eventDesc">{{ event.desc }}</p>
        </li>
    `
}