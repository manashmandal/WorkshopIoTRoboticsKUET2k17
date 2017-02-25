# Imp
from flask import Flask, render_template 

app = Flask(__name__)

@app.route('/say_my_name/<name>')
def say_my_name(name):
    return render_template('name.html', name=name)