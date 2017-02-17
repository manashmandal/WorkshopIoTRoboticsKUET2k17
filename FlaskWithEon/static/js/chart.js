var sensor_value = +$("#val").text().split(':')[1];


var pubnub = new PubNub({
    publishKey: 'pub-c-3cfe96eb-4ce9-4cc8-b36e-b6a55f8fcc70',
    subscribeKey: 'sub-c-7a89efca-bb89-11e6-9dca-02ee2ddab7fe'
});
var channel = 'c3-gauge' + Math.random();

eon.chart({
    pubnub: pubnub,
    channels: [channel],
    generate: {
        bindto: '#chart',
        data: {
            type: 'gauge'
        }
    }
});

setInterval(function() {
    pubnub.publish({
        channel: channel,
        message: {
            eon: {
                'Sensor Value': sensor_value
            }
        }
    });
}, 2000);