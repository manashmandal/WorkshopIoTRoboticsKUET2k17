//Getting data from table and visualize it 
$(document).ready(function() {
    var variable = '';

    var len = 0;

    var names = [];
    var xpos = [];
    var ypos = [];
    var targets = [];

    //Getting name 
    $(".name").each(function() {
        names.push($(this).text());
    });

    // Getting x position
    $(".xpos").each(function() {
        xpos.push($(this).text());
    });

    // Getting y position
    $(".ypos").each(function() {
        ypos.push($(this).text());
    });

    // Getting target 
    $(".target").each(function() {
        targets.push($(this).text());
    });


    len = names.length;

    //Position and connection arrray 
    var positions = [];
    var connections = [];

    for (var i = 0; i < len; i++) {
        positions.push({
            "name": names[i],
            "x": +xpos[i],
            "y": +ypos[i]
        });

        connections.push({
            "source": names[i],
            "target": targets[i]
        });
    }

    console.log(positions);

    if (len > 0) {
        var visualization = d3plus.viz()
            .container("#viz")
            .type("network")
            .nodes(positions)
            .edges(connections)
            .id("name")
            .draw();
    } else {
        $("#viz").html("</br><h1>Enter data to see visualization</h1>");
    }
});