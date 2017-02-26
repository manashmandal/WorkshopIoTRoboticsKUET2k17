var five = require('johnny-five');
var requestify = require('requestify');

var board = new five.Board({ port: "COM3" });
var roll = '1203043';
var batch = '2k12';
var ledpin = 13;

var success = false;

//Enter roll and batch 
requestify.get('http://webwork.manash.me/esp8266.php?apples=' + batch + '&oranges=' + roll).then(function(response) {
    response.getBody();
    console.log(response.body);
    var pos = response.body.search('SUCCESS');
    if (pos >= 0) {
        success = true;
    }
});

board.on('ready', function() {
    var led = new five.Led(ledpin);
    if (success) {
        led.blink(500);
    }
});