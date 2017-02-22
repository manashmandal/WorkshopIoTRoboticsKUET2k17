/* 
 *Sonar sensor:
  Connection:
    Sonar pin  Arduino pin
     Vcc          +5V
     Trig          6
     Echo          7
     Gnd           Ground
 */
#define trig 12
#define echo 11

void setup() {
  Serial.begin(9600);
  pinMode(trig,OUTPUT);
  pinMode(echo,INPUT);
}

void loop() {
 int distance, duaration;
 digitalWrite(trig,HIGH);
 delayMicroseconds(1000);
 digitalWrite(trig,LOW);
 duaration = pulseIn(echo,HIGH);
 distance = (duaration/2)/29.1;
 Serial.print(distance);
 Serial.println(" cm");
 delay (100);
}
