
 function junaData(startStation, endStation){
//startStation = "HKI";

$.get("http://rata.digitraffic.fi/api/v1/live-trains/station/"+startStation+"/"+endStation+"/", function(data) {
    $(".result").html(data);
    console.log("Load successful");
    console.dir(data);
    return data;
});

}   


