
var optiot = {hour: '2-digit', minute:'2-digit', hour12: false};

$('#buttonForSearch').on('click', function () {

    var departure = $('#start').val();
    var arrival = $('#end').val();

    junaData(departure, arrival, function (nextTrainsArr) {
        for (i=0;i<nextTrainsArr.length;i++){
            var liElement = document.createElement('li');

           
            var lahtoasema = nextTrainsArr[i].timeTableRows[0].stationShortCode;

            var trainNumber = nextTrainsArr[i].trainNumber;
            var depDate = nextTrainsArr[i].departureDate;
            var lastSta = nextTrainsArr[i].timeTableRows.length - 1;
            var dest = nextTrainsArr[i].timeTableRows[lastSta].stationShortCode;
            var depTime = new Date(nextTrainsArr[i].timeTableRows[0].scheduledTime).toLocaleTimeString('fi',optiot); //muuta myöhemmin
            var arrTime = new Date(nextTrainsArr[i].timeTableRows[lastSta].scheduledTime).toLocaleTimeString('fi', optiot);
            
            //stations between main stations:
            var trs=nextTrainsArr[i].timeTableRows;
            var allStationShortCodes = "";
            
            for (var tr of trs){
                allStationShortCodes+=tr.stationShortCode +", ";
                var howManyStations = trs.length;

            }
            console.log(allStationShortCodes);
            //Muutetaan array
            //var parserointi = parseInt(tempstr);
            var text = document.createTextNode(`Commuter: ${trainNumber}, Lähtöasema: ${lahtoasema}, Lähtee: ${depTime}, Väliasemat: ${howManyStations},
            ------ Pääteasema: ${dest}, Saapuu: ${arrTime}, `);
            liElement.appendChild(text);
            document.getElementById('nextTrains').appendChild(liElement);
        }
        console.log(nextTrainsArr);
    });
    console.log("ButtonForSearch clicked");

});








