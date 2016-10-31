var map;
function initMap(latitude, longitude) {
    map = new google.maps.Map(document.getElementById('map'), 
    {
        center: {lat: latitude, lng: longitude},
        zoom: 18
        mapTypeId: 
    });
}

//Mostrar la ubicación
function showPosition(position) {
    console.log(position);
    initMap(position.coords.latitude, position.coords.longitude);
}

//Obtener la localización 
function getPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
}
