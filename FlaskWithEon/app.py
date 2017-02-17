from flask import Flask, render_template, request

app = Flask(__name__)

sensorvalue = 50

@app.route('/')
def home():
    return render_template('graph.html', sensor_value=sensorvalue)

# @app.route('/<int:sensor_value>')
# def send_value(sensor_value):
#     return render_template('graph.html', sensor_value=sensor_value)

sensorvalue = 0
@app.route('/send_value', methods=['GET'])
def send_value():
    global sensorvalue
    a = request.args.get('a')
    sensorvalue = a 
    print("The value is : " + a)
    return sensorvalue

