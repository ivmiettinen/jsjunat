
//Käyttäjän geolokaatio: 

navigator.geolocation.getCurrentPosition(function (position) {
    console.log('Geolocation permissions granted');
    console.log('Latitude:' + position.coords.latitude);
    console.log('Longitude:' + position.coords.longitude);
    haeLahinAsema(position.coords.latitude, position.coords.longitude)
});


//Käyttäjää lähimpänä olevan aseman haku:  



function haeLahinAsema(lat, long, callback) {
    $.get("https://rata.digitraffic.fi/api/v1/metadata/stations", function (data) {
        console.dir(data);
        var lahinasema;
        var lyhinetaisyys = 1000000;
        for (let asema of data) {
            let etaisyys = getDistanceFromLatLonInKm(lat, long, asema.latitude, asema.longitude)
            //console.log(etaisyys);
            if (etaisyys < lyhinetaisyys) {
                lyhinetaisyys = etaisyys;
                lahinasema = asema;
            }
        }
        console.dir(lahinasema);
        console.log(lyhinetaisyys);
        callback(data);

        //KESKEN - kaivetaan tieto ulso 
        var closestStation = lahinasema;

        var text = document.createTextNode(`Tama:" ${closestStation}`);
        liElement.appendChild(text);

    });
}










//Funktio, joka selvittää etäisyyden. Kaksi eri leveys- ja pituusastetta on verrattuna toisiinsa:

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}





/*

$('#buttonForSearch').on('click', function geolocationData(callback){
    
    
    $.get("https://rata.digitraffic.fi/api/v1/train-locations/latest/"+location+"", function(data) {
        $(".result").html(data);
        console.log("Load successful");
        console.dir(data);
        callback(data);
    });
    
    }   
)


*/








//Geolokaatio koordinaatteina, painamalla:

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



