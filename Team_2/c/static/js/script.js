//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var component_names = [];
    var years = [];
    var price_changes = [];

    // Getting Sensor Name 
    $(".cn").each(function() {
        component_names.push($(this).text());
    });

    // Getting sensor value
    $(".y").each(function() {
        years.push($(this).text());
    });

    // Getting time in hour
    $(".pc").each(function() {
        price_changes.push($(this).text());
    });

    len = component_names.length;

    // Data array 
    var component_data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        component_data.push({
            "component_name": component_names[i],
            "year": +years[i],
            "price_change": +price_changes[i]
        });
    }

    console.log(component_data);

    var visualization = d3plus.viz()
        .container("#viz")
        .data(component_data)
        .type("bar")
        .id("component_name")
        .x({ "stacked": true, "value": "price_change" })
        .y("year")
        .time("year")
        .draw();

});