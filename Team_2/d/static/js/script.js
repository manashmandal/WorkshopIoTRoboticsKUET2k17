//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var sensor_names = [];
    var sensor_values = [];
    var hours = [];

    // Getting Sensor Name 
    $(".sn").each(function() {
        sensor_names.push($(this).text());
    });

    // Getting sensor value
    $(".h").each(function() {
        hours.push($(this).text());
    });

    // Getting time in hour
    $(".sv").each(function() {
        sensor_values.push($(this).text());
    });

    len = sensor_names.length;

    // Data array 
    var sensor_data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        sensor_data.push({
            "sensor_name": sensor_names[i],
            "hour": +hours[i],
            "sensor_value": +sensor_values[i]
        });
    }

    console.log(sensor_data);

    var visualization = d3plus.viz()
        .container("#viz")
        .data(sensor_data)
        .type("bar")
        .id("sensor_name")
        .x("hour")
        .y("sensor_value")
        .draw();

});