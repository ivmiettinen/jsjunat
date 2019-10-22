var selectedTrain = 1; // train number
var info1 = document.getElementById('trainNo');
var info2 = document.getElementById('category');
var info3 = document.getElementById('type');
var info4 = document.getElementById('depSta');
var info5 = document.getElementById('depTime');
var info6 = document.getElementById('dest');
var info7 = document.getElementById('arrTime');
var optiot = { hour: '2-digit', minute: '2-digit', hour12: false };

$.get("https://rata.digitraffic.fi/api/v1/trains/2017-01-01/" + selectedTrain + "/", function (data) {
    $(".result").html(data);
    console.log("Load successful");
    console.dir(data);
    var jsonData = data;
    var trainNo = jsonData[0].trainNumber;
    var category = jsonData[0].trainCategory;
    var type = jsonData[0].trainType;
    var depSta = jsonData[0].timeTableRows[0].stationShortCode; // HELSINKI
    var lastSta = jsonData[0].timeTableRows.length - 1;
    var dest = jsonData[0].timeTableRows[lastSta].stationShortCode; // LAST STATION
    var depTime = new Date(jsonData[0].timeTableRows[0].scheduledTime).toLocaleTimeString('fi', optiot);
    var arrTime = new Date(jsonData[0].timeTableRows[lastSta].scheduledTime).toLocaleTimeString('fi', optiot);
    
    info1.innerText = `Train number: ${trainNo}`;
    info2.innerText = `Train Category: ${category}`;
    info3.innerText = `Train Type: ${type}`;
    info4.innerText = `Departure Station: ${depSta}`;
    info5.innerText = `Departure Time: ${depTime}`;
    info6.innerText = `Destination: ${dest}`;
    info7.innerText = `Arrival Time: ${arrTime}`;
});
