from flask import render_template, Flask, request, url_for

app = Flask(__name__)

values = []

@app.route('/')
def home():
    return render_template('welcome.html', name=name)


@app.route('/viz')
def viz():
    return render_template('plot.html', name=name)


@app.route('/send_value', methods=['GET'])
def send_value():
    global values 
    temp_dict = {}
    temp_dict['name'] = request.args.get('name')
    temp_dict['target'] = request.args.get('target')
    temp_dict['x'] = request.args.get('x')
    temp_dict['y'] = request.args.get('y')
    
    values.append(temp_dict)

    return render_template('render_values.html', data_list=values)
