from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Participant 
name = "Name"

values = {}

@app.route('/')
def home():
    return render_template('welcome.html', name=name)


@app.route('/viz')
def viz():
    return render_template('plot.html', name=name)


@app.route('/send_value', methods=['GET'])
def send_value():
    global values 
    values['name'] = request.args.get('name')
    values['target'] = request.args.get('target')
    values['x'] = request.args.get('x')
    values['y'] = request.args.get('y')

    return values['name']
