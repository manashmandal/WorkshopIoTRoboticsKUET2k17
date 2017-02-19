---
layout: post
title: Python Installation Troubleshooting
---

<br/>

# Python Installation Troubleshooting


## Downgrading from Python 3.6 to Python 3.4

If you can't install Python 3.6, download the lower version 3.4 [from this link and install](https://www.python.org/downloads/release/python-340/){:target="_blank"}.

### If you're unsure about which installer to download then follow this instruction

* First of all check out the `Processor Architecture (x86 or x64 bit)`

Here is an example, 

![config](http://i.imgur.com/4M77IAq.png)


* If your system type is `64-bit Operating System, x64-based processor` then just [download this installer and install it in your PC with administrative privilege](https://www.python.org/ftp/python/3.4.0/python-3.4.0.amd64.msi){:target="_blank"}.


* If that doesn't match, [download the installer from here](https://www.python.org/ftp/python/3.4.0/python-3.4.0.msi){:target="_blank"}.

**DO NOT FORGET TO TICK THE OPTION WHERE IT SAYS THE INSTALLER WILL ADD PYHTON TO THE PATH**.

<br/>

# Checking If Python has been installed properly

As usual, open a command window and then enter the following command. 

```
python --version
```

**If it says that it doesn't recognize python then the PATH hasn't been added.**

<br/>

## Adding `Python` and `pip` to the `PATH` Variable 

* Go to Start then type `Edit the system environment variable`, click on it.

<br/>

* Click on `Environment Variable` 
 
![env1](http://i.imgur.com/4idQR4L.png)

<br/>

* Click on `PATH` then edit the `Variable Name` line edit. 

![env2](http://i.imgur.com/mtygt2y.png)

<br/>

* At the end of the line (After `;`) enter the path of python (suppose `C:/User/Python3`) and `C:/User/Python3/Scripts`

So it will look something like this, 

```
;C:/User/Python3;C:/User/Python3/Scripts
```

<br/>

Semicolon works as a separator between the variables.

![env3](http://i.imgur.com/smJVmQi.png)


* Now Open a `cmd` again and check if it recognizes python or not.

<br/> 



