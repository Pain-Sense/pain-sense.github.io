## Real-Time Data Visualization

One of the main requirements of the project was the ability to **visualize sensor data in real time**. To meet this, a direct integration was implemented between the **MQTT broker (Mosquitto)** and **Grafana**, enabling continuous monitoring of the data transmitted by the ESP32.

### Direct Connection to Mosquitto

Grafana connects directly to the Mosquitto server to:

- **Subscribe to MQTT topics**
- **Receive real-time sensor messages**
- **Display data through interactive dashboards**

This setup eliminates the need for intermediate storage when real-time insights are required.

### MQTT Topic Hierarchy and Message Structure

The MQTT protocol’s topic-based architecture allowed for a **modular and dynamic** data consumption strategy.

Each ESP32 device publishes:

- An **aggregated JSON message** with data from all onboard sensors to the general topic:  
  - `sensors`
- **Individual messages** per sensor to dedicated subtopics:  
  - `sensors/ppg`, `sensors/gsr`, etc.

> As long as the messages are structured in the expected JSON format and published to the correct topics, they are automatically processed and visualized on the frontend.


### Integration Flow

The visualization workflow involves multiple components:

1. **ESP32 Devices**  
   Publish real-time sensor data in JSON format via MQTT.

2. **Grafana**  
   - Subscribes directly to individual sensor topics (e.g., `sensors/ppg`)  
   - Displays **real-time charts** for each metric independently.

3. **Quarkus Backend**  
   - Subscribes to the **general topic `sensors`** (after messages pass through Kafka).
   - Extracts and processes complete sensor payloads.

4. **React Frontend**  
   - Retrieves processed data from the backend.
   - Displays **customized dashboards** with filtered and relevant information.

This layered approach guarantees that:

- Real-time data is immediately available for monitoring via Grafana.
- Aggregated and context-aware data is available via the React interface.
- The user experience is optimized for both live and processed data.


<img src="/img/RealTime.png" alt="A cute kitten" />
