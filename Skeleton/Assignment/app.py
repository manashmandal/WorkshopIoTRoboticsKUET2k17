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

name = "Your Name"

@app.route('/')
def home():
    return render_template('welcome.html', name=name)


# Visit this route to see vizualization
@app.route('/viz')
def viz():
    return render_template('plot.html', name=name)


# Change this code snippet 
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

    return render_template('view_data.html', data_list=values)


# View data table 
@app.route('/view_data')
def view_data():
    return render_template('view_data.html', data_list=values)


# Visiting this route will reset data 
@app.route('/reset')
def reset_data():
    global data_count
    global values 

    data_count = 0

    values = []
    return redirect(url_for('view_data', data_list=values))