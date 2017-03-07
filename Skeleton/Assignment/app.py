from flask import (
                   render_template,
                   Flask, 
                   request, 
                   url_for,
                   redirect
                   )

app = Flask(__name__)

values = []
data_count = 0

name = "Your Name"

@app.route('/')
def home():
    return render_template('welcome.html', name=name)


@app.route('/viz')
def viz():
    return render_template('plot.html', name=name)


@app.route('/send_value', methods=['GET'])
def send_value():
    global values 
    global data_count
    data_count += 1
    temp_dict = {}
    temp_dict['name'] = request.args.get('name')
    temp_dict['target'] = request.args.get('target')
    temp_dict['x'] = request.args.get('x')
    temp_dict['y'] = request.args.get('y')
    temp_dict['#'] = data_count
    values.append(temp_dict)

    return render_template('render_values.html', data_list=values)


@app.route('/view_data')
def view_data():
    return render_template('view_data.html', data_list=values)

@app.route('/reset')
def reset_data():
    data_count = 0
    values = []
    return redirect('view_data')