//Used Arduino Mega2560
// Author: Manash 

var johnny_five = require("johnny-five");
var led_pin = 13;

//Change this COM Port 
var COM = 'COM3';

var arduino = new johnny_five.Board(COM);

arduino.on("ready", function() {
    var led = new johnny_five.Led(led_pin);
    led.blink(500);
});