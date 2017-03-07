//Getting data from table 

$(document).ready(function() {
    var variable = '';


    var names = [];
    var xpos = [];
    var ypos = [];
    var targets = [];

    //Getting name 
    $(".name").each(function() {
        names = names.concat($(this).text());
    });

    // Getting x position
    $(".xpos").each(function() {
        xpos = xpos.concat($(this).text());
    });

    // Getting y position
    $(".ypos").each(function() {
        ypos = ypos.concat($(this).text());
    });

    // Getting target 
    $(".target").each(function() {
        targets = targets.concat($(this).text());
    });


    // console.log(names);

    console.log(names);

    // create list of node positions
    var positions = [
            { "name": names[0], "x": 10, "y": 4 },
            { "name": names[1], "x": 12, "y": 24 },
            { "name": names[2], "x": 17, "y": 14 }
        ]
        // create list of node connections
    var connections = [
            { "source": names[0], "target": names[1] },
            { "source": "alpha", "target": "gamma" }
        ]
        // instantiate d3plus
    var visualization = d3plus.viz()
        .container("#viz")
        .type("network")
        .nodes(positions)
        .edges(connections)
        .id("name")
        .draw()
        // After 2 seconds, add another node and connection!
    setTimeout(function() {
        positions.push({ "name": "delta", "x": 26, "y": 21 })
        connections.push({ "source": "beta", "target": "delta" })
        visualization
            .nodes(positions)
            .edges(connections)
            .draw()
    }, 2000);
});