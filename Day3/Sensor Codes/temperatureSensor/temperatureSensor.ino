int temp_sensor = A0;
float reading = 0;
void setup()
{
	Serial.begin(9600);
}
void loop()
{
  //Converting reading into degree celcius
	reading = analogRead(temp_sensor)*0.48875855;
	Serial.print("Current Temperature: ");
	Serial.println(reading);
	delay(300);
}
