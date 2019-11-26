$(function() {});

function saveSearch(trainCounter, start, end) {
  console.dir(trainCounter);
  start = $('#start').val();
  end = $('#end').val();
  var details = [{ details: { start: start, end: end } }];
  sessionStorage.setItem(trainCounter, JSON.stringify(details));

  console.log(`Hakusi on talletettu, löydät sen numerolla: ${trainCounter}`);
}
