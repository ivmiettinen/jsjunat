

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
                        // function allStorage() {

                        //     var values = [],
                        //         keys = Object.keys(sessionStorage),
                        //         i = keys.length;
                        
                        //     while ( i-- ) {
                        //         values.push( sessionStorage.getItem(keys[i]) );
                        //     }
                        
                        //     return values;
                        // }
                        var trainKeys = Object.keys(sessionStorage);
                       // var showTrain = sessionStorage.getItem(trainKey);
                       
                        
                       console.log(trainKeys)
                      for(var i of trainKeys){
                        const trainDataShow = JSON.parse(sessionStorage.getItem(i));
                        // console.log(i)
                        // console.log(i[0])
                        //console.log(i[0].details.start)
                        console.log(trainDataShow)
                        if (trainDataShow == true) {
                            $('#showTrainDiv').empty();
                            continue;
                        } else {
                            
                            //console.log("log 2"+ trainDataShow[0].details.start)
                            
                            $('<p></p>')
                                    .appendTo('#showTrainDiv')
                                    .attr('class', 'showTrain')
                            .text(`${trainDataShow[0].details.start} -- ${trainDataShow[0].details.end}`);
                        }
                        
                      }
                        // console.log("log 1"+showTrain)
                        // console.log("log 3"+ trainLook)

                       
                    })
})

