## ESP32-WROOM-32 Programming and Integration

To program the ESP32-WROOM-32 microcontroller, the **Arduino IDE**  was used — a development environment widely adopted in embedded systems for its simplicity and broad library support.

### Development Approach

Using Arduino IDE allowed for:

- Easy flashing of code to the microcontroller.
- Basic debugging and serial monitoring.
- Quick visualization of the data being transmitted by the ESP32.

The code was developed with a modular structure, separating:

- **Sensor data acquisition logic**
- **Data transmission**
- **Wi-Fi connection management**

### Libraries Used

The following libraries were integrated:

- `WiFi.h`: for basic wireless communication.
- `WiFiManager.h` : to simplify Wi-Fi configuration using a local web portal.
- `DFRobot_Heartrate`: to read data from the PPG sensor.
- `RTClib`: for interfacing with the Real-Time Clock (RTC) module.
- `PubSubClient`: for publishing sensor data to an MQTT broker.

Additional routines were implemented for **periodic sensor readings**, specifically for:

- **GSR (Galvanic Skin Response)**
- **PPG (Photoplethysmography / Heart Rate)**

### Wi-Fi Reconfiguration via WiFiManager

A major usability issue in earlier versions of the project was the need to **hardcode Wi-Fi credentials and server information** directly into the firmware. This made reconfiguration difficult and error-prone.

To resolve this, the **WiFiManager** library was adopted. It allows the ESP32 to:

- Create a temporary Wi-Fi **Access Point (AP)**.
- Launch a local configuration portal accessible from any nearby device.
- Let users configure Wi-Fi and password, MQTT broker address, and device ID **without reflashing the firmware**.

This made the device **much more flexible and user-friendly**, especially in environments where Wi-Fi credentials may change.

### Robustness Features

To ensure stable performance, especially during extended operation:

- The ESP32 automatically attempts to reconnect to the Wi-Fi network or restart in case of connection failure or invalid sensor data.
- This improves resilience and reduces the need for manual resets.

### MQTT Message Structure

Once connected to the Wi-Fi network and the MQTT broker (e.g., Mosquitto), the ESP32 begins publishing JSON-formatted messages via MQTT. These messages contain the data collected from the sensors and include:

- `timestamp`: exact date and time (microsecond precision) from the RTC module.
- `bvp`: average value from the PPG sensor, linked to heart rate.
- `gsr`: average value from the GSR sensor.
- `deviceId`: unique identifier of the ESP32 device.

Each sensor reading cycle publishes an **aggregated JSON packet** to the `sensors` MQTT topic.

Additionally, the ESP32 also publishes data to **dedicated topics** for individual sensors:

- `sensors/ppg`: for raw PPG values.
- `sensors/gsr`: for raw GSR values.

This approach allows for **synchronized analysis** and **easy scalability**, as sensor-specific and general data streams are both available for downstream processing.






Example of a message to the topic sensors:
<img src="/img/esp32jsonfull.png" alt="A cute kitten" />




---

Example of a message to the topic  sensors/gsr :
<img src="/img/esp32jsonpartial.png" alt="A cute kitten" />