
 function junaData(startStation, endStation, callback){
//startStation = "HKI";

$.get("https://rata.digitraffic.fi/api/v1/live-trains/station/"+startStation+"/"+endStation+"/", function(data) {
    $(".result").html(data);
    console.log("Load successful");
    console.dir(data);
    callback(data);
});

}   


