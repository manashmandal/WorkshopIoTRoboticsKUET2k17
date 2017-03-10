from flask import (
                   render_template,
                   Flask, 
                   request, 
                   url_for,
                   redirect
                   )



app = Flask(__name__)

parameters = "hour, sensor_value, sensor_name"
image_url = "http://i.imgur.com/fI0ZZxC.png"


# Variable to hold data without database 
values = []
data_count = 0

_name_ = "Mehedi Hasan"

@app.route('/')
def home():
    return render_template('welcome.html', name=_name_, parameters=parameters, image_url=image_url)



"""The parameters are 
    1. h
    2. sn
    3. sv

Which stands for Hour, Sensor Name, Sensor Value 

* Create a dictionary containing the parameters as the given keys, then simply add the corresponding values. 

* So the dictionary MUST contain the following keys [DON'T CHANGE CASE OR SPELLING, KEEP IT AS IT IS]: 
    1. hour
    2. sensor_name
    3. sensor_value
    4. #

* A guide for python dictionary : https://docs.python.org/3.5/tutorial/datastructures.html#dictionaries

* Video Tutorial on python dictionary: 
https://www.youtube.com/watch?v=2j7ox_zqM4g

"""
@app.route('/send_value', methods=['GET'])
def send_value():
    # Values MUST be a PYTHON LIST OF DICTIONARIES
    global values 
    global data_count

    # Increase data_count variable by 1 after each successful insertion 
    # Hint: data_count += 1 
    

    # Implement your GET parameter parsing code here 
    
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