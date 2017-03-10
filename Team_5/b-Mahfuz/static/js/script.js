//Getting data from table and visualize it 
$(document).ready(function() {

    //Get chart canvas 
    var ctx = document.getElementById("myChart");

    var len = 0;

    var sensors = [];
    var values = [];


    // Getting Month Name 
    $(".s").each(function() {
        sensors.push($(this).text());
    });

    // Getting sensor value
    $(".v").each(function() {
        values.push(+($(this).text()));
    });


    var data = {
        datasets: [{
            data: values,
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: sensors
    };

    //Finally creating the chart 
    var myBarChart = new Chart(ctx, {
        type: 'pie',
        data: data
    });


});