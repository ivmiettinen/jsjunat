
navigator.geolocation.getCurrentPosition(function(position) {
    console.log('Geolocation permissions granted');
    console.log('Latitude:' + position.coords.latitude);
    console.log('Longitude:' + position.coords.longitude);
    getCurrentPosition();
  });







//Geolokaatio koordinaatteina:

var x = document.getElementById("geolocation");


function getLocation() {
    
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}





//Kartta:
/*

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
  
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
    "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }

  */