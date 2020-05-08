export default {
    template: `
    <div id="map"></div>
    `,

    mounted() {
        this.initMap();
    },

    methods: {
        initMap() {
            let traa = {lat: 42.9455737, lng: -81.2193898};
            
            let map = new google.maps.Map(
                document.querySelector('#map'), {zoom: 16, center: traa}
            );

            let marker = new google.maps.Marker({position: traa, map: map});
        }
    },
}