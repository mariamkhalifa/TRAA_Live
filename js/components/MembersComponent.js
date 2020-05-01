export default {
    props: ['name', 'role'],

    template: `
    <div class="member">
        <div class="memberName"><p>{{ name }}</p></div>
        <div class="memberTitle">
            <h4>{{ role }}</h4>
        </div>
    </div>
    `
}