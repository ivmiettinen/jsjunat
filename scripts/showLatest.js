

$(function(){
    var printJuna = $('#showTrainDiv');
    $('<div></div>')
                .appendTo('body')
                .insertAfter('h1')
                .attr('id', 'showTrainDiv');
    $('<button></button>')
                    .appendTo('body')
                    .insertAfter('h1')
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

