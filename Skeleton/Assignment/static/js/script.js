// create list of node positions
var positions = [
        { "name": "alpha", "x": 10, "y": 4 },
        { "name": "beta", "x": 12, "y": 24 },
        { "name": "gamma", "x": 17, "y": 14 }
    ]
    // create list of node connections
var connections = [
        { "source": "alpha", "target": "beta" },
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
}, 2000)