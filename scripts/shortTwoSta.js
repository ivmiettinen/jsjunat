
var optiot = { hour: '2-digit', minute: '2-digit', hour12: false };

//Henkilön syöttämät asemat:
$('#buttonForSearch').on('click', function () {

    var departure = $('#start').val();
    var arrival = $('#end').val();

    var depSta;
    var destSta;

    $.ajax({
        url: staName(departure, arrival, function (staArr) {
            for (i = 0; i < staArr.length; i++) {
                if (departure.substring(0, 5) === staArr[i].stationName.substring(0, 5) && staArr[i].passengerTraffic === true) {
                    console.log(staArr[i].stationName);
                    console.log(staArr[i].stationShortCode);
                    depSta = staArr[i].stationShortCode;
                }
                if (arrival.substring(0, 5) === staArr[i].stationName.substring(0, 5) && staArr[i].passengerTraffic === true) {
                    console.log(staArr[i].stationName);
                    console.log(staArr[i].stationShortCode);
                    destSta = staArr[i].stationShortCode;
                }
            }
        }),
        success: function () {
            junaData(depSta, destSta, function (nextTrainsArr) {
                for (i = 0; i < nextTrainsArr.length; i++) {
                    var liElement = document.createElement('li');

                    var trainNumber = nextTrainsArr[i].trainNumber;
                    var depDate = nextTrainsArr[i].departureDate;
                    var lastSta = nextTrainsArr[i].timeTableRows.length - 1;
                    var dest = nextTrainsArr[i].timeTableRows[lastSta].stationShortCode;
                    var depTime = new Date(nextTrainsArr[i].timeTableRows[0].scheduledTime).toLocaleTimeString('fi', optiot); //muuta myöhemmin
                    var arrTime = new Date(nextTrainsArr[i].timeTableRows[lastSta].scheduledTime).toLocaleTimeString('fi', optiot);

                    var text = document.createTextNode(`Commuter: ${trainNumber}, Lähtee: ${depTime} ------ Pääteasema: ${dest}, Saapuu: ${arrTime}`);
                    liElement.appendChild(text);
                    document.getElementById('nextTrains').appendChild(liElement);
                }
                console.log(nextTrainsArr);
            });
        }
    })

    console.log("ButtonForSearch klik");
});
