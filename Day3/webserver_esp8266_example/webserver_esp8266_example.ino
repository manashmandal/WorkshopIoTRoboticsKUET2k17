#include <SoftwareSerial.h>
#define baud 115200
#define RX 10
#define TX 11

//Some important punctuations and string constants
String QUOTE_BEGIN = "\"";
String QUOTE_END  = "\"";
String COMMA = ",";
String CARRIAGE_RETURN = "\r";
String NEWLINE = "\n";
String TCP = "TCP";
String PORT = "80";
String WEBSITE = "webwork.manash.me";

//Checking the module
String AT = "AT";

//Resets the module
String AT_RST = "AT+RST";

//Set static ip command
String AT_CIPSTA = "AT+CIPSTA=";

//Send request length
String AT_CIPSEND = "AT+CIPSEND=";

//Connect to a wifi network
String AT_CWJAP = "AT+CWJAP";

//Initiates connection with webserver
String AT_CIPSTART = "AT+CIPSTART=";

String inputString = "";
bool stringComplete = false;

// --------------- DONT CHANGE ANYTHING OUTSIDE THIS SECTION ----------
// ---------- CHANGE THE CODE HERE ---------- 

String wifi_ssid = "404 network unavailable";
String wifi_pass = "12345678";
String roll = "1203046"; // Change roll here
String batch = "2K12"; // Change batch here
String static_ip = "192.168.101.4";
String gateway_ip = "192.168.101.1";
String netmask = "255.255.255.0";

// ----------- DONT CHANGE ANYTHING BELOW THIS SECTION ---- 

//Creating SoftwareSerial object
SoftwareSerial wifi(RX, TX);

void setup() {
  Serial.begin(baud);
  wifi.println(AT + CARRIAGE_RETURN);
  wifi.println(AT_RST + CARRIAGE_RETURN);
  wifi.println("AT+RST\r");
  delay(1000);
  wifi.println("AT+CWMODE=1");
  wifi.begin(baud);
  wifi.setTimeout(1000);

  while(!wifi);

  Serial.println("ESP8266 Demo on Mega2560");

  while(wifi.available() > 0){
    Serial.println(wifi.read());
  }
  
  wifi.println("AT\r");
  Serial.println(wifi.readStringUntil('\n'));

  delay(1000);

  //Set Static IP of the Wifi module [ //wifi.println("AT+CIPSTA=\"192.168.101.4\",\"192.168.101.1\",\"255.255.255.0\"\r"); ]
  wifi.println(AT_CIPSTA + QUOTE_BEGIN + static_ip + QUOTE_END + COMMA + QUOTE_BEGIN + gateway_ip + QUOTE_END + COMMA + QUOTE_BEGIN + netmask + QUOTE_END + CARRIAGE_RETURN);
  
  delay(1000);
  
  // Connect to a wifi hotspot, set the ssid and password according to your pc [wifi.println("AT+CWJAP=\"404 network unavailable\",\"12345678\"\r")]
  wifi.println(AT_CWJAP + QUOTE_BEGIN + wifi_ssid + QUOTE_END + COMMA + QUOTE_BEGIN + wifi_pass + QUOTE_END + CARRIAGE_RETURN);
  
  delay(10000);
}

void loop() {
  //Check at response [wifi.print("AT\r\n");]
  wifi.print(AT + CARRIAGE_RETURN + NEWLINE);
  // put your main code here, to run repeatedly:

  Serial.println(wifi.readStringUntil('\n'));

  delay(100);
  
  //This will establish a TCP [Transmission Control Protocol] with http://webwork.manash.me website [wifi.print("AT+CIPSTART=\"TCP\",\"webwork.manash.me\",80\r\n");]  
  wifi.print(AT_CIPSTART + QUOTE_BEGIN + TCP + QUOTE_END + COMMA + QUOTE_BEGIN + WEBSITE + QUOTE_END + COMMA + PORT + CARRIAGE_RETURN + NEWLINE);

  Serial.println(wifi.readString());

  delay(1000);

  //This will process a get request

  //String get_request = "GET /assignment.php?roll=" + roll + "&batch=" + batch + " HTTP/1.1\r\nHost: webwork.manash.me\r\n\r\n\n";
  String get_request = "GET /assignment.php?roll=" + roll + "&batch=" + batch + " HTTP/1.1" + CARRIAGE_RETURN + NEWLINE + "Host: " + WEBSITE + CARRIAGE_RETURN + NEWLINE + CARRIAGE_RETURN + NEWLINE + NEWLINE;
  int request_length = get_request.length();

  wifi.print(AT_CIPSEND + String(request_length) + CARRIAGE_RETURN + NEWLINE);
  
  delay(1000);
  
  //This will send a GET Request to the url with some parameters
  
  wifi.print(get_request);

  delay(1000);
  
  // Read back response
  if (stringComplete){
    Serial.println(inputString);
    if (inputString.indexOf(roll) >= 0){
      Serial.println("SENT SUCCESSFULLY");
    }
    inputString = "";
    stringComplete = false;
  }
}
