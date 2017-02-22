int MQ5 = A2;

void setup() {
  pinMode(MQ5,INPUT);
  Serial.begin(9600);
}

void loop() {
  int val = analogRead(MQ5);
  Serial.println(val);
  delay(200);
}
