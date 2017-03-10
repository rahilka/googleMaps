var map;
var element = document.getElementById('map');
var options = {
                center: {lat: 41.997346, lng: 21.427996},
                zoom: 8,
                disableDefaultUI: true,
                scrollwheel: true,
                draggable: true
            };

function initMap() {
    map = new google.maps.Map(element, options);

    map.setZoom(18);

}