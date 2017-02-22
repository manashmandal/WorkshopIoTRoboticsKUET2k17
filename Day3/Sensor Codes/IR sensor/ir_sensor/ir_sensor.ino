int ir = A3;

void setup() {
  pinMode(ir,INPUT);
  Serial.begin(9600);
}

void loop() {
  int val = analogRead(ir);
  Serial.println(val);
  delay(200);
}
