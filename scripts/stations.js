
function staName(dep, dest, callback) {

    $.get("https://rata.digitraffic.fi/api/v1/metadata/stations", function (data) {
        $(".result").html(data);
        console.log("Load 'station info' successful");
        console.dir(data);
        callback(data);
    });
}
<<<<<<< HEAD

staName('Pihlajavesi');
staName('Helsinki');
staName('Kilo');
=======
>>>>>>> 0430bf0d56a364fdcac449b928446bd2e9d3fc84
