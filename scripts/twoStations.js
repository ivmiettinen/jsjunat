
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
            
            //stations between:
            var trs=nextTrainsArr[i].timeTableRows;
            var tempstr = "";

           

            for (var tr of trs){
                tempstr+=tr.stationShortCode +", ";
            }
            
            //Muutetaan array
            //var parserointi = parseInt(tempstr);
            

            var text = document.createTextNode(`Commuter: ${trainNumber}, Lähtöasema: ${lahtoasema}, Lähtee: ${depTime}, Väliasemat: ${tempstr.length},
            ------ Pääteasema: ${dest}, Saapuu: ${arrTime}, `);
            liElement.appendChild(text);
            document.getElementById('nextTrains').appendChild(liElement);
        }
        console.log(nextTrainsArr);
    });
    console.log("ButtonForSearch klik");

    


    

    /*
    //Toimiva väliasemahaku:
    var trs=nextTrainsArr[i].timeTableRows;
            var tempstr="";

           

            for (var tr of trs){
                tempstr+=tr.stationShortCode +", ";
            }





    //Väliasemat:
    //stationsBetween {departure, arrival, function (nextTrainsArr) {

    //}

    //var stationsBetween;




    //if (nextTrainsArr[i].trainNumber = 169)
    
    //nextTrainsArr[i].stationShortCode;

   // valiAsemat(nextTrainsArr[i].stationShortCode (nextTrainsArr){
        //for (i=0; i<nextTrainsArr[i].stationShortCode.length; i++)


/*

        { 
            var li = document.createElement('li');

        }
    }

*/


    //     $('<h2></h2>').appendTo('div')
    //     .text(departure + " " + arrival);  


    //     const $nextTrain = $("<li></li>");
    // $("#nextTrains").append($nextTrain);




}

);








