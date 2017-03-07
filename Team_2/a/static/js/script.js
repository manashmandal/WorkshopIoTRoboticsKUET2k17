//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var sensor_names = [];
    var sensor_values = [];
    var hours = [];


    // Getting Sensor Name 
    $(".sensor_name").each(function() {
        sensor_names.push($(this).text());
    });

    // Getting sensor value
    $(".sensor_value").each(function() {
        sensor_values.push($(this).text());
    });

    // Getting time in hour
    $(".hour").each(function() {
        hours.push($(this).text());
    });

    len = sensor_names.length;

    // Data array 
    var sensor_data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        sensor_data.push({
            "hour": +hours[i],
            "sensor_name": sensor_names[i],
            "sensor_value": +sensor_values[i]
        });
    }

    // Finally creating visualization
    var visualization = d3plus.viz()
        .container("#viz")
        .data(sensor_data)
        .type("line")
        .id("sensor_name")
        .text("Name of the Sensor")
        .y("sensor_value")
        .x("hour")
        .shape({
            "interpolate": "basis"
        })
        .draw();
});