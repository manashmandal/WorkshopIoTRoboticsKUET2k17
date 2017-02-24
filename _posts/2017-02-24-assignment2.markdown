---
layout: post
title: Assignment 2
---

# Make a Voice Controlled Robot 

Since we have demonstrated how we made an android-bluetooth controlled robot which can be controlled by `button-press` or based on the `accelerometer` reading of an android phone. Your task is to make a `Voice Controlled` robot.

# Tasks at a glance 

1. Assemble the `4WD` Chassis 
2. Prepare circuitry 
3. Upload the given code [modify if needed]
4. Test The Robot using `Serial Monitor` of Arduino IDE 
5. [Download and install this Voice Recognition App for your Android Phone from the URL](https://play.google.com/store/apps/details?id=robotspace.simplelabs.amr_voice){:target="_blank"} 
6. Change `Arduino Code` according to the App
7. Run the bot 



***

# Task 1 : Assembling the 4WD Chassis 

Use this video as a guide to assemble the chassis. 

[![How to assemble 4WD Chassis](http://img.youtube.com/vi/uW8YVcBjPGU/0.jpg)](https://www.youtube.com/watch?v=uW8YVcBjPGUHow  "to Assemble a 4WD Chassis")

***

# Task 2 : Prepare the circuitry 

We will be needing the following components to build the robot 

* The 4WD Chassis 
* One L298N Motor Driver 
* An Arduino 
* HC-05 Bluetooth Module 
* 7.4V Lipo Battery
* Jumper Wires

## Circuit Diagram 


Connect everything according to the diagram. 

![ckt](http://i.imgur.com/4tohdHg.png){:width="100%"}

***

# Task 3 : Uploading the given code 

You don't need to change this code for `Task 4`. But YOU MUST change it for later given tasks.

```
///// DONT CHANGE UPTO NEXT CHECKPOINT ///////
#include <SoftwareSerial.h>
#define RX 10
#define TX 11
#define BAUD 9600

SoftwareSerial Bluetooth(RX, TX);

//Connect the motor pins to PWM pins of arduino
#define left_pin_1 3
#define left_pin_2 5

#define right_pin_1 6
#define right_pin_2 9


void set_motors(int lspeed, int rspeed)  
{  
    //Forward [lspeed > 0, rspeed > 0 || Stop [if lspeed == rspeed == 0]  
    if (lspeed >= 0 && rspeed >= 0)  
    {  
        analogWrite(left_pin_1, lspeed);  
        digitalWrite(left_pin_2, LOW);  
  
        analogWrite(right_pin_1, rspeed);  
        digitalWrite(right_pin_2, LOW);  
    }  
      
    // Right || Clockwise rotation  
    else if (lspeed >= 0 && rspeed < 0)  
    {  
        //Converting rspeed to positive  
        rspeed = -rspeed;  
          
        analogWrite(left_pin_1, lspeed);  
        digitalWrite(left_pin_2, LOW);  
          
        digitalWrite(right_pin_1, LOW);  
        analogWrite(right_pin_2, rspeed);  
    }  
  
    // Left || Anticlockwise rotation  
    else if (lspeed < 0 && rspeed >= 0)  
    {  
        lspeed = -lspeed;  
  
        digitalWrite(left_pin_1, LOW);  
        analogWrite(left_pin_2, lspeed);  
  
        analogWrite(right_pin_1, rspeed);  
        digitalWrite(right_pin_2, LOW);  
    }  
  
    //Backward   
    else  
    {  
        lspeed = -lspeed;  
        rspeed = -rspeed;  
  
        analogWrite(left_pin_2, lspeed);  
        digitalWrite(left_pin_1, LOW);  
  
        analogWrite(right_pin_2, rspeed);  
        digitalWrite(right_pin_1, LOW);  
    }  
}  


void setup() 
{
  //Setting the motor pins as output
  Bluetooth.begin(BAUD);
  Serial.begin(BAUD);
  pinMode(left_pin_1, OUTPUT);
  pinMode(left_pin_2, OUTPUT);
  pinMode(right_pin_1, OUTPUT);
  pinMode(right_pin_2, OUTPUT);
}

///----------------- CHECKPOINT - CHANGE BELOW THIS CHECKPOINT ------------------------

int default_speed = 150;

void loop() 
{
  // This code is for test purpose, you MUST Change it when you're using with the ANDROID APP 
  if (Bluetooth.available() > 0){
    char incomingByte;

    // Read the incoming byte
    incomingByte = Bluetooth.read();

    // If the read character is 'w' go forward
    if (incomingByte == 'w')
    {
      set_motors(default_speed, default_speed);
    } 

    // Else stop the motors
    else 
    {
      set_motors(0, 0);
    }
  }
}

```

[The code can also be found here.](){:target="_blank"}

***

# Task 4 : Testing the Code using `Serial Monitor` of Arduino IDE

* Connect the HC-05 With your laptop [using 1234 as the pins]
* Find out the `COM` Port of the bluetooth module [Check Device Manager]
* Open the Arduino IDE, select that `COM` port from `Tools > Port` 
* Open the `Serial Monitor`. 
* Don't forget to set the BAUD rate `9600` 
* Write `w` and click `Send` to write the data in the serial port 
* Observe, if nothing happens check the connections and restart Arduino; start from step 2 

***

# Task 5 : 

[Download this android application and install it in your android phone.](https://play.google.com/store/apps/details?id=robotspace.simplelabs.amr_voice)

You can check out the `Resources` section to find out in which `format` the data are being sent `from Android to Arduino`. 

> By studying the received commands you can modify the code in a way that if someone says `Forward` in the app the robot starts to move forward. If someone says `Backward` it should go backword and for unrecognized words the robot should stop. 

***

# Task 6 : Changing the Arduino Code According to the app 

Since the application sends data in a specific format you have to change the code, so that your bot can perform actions according to those commands. 

***

# Task 7 : Run the bot 

You should run the bot and give a simple demonstration on how you did it. If possible, make a video.

***

# Resources 

1. [How to control LED of an Arduino by Voice Recognition API of an Android Phone](http://www.instructables.com/id/Voice-Activated-Arduino-Bluetooth-Android/){:target="_blank"}