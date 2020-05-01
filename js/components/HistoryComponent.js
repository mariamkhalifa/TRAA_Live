export default {
    props: ['year', 'entry'],

    template: `
    <div class="historyEntry">
        <div class="historyYear">
            <div class="yearCircle">{{ year }}</div>
            <div class="yearLine"></div>
        </div>
        <div class="descBox">
            <p>{{ entry }}</p>
        </div>
    </div>
    `
}