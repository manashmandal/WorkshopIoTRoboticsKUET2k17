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

_name_ = "Abdullah Al Masud Pranto"

@app.route('/')
def home():
    return render_template('welcome.html', name=_name_)


# Change this code snippet 
@app.route('/send_value', methods=['GET'])
def send_value():
    # Values MUST be a PYTHON LIST OF DICTIONARIES
        # Example, values = [
        # {"name":"your name", "x" : 10, "y" : 10, "target" : "roll"},
        # {"name" : "another" ,  "x" : 30, "y" : 0, "target" : "your name" }
        # 
        # ]
    global values 

    # Increase data_count variable by 1 after each successful insertion 
    # Hint: data_count += 1 
    global data_count

    # Add your GET parameter parsing codes here  


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