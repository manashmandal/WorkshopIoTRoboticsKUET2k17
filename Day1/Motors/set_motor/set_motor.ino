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
  pinMode(left_pin_1, OUTPUT);
  pinMode(left_pin_2, OUTPUT);
  pinMode(right_pin_1, OUTPUT);
  pinMode(right_pin_2, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:

}
