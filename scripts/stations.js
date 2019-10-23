
function staName(name) {

    $.get("https://rata.digitraffic.fi/api/v1/metadata/stations", function (data) {
        $(".result").html(data);
        console.log("Load 'station info' successful");
        console.dir(data);
        var jsonData = data;
        for (i = 0; i < jsonData.length; i++) {
            if (name.substring(0, 5) === jsonData[i].stationName.substring(0, 5) && jsonData[i].passengerTraffic === true) {
                console.log(jsonData[i].stationName);
                console.log(jsonData[i].stationShortCode);
            }
        }
    });
}

staName('Lahnaslampi');
staName('Helsinki');
staName('Kilo');
