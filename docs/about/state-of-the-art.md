## Project Background and Challenges

This project evolved naturally from the previous version, which offered a basic integration between IoT sensors and a physiological data visualization system. While functional, the earlier solution faced several important limitations that affected its effectiveness, scalability, and suitability for more demanding uses.

  <img src="/img/StateofArt.png" alt="A cute kitten" />

### Key Issues with the Previous Solution

1. **Time Inconsistency in Data Streams**  
   Without a real-time clock (RTC), data timestamps reflected when data arrived, not when it was actually collected. This made accurate time-based analysis difficult, which is essential for interpreting physiological signals properly.

2. **Limited Scalability and Performance**  
   The original system was designed as a prototype for a single device and could not handle large volumes of data efficiently.

3. **Poor Management of Multiple Devices**  
   The solution lacked flexible support for multiple connected devices. Device configurations were fixed in firmware, making it hard to adapt to different setups or add new sensors.

4. **Weak Data Security and Privacy**  
   Sensitive biometric data was not adequately protected during transmission or storage, exposing personal information to potential risks.

### Technical Limitations of the Initial Architecture

The original system used Node-RED for data flow, MySQL for database storage, and Mosquitto for MQTT communication. However, this setup had several drawbacks:

- Wi-Fi and device IDs were hardcoded, requiring firmware updates for any changes.  
- Using a traditional relational database (MySQL) limited handling of unstructured sensor data.  
- MQTT brokers didn’t guarantee message order or support efficient data storage and processing, reducing reliability and scalability.

### Why Reengineering Was Needed

These challenges made it clear that a complete redesign was necessary. The new architecture aims to be more robust, flexible, and data-driven, with key goals to:

- Ensure precise time synchronization for accurate temporal analysis.  
- Improve performance and scalability to support many devices and large data volumes.  
- Increase flexibility in device management, allowing network and configuration changes without code modifications.

This led to the development of the current project, which better meets modern demands for performance, security, and scalability.
