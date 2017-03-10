var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.997346, lng: 21.427996},
        zoom: 8
    });
}