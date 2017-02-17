from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('graph.html')

# @app.route('/<int:sensor_value>')
# def send_value(sensor_value):
#     return render_template('graph.html', sensor_value=sensor_value)

@app.route('/send_value', methods=['GET'])
def send_value():
    a = request.args.get('a')
    return render_template('graph.html', sensor_value=a)

