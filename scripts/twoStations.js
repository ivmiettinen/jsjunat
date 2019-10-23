


//Henkilön syöttämät

$('#buttonForSearch').on('click', function()

{
    var departure = $('#start').val();
    var arrival = $('#end').val();

    junaData(departure, arrival);
 



     
    $('<h2></h2>').appendTo('div')
    .text(departure + " " + arrival);  

    
    
    
               


}

);


//Tietojen nouto palvelimelta:

var xhr = new XMLHttpRequest();







