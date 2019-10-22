var selectedTrain = 1;
var info = document.getElementById('trainInfo');
var optiot = { hour: '2-digit', minute: '2-digit', hour12: false };

$.get("https://rata.digitraffic.fi/api/v1/trains/2017-01-01/" + selectedTrain + "/", function (data) {
    $(".result").html(data);
    console.log("Load successful");
    console.dir(data);
    var jsonData = data;
    var trainNo = jsonData[0].trainNumber;
    var lastSta = jsonData[0].timeTableRows.length - 1;
    var dest = jsonData[0].timeTableRows[lastSta].stationShortCode;
    var depTime = new Date(jsonData[0].timeTableRows[0].scheduledTime).toLocaleTimeString('fi', optiot);
    var arrTime = new Date(jsonData[0].timeTableRows[lastSta].scheduledTime).toLocaleTimeString('fi', optiot);

    info.innerText = `Train number: ${trainNo}, Departure Time: ${depTime}, Destination: ${dest}, Arrival Time: ${arrTime}`;
});

module.exports = selectedTrainData;