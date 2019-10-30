
var optiot = { hour: '2-digit', minute: '2-digit', hour12: false };
var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
var trainCounter = 0;

function showDiv() {
    document.getElementById('myTable').style.display = "block";
 }

//Henkilön syöttämät asemat:
$('#buttonForSearch').on('click', function () {

    var scheduleTable = document.getElementById('schedule');
    var result = document.getElementById('twoStations');

    var departure = $('#start').val();
    var arrival = $('#end').val();

    var trueDepSta;
    var trueDestSta;
    var depSta;
    var destSta;

    $.ajax({
        url: staName(departure, arrival, function (staArr) {
            for (i = 0; i < staArr.length; i++) {
                if ((departure === staArr[i].stationName || departure == staArr[i].stationName.match(/^\S*/g)) && staArr[i].passengerTraffic === true) {
                    console.log(staArr[i].stationName);
                    console.log(staArr[i].stationShortCode);
                    trueDepSta = staArr[i].stationName;
                    depSta = staArr[i].stationShortCode;

                    result.innerText = (`${trueDepSta} - ${trueDestSta}`);

                }
                if ((arrival === staArr[i].stationName || arrival == staArr[i].stationName.match(/^\S*/g)) && staArr[i].passengerTraffic === true) {
                    console.log(staArr[i].stationName);
                    console.log(staArr[i].stationShortCode);
                    trueDestSta = staArr[i].stationName;
                    destSta = staArr[i].stationShortCode;

                    result.innerText = (`${trueDepSta} - ${trueDestSta}`);
                }
                if (typeof (depSta) === 'undefined' || typeof (destSta) === 'undefined') {
                    result.innerText = ('Virhe! Haettua asemaa ei löytynyt.');
                }
            }
        }),
        success: function () {
            junaData(depSta, destSta, function (nextTrainsArr) {

                trainCounter++;
                saveSearch(trainCounter);

                for (i = 0; i < nextTrainsArr.length; i++) {
                    var trElement = document.createElement('tr');

                    for (j = 0; j < nextTrainsArr[i].timeTableRows.length; j++) {
                        if (depSta === nextTrainsArr[i].timeTableRows[j].stationShortCode && nextTrainsArr[i].timeTableRows[j].type === 'DEPARTURE') {
                            var tdTrainCateg = document.createElement('td');
                            var tdTrainType = document.createElement('td');
                            var tdTrainNo = document.createElement('td');
                            var tdDepDate = document.createElement('td');
                            var tdDepTime = document.createElement('td');
                            var tdAlert = document.createElement('td');

                            var trainCateg = nextTrainsArr[i].trainCategory;
                            var trainType = nextTrainsArr[i].trainType;
                            var trainNo = nextTrainsArr[i].trainNumber;

                            var depDate = new Date(nextTrainsArr[i].timeTableRows[j].scheduledTime);

                            var depDateFin = new Date(nextTrainsArr[i].departureDate).toLocaleDateString("fi-FI", options);

                            var depTime = new Date(nextTrainsArr[i].timeTableRows[j].scheduledTime).toLocaleTimeString('fi', optiot);

                            var alert = nextTrainsArr[i].timeTableRows[j].cancelled;

                            tdTrainCateg.innerText = (`${trainCateg}`);
                            tdTrainType.innerText = (`${trainType}`);
                            tdTrainNo.innerText = (`${trainNo}`);
                            tdDepDate.innerText = (`${depDateFin}`);
                            tdDepTime.innerText = (`${depTime}`);

                        }
                        if (destSta === nextTrainsArr[i].timeTableRows[j].stationShortCode && nextTrainsArr[i].timeTableRows[j].type === 'ARRIVAL') {
                            var arrDate = new Date(nextTrainsArr[i].timeTableRows[j].scheduledTime);

                            var tdArrTime = document.createElement('td');
                            var arrTime = new Date(nextTrainsArr[i].timeTableRows[j].scheduledTime).toLocaleTimeString('fi', optiot);

                            tdArrTime.innerText = (`${arrTime}`);

                            var date1, date2;

                            date1 = new Date(depDate);
                            date2 = new Date(arrDate);
                            var res = Math.abs(date1 - date2) / 1000;

                            // get total days between two dates
                            var days = Math.floor(res / 86400);
                            // get hours        
                            var hours = Math.floor(res / 3600) % 24;
                            // get minutes
                            var minutes = Math.floor(res / 60) % 60;

                            if (alert === false) {
                                tdAlert.innerText = `${hours} h, ${minutes} min`;
                            } else {
                                tdAlert.innerText = ('PERUTTU');
                            }

                        }
                    }
                    trElement.appendChild(tdTrainCateg);
                    trElement.appendChild(tdTrainType);
                    trElement.appendChild(tdTrainNo);
                    trElement.appendChild(tdDepDate);
                    trElement.appendChild(tdDepTime);
                    trElement.appendChild(tdArrTime);
                    trElement.appendChild(tdAlert);
                    scheduleTable.appendChild(trElement);
                }
                console.log(nextTrainsArr);

            });
            while (scheduleTable.lastChild) {
                scheduleTable.removeChild(scheduleTable.lastChild);
            }

        }
    })

    console.log("ButtonForSearch klik");
});
