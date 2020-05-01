export default {
    props: ['icon', 'title', 'desc'],

    template: `
    <div class="animationCon missionStatement">
        <img id="missionStatementIcon1" class="animationIcon" :src="'images/' + icon" :alt="title">
        <div class="animationOverlay">
            <div class="arrowUp"></div>
        </div>
        <div class="animationOverlay animationOverlay2"></div>
        <h3 class="animationTitle">{{ title }}</h3>
        <p class="animationText">{{ desc }}</p>
    </div>
    `
}