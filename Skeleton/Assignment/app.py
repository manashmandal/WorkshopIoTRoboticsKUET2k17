from flask import (
                   render_template,
                   Flask, 
                   request, 
                   url_for,
                   redirect
                   )

app = Flask(__name__)

# Variable to hold data without database 
values = []
data_count = 0

_name_ = "Your Name"

@app.route('/')
def home():
    return render_template('welcome.html', name=_name_)


# Change this code snippet 
@app.route('/send_value', methods=['GET'])
def send_value():
    global values 
    global data_count

    name    = request.args.get('name')
    target  = request.args.get('target') 
    x       = request.args.get('x')
    y       = request.args.get('y')
    sn      = request.args.get('#')

    if (name or target or x or y or sn is not None):
        data_count += 1
        temp_dict = {}
        temp_dict['name'] = name
        temp_dict['target'] = target
        temp_dict['x'] = x
        temp_dict['y'] = y
        temp_dict['#'] = data_count
        values.append(temp_dict)

    return render_template('view_data.html', data_list=values, name=_name_)


# View data table 
@app.route('/view_data')
def view_data():
    return render_template('view_data.html', data_list=values, name=_name_)


# Visiting this route will reset data 
@app.route('/reset')
def reset_data():
    global data_count
    global values 

    data_count = 0

    values = []
    return redirect(url_for('view_data', data_list=values))