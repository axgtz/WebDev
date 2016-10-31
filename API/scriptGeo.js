navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    var coordinates = position.coords.latitude + ',' + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + coordinates + "&zoom=14&size=640x400&key=AIzaSyDQAB2DNOyL6NzJwUoXOzU1y7-d65Tnu0A";
    
    //document.getElementById("map").innerHTML = '<img src="' + img_url + '">';
    
    console.log(position);
    console.log(img_url);
}