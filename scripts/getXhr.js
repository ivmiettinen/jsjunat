
function getTrain(departure, destination){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    var jsonObject = JSON.parse(xhr.responseText);
    console.dir(jsonObject);
}
xhr.open("GET","http://rata.digitraffic.fi/api/v1/live-trains/station/"+departure+"/"+destination);
xhr.send();
}