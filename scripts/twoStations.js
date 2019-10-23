
var optiot = {hour: '2-digit', minute:'2-digit', hour12: false};

//Henkilön syöttämät asemat:

$('#buttonForSearch').on('click', function () {

    var departure = $('#start').val();
    var arrival = $('#end').val();

    junaData(departure, arrival, function (nextTrainsArr) {
        for (i=0;i<nextTrainsArr.length;i++){
            var liElement = document.createElement('li');

            var trainNumber = nextTrainsArr[i].trainNumber;
            var depDate = nextTrainsArr[i].departureDate;
            var lastSta = nextTrainsArr[i].timeTableRows.length - 1;
            var dest = nextTrainsArr[i].timeTableRows[lastSta].stationShortCode;
            var depTime = new Date(nextTrainsArr[i].timeTableRows[0].scheduledTime).toLocaleTimeString('fi',optiot); //muuta myöhemmin
            var arrTime = new Date(nextTrainsArr[i].timeTableRows[lastSta].scheduledTime).toLocaleTimeString('fi', optiot);

            var text = document.createTextNode(`Commuter: ${trainNumber}, Lähtee: ${depTime} ------ Pääteasema: ${dest}, Saapuu: ${arrTime}`);
            liElement.appendChild(text);
            document.getElementById('nextTrains').appendChild(liElement);
        }
        console.log(nextTrainsArr);
    });
    console.log("ButtonForSearch klik");


    //     $('<h2></h2>').appendTo('div')
    //     .text(departure + " " + arrival);  


    //     const $nextTrain = $("<li></li>");
    // $("#nextTrains").append($nextTrain);




}

);


//Tietojen nouto palvelimelta:

var xhr = new XMLHttpRequest();







