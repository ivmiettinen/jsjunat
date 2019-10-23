
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
                    var trElement = document.createElement('tr');

                    for (j = 0; j < nextTrainsArr[i].timeTableRows.length; j++) {
                        if (depSta === nextTrainsArr[i].timeTableRows[j].stationShortCode && nextTrainsArr[i].timeTableRows[j].type === 'DEPARTURE') {
                            var tdTrainInfo = document.createElement('td');
                            var tdTrainNo = document.createElement('td');
                            var tdDepTime = document.createElement('td');

                            var trainCateg = nextTrainsArr[i].trainCategory;
                            var trainNo = nextTrainsArr[i].trainNumber;

                            var depTime = new Date(nextTrainsArr[i].timeTableRows[j].scheduledTime).toLocaleTimeString('fi', optiot);



                            // var depDate = nextTrainsArr[i].departureDate;
                            // var lastSta = nextTrainsArr[i].timeTableRows.length - 1;
                            // var dest = nextTrainsArr[i].timeTableRows[lastSta].stationShortCode;
                            // var depTime = new Date(nextTrainsArr[i].timeTableRows[0].scheduledTime).toLocaleTimeString('fi', optiot); //muuta myöhemmin
                            // var arrTime = new Date(nextTrainsArr[i].timeTableRows[lastSta].scheduledTime).toLocaleTimeString('fi', optiot);

                            // var text = document.createTextNode(`Junan numero ${trainNumber}, Lähtöaika: ${depTime}`);
                            // tdTrainNo.appendChild(text);
                            tdTrainInfo.innerText = (`${trainCateg}`);
                            tdTrainNo.innerText = (`${trainNo}`);
                            tdDepTime.innerText = (`${depTime}`);

                        }
                        if (destSta === nextTrainsArr[i].timeTableRows[j].stationShortCode && nextTrainsArr[i].timeTableRows[j].type === 'ARRIVAL') {
                            var tdArrTime = document.createElement('td');
                            var arrTime = new Date(nextTrainsArr[i].timeTableRows[j].scheduledTime).toLocaleTimeString('fi', optiot);

                            tdArrTime.innerText = (`${arrTime}`);

                        }
                    }
                    trElement.appendChild(tdTrainInfo);
                    trElement.appendChild(tdTrainNo);
                    trElement.appendChild(tdDepTime);
                    trElement.appendChild(tdArrTime);
                    document.getElementById('schedule').appendChild(trElement);
                }
                console.log(nextTrainsArr);
                var result = document.getElementById('result');
                result.innerText = (`${departure} - ${arrival}`);
            });
        }
    })

    console.log("ButtonForSearch klik");
});
