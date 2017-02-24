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



