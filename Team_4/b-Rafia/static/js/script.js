//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var times = [];
    var speeds = [];
    var persons = [];


    // Getting Time
    $(".t").each(function() {
        times.push($(this).text());
    });

    // Getting speed
    $(".s").each(function() {
        speeds.push($(this).text());
    });

    // Getting person
    $(".p").each(function() {
        persons.push($(this).text());
    });

    len = persons.length;

    // Data array 
    var data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        data.push({
            "time": +times[i],
            "speed": +speeds[i],
            "person": persons[i]
        });
    }

    // sample data array

    var visualization = d3plus.viz()
        .container("#viz") // container DIV to hold the visualization
        .data(data) // data to use with the visualization
        .type("scatter") // visualization type
        .id("person") // key for which our data is unique on
        .x("time") // key for x-axis
        .y("speed") // key for y-axis
        .draw(); // finally, draw the visualization!
});