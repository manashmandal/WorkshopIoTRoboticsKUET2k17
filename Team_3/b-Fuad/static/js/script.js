//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var sensors = [];
    var values = [];


    // Getting Sensor Name 
    $(".s").each(function() {
        sensors.push($(this).text());
    });

    // Getting sensor value
    $(".v").each(function() {
        values.push($(this).text());
    });


    len = sensors.length;

    // Data array 
    var data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        data.push({
            "sensor": sensors[i],
            "value": +values[i],
        });
    }

    // Finally creating visualization
    var visualization = d3plus.viz()
        .container("#viz")
        .data(data)
        .type({ "mode": "dice" }) // sets the mode of visualization display based on type    
        .id("sensor")
        .size("value")
        .draw();
});