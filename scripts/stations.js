function staName(dep, dest, callback) {
  $.get('https://rata.digitraffic.fi/api/v1/metadata/stations', function(data) {
    $('.result').html(data);
    console.log("Load 'station info' successful");
    console.dir(data);
    callback(data);
  });
}
