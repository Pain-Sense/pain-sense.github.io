## Performance Testing: Message Throughput and Latency

To evaluate system robustness and scalability, a **stress test** was conducted using a simulation with **21 devices** operating simultaneously. Each device published messages to the MQTT broker at a frequency of **100 Hz**, totaling **10,000 messages per device**.

The primary metrics evaluated during this test were:

- **Message loss**
- **Latency**

---

### Latency Measurement

Latency was defined as the difference between the timestamp included in the message (representing the moment of data generation on the device) and the timestamp recorded upon reception in the InfluxDB time-series database.

To ensure that latency reflected the actual delay from transmission to storage, InfluxDB was configured to use the system’s reception time instead of the timestamp embedded in the messages.

---

## Results

### Message Loss

- **Result:** 0 messages lost  
- **Interpretation:** This is a highly positive outcome, indicating that all messages sent by the devices were correctly received and stored by the system.

---

### ⏱ Average Latency

- **Result:** 2.94 seconds (average)  
- **Definition:** Time between when the message is generated and when it is stored in InfluxDB.

Although this latency is relatively high — nearly 3 seconds — it is not a major concern for the application. Real-time visualization is handled through the direct connection between MQTT and Grafana. Therefore, the delay in database storage only affects historical data access, which occurs after the monitoring session ends.

---

### Conclusion

This test confirms that the system can:

- Handle high-frequency data streams from multiple devices with **no message loss**.
- Tolerate moderate storage latency without compromising **real-time monitoring**, thanks to the MQTT-to-Grafana pipeline.


<img src="/img/Test.png" alt="A cute kitten" />
