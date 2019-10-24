

$(function(){
    var printJuna = $('#showTrainDiv');
    $('<div></div>')
                .appendTo('#showLatest')
                // .insertAfter('#showButton')
                .attr('id', 'showTrainDiv');
    $('<button></button>')
                    .appendTo('#showLatest')
                    .insertBefore('#showTrainDiv')
                    .text('Näytä Viimeisimmät')
                    .attr('id', 'showButton')
                    .on('click', function(){
                        
                        var trainKeys = Object.keys(sessionStorage);
                        $('#showTrainDiv').empty();
                        
                       console.log(trainKeys)
                      for(var i of trainKeys){
                        const trainDataShow = JSON.parse(sessionStorage.getItem(i));
                        
                        console.log(trainDataShow)
                        if (trainDataShow == true) {
    
                            continue;
                        } else {
                            
                            
                            $('<p></p>')
                                    .appendTo('#showTrainDiv')
                                    .attr('class', 'showTrain')
                            .text(`${trainDataShow[0].details.start} -- ${trainDataShow[0].details.end}`);
                        }
                        
                      }
                       
                       
                    })
})

