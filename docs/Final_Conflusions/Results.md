## Final Evaluation of System Functionality

In terms of functional results, we believe the system successfully met the client's requirements — particularly after a final realignment of objectives, prompted by some coordination challenges within the development team. These adjustments allowed us to focus efforts on delivering a more stable and complete system.

---

### Key Improvements and Deliverables

The project focused on addressing the main limitations of the previous version, with improvements concentrated in four key areas:

- **Scalability**
- **Data processing**
- **User experience with the ESP32**
- **Frontend usability and control**

---

### 1. Scalability

As validated by stress tests, the system progressed from handling just **one device** to managing **21 ESP32 devices** transmitting at **100 Hz**, with **zero message loss**. This leap in capacity was made possible by the integration of technologies better suited to high-throughput scenarios, including:

- **Apache Kafka** for distributed message handling
- **InfluxDB** for scalable time-series data storage
- **Grafana** for dynamic real-time data visualization

---

### 2. Data Processing

Advanced data workflows were implemented, such as:

- **Automatic labeling** of data samples based on unique experiment IDs
- **Feature extraction** from ECG, GSR, and PPG signals using `NeuroKit2`

This enabled structured, high-quality data collection for further analysis, while maintaining system efficiency via selective publication of only valid, complete data points.

---

### 3. ESP32 User Experience

Significant enhancements were made to the ESP32 configuration process:

- The system now supports **dynamic reconfiguration of Wi-Fi credentials and MQTT settings**, eliminating the need for firmware reprogramming.
- The integration of **WiFiManager** enabled a local access point for intuitive device setup.

These changes made the device far more accessible and flexible for end users.

---

### 4. Frontend Interface

A modern **web-based frontend** was developed using **React**, acting as the main point of interaction for users. It provides:

- **Session Management**: Users can create, edit, and terminate monitoring sessions.
- **Parameter Configuration**: Including experiment IDs, device assignment, and real-time settings.
- **Real-Time Visualization**: Clean and interactive charts based on data from Grafana, as well as session-level summaries.
- **Improved Usability**: Designed with accessibility and clarity in mind to support both technical and non-technical users.

This frontend transformed the system from a set of disconnected components into an integrated and user-friendly platform.

---

###  Conclusion

The project delivered a robust, scalable, and user-centric system that successfully overcomes the limitations of its predecessor. The improvements spanned backend infrastructure, embedded programming, signal processing, and user interface design — resulting in a comprehensive, production-ready solution aligned with the client’s goals.
