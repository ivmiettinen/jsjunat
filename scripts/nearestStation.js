
//Käyttäjän geolokaatio: 

navigator.geolocation.getCurrentPosition(function (position) {
    console.log('Geolocation permissions granted');
    console.log('Latitude:' + position.coords.latitude);
    console.log('Longitude:' + position.coords.longitude);
    findOutTheClosestStation(position.coords.latitude, position.coords.longitude)
});


//Käyttäjää lähimpänä olevan aseman haku:  



function findOutTheClosestStation(lat, long) {
    $.get("https://rata.digitraffic.fi/api/v1/metadata/stations", function (data) {
        console.dir(data);
        var closestStation;
        var minimumDistance = 1000000;
        for (let station of data) {
            let distance = getDistanceFromLatLonInKm(lat, long, station.latitude, station.longitude)
            //console.log(etaisyys);
            if (distance < minimumDistance) {
                minimumDistance = distance;
                closestStation = station;


            }

        }
        console.dir(closestStation);
        console.log(minimumDistance);



        //Esitellään lähin juna-asema ja etäisyys sinne, tuodaan tietojan HTML-puolelle:
        var yourClosestStation = closestStation.stationName;
        var distanceToClosestStation = minimumDistance.toFixed(2);


        

        document.getElementById("start").value = closestStation.stationName;
       

        var pElement = document.createElement('p');

        var text = document.createTextNode(`Sinun lähin juna-asemasi on:  ${yourClosestStation} . Etäisyys sinne on ${distanceToClosestStation} kilometriä. `);
        pElement.appendChild(text);
        document.getElementById('nearestStation').appendChild(pElement);

    });
}



//Funktio, joka laskee etäisyyden. Kaksi eri leveys- ja pituusastetta on verrattuna toisiinsa:

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





