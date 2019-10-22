var startStation;
var endStation;

$.get("http://rata.digitraffic.fi/api/v1/live-trains/station/"+startStation+"/"+endStation+"/", function(data) {
    $(".result").html(data);
    console.log("Load successful");
});

module.exports = junaData;