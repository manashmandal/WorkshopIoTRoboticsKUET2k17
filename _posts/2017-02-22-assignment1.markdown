---
layout: post
title: Assignment 1 
---

# Assignment 1 : Send Data to a webserver via `Arduino` and `ESP8266`

## Tasks at a glance 

1. Start a Hotspot [Which MUST share internet]
2. Acquaire IP, Gatway IP and Netmask
3. Connect Arduino with ESP8266 
4. Code modification and upload
5. View result 
6. Troubleshooting

## Task (a) : Start A Hotspot from your Laptop/PC

You can use applications such as [Baidu Wifi hotspot](http://www.pcfaster.com/en/lp/wifiPopularize.php?from=nav){:target="_blank"}. There are a ton of resources to do that. Remember starting hotspot then using it from an android phone? Instead of an android phone we are going to use an Arduino with an ESP8266 module.

<br/>

## Task (b) : Acquaire IP, Gateway IP and Netmask

Open command window from start `cmd` or writing `Command Prompt` in start menu. Then enter the following command to view the network config of your pc. 


```
ipconfig /all
```

The response will contain the required information. 

### Here's a screenshot 

![ip](http://i.imgur.com/O2C8Gm0.png)

## What are the important info?

### Getting `Gateway IP`

Go to the section where it says `Wireless LAN adapter Local Area Connection` there might be some numbers attached to it but we will ignore those. 

We will be using `IPv4 Address` as our `Gateway IP` of the code [given below]. 

**Since we need to connect our device in the same network we MUST assign a `static ip` to the ESP8266 module.**

From the above example, 

```
Gateway IP = 192.168.101.1 
```

To do that, *change the last digit* of the `Gateway IP` but make sure that number is between `2-254` and **no other devices are connected at that time.** 

<br/>

### Getting `Static IP` 

So the `Static IP` of the `ESP8266` module will be [from the above example as well, you may chose any number between `2-254`]

```
Static IP = 192.168.101.4
```
<br/>


### Getting `Netmask`

The netmask part is straightforward, you can directly get that from the prompt, you can see that the netmask from the screenshot is, 

```
Netmask = 255.255.255.0
```

## Task (c) : Connecting `Arduino` with `ESP8266` 

Use the following circuit diagram to make the connections.

![ESP8266](http://i.imgur.com/uZjsWjd.png)

![ESP8266_with_arduino](http://i.imgur.com/0G7urQb.png){:width="100%"}

(Right click and open in new tab for viewing in HD quality)

**Then connect arduino with your laptop**

## Task (d) : Code modification and uploading it to Arduino

**You must edit the following code and upload it to the Arduino** 

### Edit the section  where it says so 

```cpp
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
String roll = "1203043"; 
String batch = "2K12"; 
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
```

[This code can also be found here](https://github.com/manashmndl/WorkshopIoTRoboticsKUET2k17/blob/codes/Day3/webserver_esp8266_example/webserver_esp8266_example.ino){:target="_blank"}


* Now open the serial monitor of your arduino IDE and set the `BAUD` to `115200` and `Both NL & CR`. 

* Wait about a minute to let the `ESP8266` make a `GET` request to store data in the web server. 

<br/>

## Task (e) : Viewing Result 

To see if the code worked or not, [browse this URL](http://webwork.manash.me/assignment.txt){:target="_blank"} and search for your roll. I have uploaded my roll to give an example. 

After a successful entry the file shall contain your given roll and batch. 

Example, 

```
Roll 1203043 from batch 2K12 has submitted assignment successfully
```
<br/>

## Troubleshooting

* If ESP8266 doesn't respond, disconnect the VCC and connect it again. Do it several times if required (while it is connected to arduino).


* If ESP8266 doesn't still respond, disconnect arduino then connect it again, check the serial monitor if the baud has been set to `115200` or not and the line ending must be `CR & NL`

<br/>

## Note: 

* There **MUST** be some garbage values at the Serial monitor otherwise there might be some problem. **Try to disconnect the ESP8266's ground/vcc and reconnect it again** 

* If you don't understand the code, it's okay! We will discuss in depth about the code at the workshop!

<br/>
