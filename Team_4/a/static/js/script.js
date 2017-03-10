//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var sensors = [];
    var years = [];
    var values = [];


    // Getting Sensor Name 
    $(".s").each(function() {
        sensors.push($(this).text());
    });

    // Getting sensor value
    $(".v").each(function() {
        values.push($(this).text());
    });

    // Getting year 
    $(".y").each(function() {
        years.push($(this).text());
    });

    len = sensors.length;

    // Data array 
    var data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        data.push({
            "sensor": sensors[i],
            "value": +values[i],
            "year": +years[i]
        });
    }

    // instantiate d3plus
    var visualization = d3plus.viz()
        .container("#viz") // container DIV to hold the visualization
        .data(data) // data to use with the visualization
        .type("stacked") // visualization type
        .id("sensor") // key for which our data is unique on
        .text("sensor") // key to use for display text
        .y("value") // key to use for y-axis
        .x("year") // key to use for x-axis
        .time("year") // key to use for time
        .draw(); // finally, draw the visualization!
});