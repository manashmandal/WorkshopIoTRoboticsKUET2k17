//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var sources = [];
    var targets = [];
    var strengths = [];


    // Getting Sensor Name 
    $(".s").each(function() {
        sources.push($(this).text());
    });

    // Getting sensor value
    $(".t").each(function() {
        targets.push($(this).text());
    });

    // Getting time in hour
    $(".sn").each(function() {
        strengths.push($(this).text());
    });

    len = sources.length;

    // Data array 
    var data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        data.push({
            "strength": parseFloat(strengths[i]),
            "source": sources[i],
            "target": targets[i]
        });
    }

    // Finally creating visualization
    var visualization = d3plus.viz()
        .container("#viz")
        .type("rings")
        .edges({
            "size": "strength",
            "value": data
        })
        // .focus()
        .draw();
});