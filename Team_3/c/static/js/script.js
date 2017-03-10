//Getting data from table and visualize it 
$(document).ready(function() {

    //Get chart canvas 
    var ctx = document.getElementById("myChart");

    var len = 0;

    var months = [];
    var values = [];


    // Getting Month Name 
    $(".m").each(function() {
        months.push($(this).text());
    });

    // Getting sensor value
    $(".v").each(function() {
        values.push(+($(this).text()));
    });


    var data = {
        labels: months,
        datasets: [{
            label: "Sensor Values vs Time plot",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: values,
            spanGaps: false,
        }]
    };

    //Finally creating the chart 
    var myLineChart = new Chart(ctx, {
        type: "line",
        data: data
    });


});