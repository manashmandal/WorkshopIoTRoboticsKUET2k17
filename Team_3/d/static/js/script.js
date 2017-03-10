//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var years = [];
    var values = [];
    var sensor_names = [];


    // Getting Year 
    $(".y").each(function() {
        years.push(+($(this).text()));
    });

    // Getting sensor value
    $(".v").each(function() {
        values.push(+($(this).text()));
    });

    // Getting sensor names 
    $(".sn").each(function() {
        sensor_names.push($(this).text());
    });


    len = sensor_names.length;

    // Data array 
    var data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        data.push({
            "year": years[i],
            "value": values[i],
            "name": sensor_names[i]
        });
    }

    // instantiate d3plus
    var visualization = d3plus.viz()
        .container("#viz") // container DIV to hold the visualization
        .data(data) // data to use with the visualization
        .type("line") // visualization type
        .id("name") // key for which our data is unique on
        .text("name") // key to use for display text
        .y("value") // key to use for y-axis
        .x("year") // key to use for x-axis
        .draw(); // finally, draw the visualization!
});