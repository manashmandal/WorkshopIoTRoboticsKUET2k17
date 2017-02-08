---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<div id="instruction_guide">
</div>

# Worshop Preparation Guide

Before attending the workshop, you **MUST** prepare the required environment, **OTHERWISE YOU CAN NOT ATTEND THE WORKSHOP.**

If any problem occurs during installing the required softwares please contact to instructors **BEFORE** the workshop.


# Required softwares

* Python 3
* Flask Library
* Jinja2 Template Engine
* Arduino IDE
* PyCharm IDE
* RealTerm Serial/TCP Terminal Emulator

## Installation instructions

The instructions are given assuming you’re all Windows OS users, if you need an instruction for Ubuntu / Linux distros as well; please let the instructors know.

*[Disclaimer: If you’re a Python 2 user and reluctant to change it, I’d suggest you to modify the codes corresponding to your python version]*

1. Python 3

Download Python 3 [from here]() and install using administrative privilege. Make sure you’ve ticked the option where it says that it will add python to the environment variable.

#### How to check if python is added to the path or not:

Open a command window, and enter the following command

```python
python --version
```

If something like this shows up, then you’ve successfully configured python.

```
Python 3.5.2
```

#### Troubleshooting

If python version doesn’t appear at the console then **check if python has been added to the PATH variable or not.** 
There are a lot of ways to solve the problem. One way is by just googling.


# 2. Flask library

Flask is a simple Python based micro-framework for developing web applications. [If you don’t understand what I’m saying, don’t need to worry, I’ll clear everything before diving deeper] 

Open a command window with administrative privilege [or open a command window as admin (Run As Admin)]

Enter the following command

```
pip3 install flask
```

This will automatically download and install flask.

# 3. Jinja2 Templating Framework

Enter the following command (yes in a command window with administrative privilege)

```
pip3 install jinja2
```


# 4. Arduino IDE

Collect the latest Arduino IDE and install it on your computer from here.

#### Make sure:

> Your Arduino Device is working with the IDE properly.

# 5. PyCharm Python IDE

Download and install the [PyCharm IDE from here](https://www.jetbrains.com/pycharm-edu/download/#section=windows-version). 

# 6. RealTerm Serial Terminal Emulator
Download and install RealTerm, [from here](https://sourceforge.net/projects/realterm/).