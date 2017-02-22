///* Two variants of Hall Effect Sensors are avaiable
//Latching HES: Whenever the North pole of a magnet is brought close to it, it remains High 
//untill it gets close to a South pole. These sensors that latch on to a particular state
//are called latched Hall Effect sensors.
//Non-Latching HES: It works in the other way around.
// Sensor Model: SS1350
//*/
//uint8_t LedPin = 13, SensPin = A0;
//void setup()
//{
//    Serial.begin(9600);
//    pinMode(LedPin, OUTPUT);
//    digitalWrite(LedPin, LOW);
//}
//float myVar = 0;
//void loop()
//{
//    myVar = analogRead(SensPin);
//    Serial.println(myVar);
//    if (myVar > 520)
//    {
//        digitalWrite(LedPin, HIGH);
//        Serial.println("Magnet Detected!!!");
//    }
//    else
//    {
//        digitalWrite(LedPin, LOW);
//        Serial.println("No Magnet...");
//    }
//    delay(300);
//}

