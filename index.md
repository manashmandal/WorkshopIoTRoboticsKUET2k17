---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<div id="instruction_guide">
</div>

# Worshop Preparation Guide
---

<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title"><p>Before attending the workshop</p></h3>
  </div>
  <div class="panel-body">
  <p>
    You <b>MUST</b> prepare the required environment, <b>OTHERWISE YOU CAN NOT ATTEND THE WORKSHOP.</b>

If any problem occurs during installing the required softwares please contact to instructors <b>BEFORE</b> the workshop.</p>
  </div>
</div>

<br/>


# Required software
---

* Python 3
* Flask Library
* Jinja2 Template Engine
* Arduino IDE
* PyCharm IDE
* RealTerm Serial/TCP Terminal Emulator
* MATLAB
* Visual Studio Code [Code Editor]
* NodeJs [For Jhonny-Five Framework]

<br/>

## Installation instructions
---

The instructions are given assuming you’re all Windows OS users, if you need an instruction for Ubuntu / Linux distros as well; please let the mentors know.

> *[Disclaimer: If you’re a Python 2 user and reluctant to change it, I’d suggest you to modify the codes corresponding to your python version]*

<br/>

# 1. Python 3
---

Download Python 3 [from here](https://www.python.org/downloads/release/python-360/){:target="_blank"} and install using administrative privilege. Make sure you’ve ticked the option where it says that it will add python to the environment variable.

### How to check if python is added to the path or not:

Open a command window, and enter the following command

```python
python --version
```

If something like this shows up, then you’ve successfully configured python.

```
Python 3.X.X
```

> Nota Bene: The major version should be `3`, minor version doesn't matter.

### Troubleshooting

If python version doesn’t appear at the console then **check if python has been added to the PATH variable or not.** 
There are a lot of ways to solve the problem. One way is by just googling.

## [Read this post if you can't install python ]({{ site.baseurl }}/2017/02/19/python-installation.html)

After installing Python proceed to next steps.

<br/>


# 2. Flask library
---

Flask is a simple Python based micro-framework for developing web applications. [If you don’t understand what I’m saying, don’t need to worry, I’ll clear everything before diving deeper] 

Open a command window with administrative privilege [or open a command window as admin (Run As Admin)]

Enter the following command

```
pip3 install flask
```

If that doesn't work try this one, 

```
pip install flask 
```

This will automatically download and install flask.

<br/>

# 3. Jinja2 Templating Framework
---

Enter the following command (yes in a command window with administrative privilege)

```
pip3 install jinja2
```

Again if that doesn't work, try this one 

```
pip install jinja2
```

<br/>


# 4. Arduino IDE
---

Collect the latest Arduino IDE and install it on your computer [from here](https://www.arduino.cc/en/main/software){:target="_blank"}.

### Make sure:


> Your Arduino Device is working with the IDE properly.


<br/>

# 5. PyCharm Python IDE
---

Download and install the [PyCharm IDE from here](https://www.jetbrains.com/pycharm-edu/download/#section=windows-version){:target="_blank"}. 

<br/>

# 6. RealTerm Serial Terminal Emulator
---
Download and install RealTerm, [from here](https://sourceforge.net/projects/realterm/){:target="_blank"}.

# 7. Visual Studio Code 
---
Download and install [Visual Studio Code from here.](https://code.visualstudio.com/){:target="_blank"}

<br/>

# 8. NodeJs
---
Depending on your processor architecture(x86/x64) and OS(Windows/Linux) download the corresponding node installer from [here](https://nodejs.org/en/download/){:target="_blank"} then install it using default settings with administrative privilege. 

If your pc configuration (highlighted) is something like this, ![pc_config](http://i.imgur.com/4M77IAq.png)

You can download directly the application [from here](https://nodejs.org/dist/v6.9.5/node-v6.9.5-x64.msi){:target="_blank"} then install it on your pc.

# What you *MUST* bring at the workshop!
---

* A laptop with **WORKING WIFI DEVICE, LAPTOP CHARGER** and a **MULTIPLUG**
* If possible bring a **MODEM** too
* Personal **Arduino**
* Any components you'd like to share

<br/>

# Reading Materials 
---

Studying this materials will be helpful for participating the workshop.

1. [How Web Works](https://medium.freecodecamp.com/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c?source=bookmarks---------1----------){:target="_blank"}
2. [Arduino Bangla Book](https://arduino.howtocode.com.bd/){:target="_blank"}
3. [Python Bangla Book](https://python.howtocode.com.bd/){:target="_blank"}

# Workshop Outline 
---

> **Outline will be updated from time to time** 

| | Topic | Track | Date | Supplementary Code | Slide/Note |
|-|-------|-------|------|--------------------|------------|
|1| Introduction to Robotics | `Beginner` | 19-Feb | [Day 1](https://bit.ly/workshop_day1) | [Online](https://docs.google.com/presentation/d/18Alf93NKGcMXbftRxnuWWMisbaGKnQLYVCYqdjeK1z4/edit) [PDF](https://github.com/manashmndl/WorkshopIoTRoboticsKUET2k17/raw/slides/Day1/BasicRobotics.pdf) | 
|2| Interfacing Motors using Arduino | `Beginner` | 19-Feb | [Day 1](https://bit.ly/workshop_day1) | [Online](https://docs.google.com/presentation/d/1Q9fRW2okzeDwe-klD8H2JJ-3PM1U5JSh2I1XWY-rvRg/edit?usp=sharing) [PDF](https://github.com/manashmndl/WorkshopIoTRoboticsKUET2k17/raw/slides/Day1/MotorGuide.pdf) |
|3| A Guide to LiPo Batteries and Chargers | `Beginner` | 19-Feb | N/A | [Online](https://docs.google.com/presentation/d/1jzMDnAQyjwzWUmop2uBjourhqB4ZsuRFzjQfoD8NZws/edit?usp=sharing) [PDF](https://github.com/manashmndl/WorkshopIoTRoboticsKUET2k17/raw/slides/Day1/AGuideToLiPoBatteries.pdf) |
|4| Dissection of Arduino & How to power 'em Up | `Beginner` | 19-Feb | N/A | [Online](https://docs.google.com/presentation/d/1GhyBS-c2Z-zAQhNCEq-vcb8Kn6TRZ9VmwUzT0Ydp7jg/edit?usp=sharing) [PDF](https://github.com/manashmndl/WorkshopIoTRoboticsKUET2k17/raw/slides/Day1/DissectionofArduinoHowtoPoweremUp.pdf) | 
|-|Quick refresher on Python 3 | `Intermediate` | | | |
|-| [Getting Started with IoT]({{ site.baseurl }}/2017/02/19/iot-prep-guide.html){:target="_blank"} | `Intermediate` | | | |
|-| Configuring `ESP8266` wtih `Arduino` | `Intermediate` | | | |
|-| Writing a simple web application in `Flask` | `Intermediate` | | | |
|-| Sending sensor value to the web app | `Intermediate` | | | |
|-| Plotting sensor value on the web app | `Intermediate` | | | |
|-| Working with a real server | `Intermediate` | | | |
|-| Getting to know about `MQTT` | `Intermediate` | | | |
|-| Project Distribution | | | | |
|-| Quick Refresher on JavaScript | `Intermediate` | | | |
|-| Introduction to JavaScript Robotics | `Advanced` | | | |
|-| Jhonny-Five Framework Introduction | `Advanced` | | | |
|-| Configuring Arduino with Jhonny-Five | `Advanced` | | | |
|-| IoT with JavaScript, Jhonny-Five & Arduino | `Advanced` | | | |
|-| G-H Filter | `Advanced` | | | |
|-| Data Visualization | `Advanced` | | | |
|-| Machine Learning - The Right Way | `Advanced` | | |
|-| Interesting Projects we are working on | | | | |


<br/>

# Frequently Asked Questions 
---

## 1. Can 2k16 join?

### Answer

> No, workshop of 2k16 will be taken later by 2k15/2k14/2k13.

## 2. I don't know Python programming language, can I join?

### Answer

> There will be a quick refresher on Python language, if you have a good foundation on programming at any language you can surely join. **Studying the reading materials before joining the workshop will definitely smooth your experience at the workshop.**

## 3. I don't know programming, can I join?

### Answer

> NO!

## 4. I don't have any previous experience in embedded systems, can I join?

### Answer

> Sure.

## 5. Can I attend the workshop without configuring the required environment?

### Answer

> A big NO. If you can't configure an environment most likely you're not interested. You can always contact the mentors if  you run into any problems or post on the facebook event.

<br/>
<ul class="nav nav-tabs">
  <li class="active"><a href="#organizer" data-toggle="tab">Organizers</a></li>
  <li><a href="#mentors" data-toggle="tab">Mentors</a></li>
</ul>
<div id="myTabContent" class="tab-content">
  <div class="tab-pane fade active in" id="organizer">
    <h1><a href="http://www.kuet.ac.bd/eee/shamim" target="_blank">Md. Shamim Sarker</a></h1>
    <h2>Lecturer, Department of EEE</h2>

    <p>
 He completed his B.Sc in Electrical and Electronic Engineering from Khulna University and Engineering and Technology (KUET) in 2013. Currently he is working as a lecturer at the same department and pursuing his M.Sc here. His research interest is Carbon and 2-D material based devices. In leisure, he listens music, watches movies and read books, especially Humayun Ahmed. 
    </p>

    <br/>

    <h1>Al-Amin Badal</h1>

    <h2>Department of EEE, 2K11</h2>

    <p>
    He was one of the lead organizers of the largest tech competition event ever happened at KUET-TechFiesta'16. Even after graduation he has been very much active in organizing tech related workshops, maintaining mars rover project. He is also an electronics hobbyist. 
    </p>

  </div>
  <div class="tab-pane fade" id="mentors">
    <h1><a href="http://samiulhaque.net23.net/" target="_blank">Md. Samiul Haque Sunny</a></h1>
    <h2>Department of EEE, 2K12</h2>

    <p>
      Robotics, embedded systems, artifical intelligence, name anything; Sunny has done something on that before. Being a hardware hacker from the first year of his university life, he now also models complicated systems to solve complex problems. He has proficiency in <code>MATLAB, AVR, Arduino, C/C++, Python</code>. He uses Artificial Intelligence on a daily basis to solve domain based problems from Electrical Machines to EEG/EMG analysis by building predictive or generative models. He is also expert in building ensemble machine learning models reinforced with genetic algorithm and general artificial intelligence. In free time he watches movies, plays flute or reads poetry. 
    </p>

    <br/>

    <h1><a href="http://mandal.manash.me" target="_blank">Manash Kumar Mandal</a></h1>
    <h2>Department of EEE, 2K12</h2>

    <p> 
      Manash has been working with embedded systems for 3 years now. He has keen interest in firmware development and linux device driver writing. He is more interested in learning probabilistic programming, bayesian reasoning, gaussian process, inferential statistics and computational statistics, markov chains, hidden markov models, feature engineering, dimensionality reduction algorithms and convex optimization. He knows <code>C/C++, Python, Java, JavaScript, R and a bit of MATLAB</code>. He uses GitHub/git services on a daily basis. Currently he is using deep learning methodologies for solving various problems from Bangla Natural Language Processing to Speech Recognition. In free time he watches movies/tv-series or writes technical articles. He is also an avid reader. 
    </p>
  </div>
</div>
