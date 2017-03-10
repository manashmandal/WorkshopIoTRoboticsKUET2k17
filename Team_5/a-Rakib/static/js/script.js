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
            label: "Sensor Value vs Month Plot",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: values,
        }]
    };

    //Finally creating the chart 
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data
    });


});