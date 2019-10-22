var startStation = "HKI";
var endStation = "TPE";

$.get("http://rata.digitraffic.fi/api/v1/live-trains/station/"+startStation+"/"+endStation+"/", function(data) {
    $(".result").html(data);
    console.log("Load successful");
    console.dir(data);
});

module.exports = junaData;