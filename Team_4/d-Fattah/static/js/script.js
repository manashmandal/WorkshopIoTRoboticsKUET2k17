//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var names = [];
    var skills = [];
    var values = [];



    // Getting Name
    $(".n").each(function() {
        names.push($(this).text());
    });

    // Getting Skill
    $(".s").each(function() {
        skills.push($(this).text());
    });

    // Getting Value
    $(".v").each(function() {
        values.push($(this).text());
    });


    len = names.length;

    // Data array 
    var data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        data.push({
            "name": names[i],
            "skill": skills[i],
            "value": +values[i]
        });
    }

    // sample data array

    var visualization = d3plus.viz()
        .container("#viz")
        .data(data)
        .id(["name", "skill"])
        .size("value")
        .type("radar")
        .draw();
});