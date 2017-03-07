//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var names = [];
    var values = [];

    //Getting name 
    $(".name").each(function() {
        names.push($(this).text());
    });

    // Getting x position
    $(".value").each(function() {
        values.push($(this).text());
    });


    console.log(values);

    len = names.length;

    //Position and connection arrray 
    var data = [];

    for (var i = 0; i < len; i++) {
        data.push({
            "name": names[i],
            "value": +values[i],
        });
    }


    var visualization = d3plus.viz()
        .container("#viz")
        .data(data)
        .type("pie")
        .id("name")
        .size("value")
        .draw();

});