var selectedTrain = 1;

$.get("https://rata.digitraffic.fi/api/v1/trains/2017-01-01/"+selectedTrain+"/", function(data) {
    $(".result").html(data);
    console.log("Load successful");
    console.dir(data);
});

module.exports = selectedTrainData;