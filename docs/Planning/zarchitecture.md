  # Architecture

  <img src="/img/architeture.png" alt="A cute kitten" />

## System Architecture

The system architecture was designed based on the gathered requirements and consists of four main modules:

1. **Data Generation:**  
   Simulates IoT devices and connects to a real ESP32 device.

2. **Real-Time Analysis:**  
   Receives MQTT messages and visualizes the collected data in real time.

3. **Data Processing:**  
   Acts as an intermediary to handle messages, performing noise reduction, feature extraction, and event detection.

4. **Processed Data:**  
   Stores processed information and makes it available for visualization.

### Simplified Data Flow

Once the ESP32 device is configured, it sends MQTT messages to the broker. These messages are consumed by two main components:  
- **Grafana**, which uses the data for real-time visualization.  
- **Processing system**, which receives data via Kafka.

In the processing system, Python scripts perform feature extraction. The extracted features are sent to a second Kafka topic and then stored in an InfluxDB database. Both raw and processed data are saved in this database and can be viewed in Grafana’s frontend.

## Technologies Used

- **MQTT:** A lightweight protocol for real-time communication between IoT devices, used to transmit physiological sensor data.  
- **Grafana:** A real-time visualization tool for monitoring physiological signals through customizable dashboards.  
- **InfluxDB:** A time-series database chosen to store physiological data with accurate timestamps.  
- **MySQL:** A relational database for structured data like patient information and experiment details.  
- **Telegraf:** Bridges Kafka and InfluxDB, automatically sending processed data to the database.  
- **Apache Kafka:** A scalable data streaming platform that ensures ordered message delivery and fault tolerance.  
- **Python:** Used for writing scripts that process physiological signals, extracting key metrics like heart rate peaks.  
- **Quarkus (Java):** A lightweight framework for developing REST APIs; manages data, communicates with MySQL, and provides extra features like tagging processed messages.  
- **Docker & Docker Compose:** Tools to create isolated containers for each system component, simplifying setup, testing, and deployment.  
- **React:** A JavaScript library for building a modern, responsive, and interactive user interface for data visualization.



# Tech Stack:

## Message Layer
kafka:https://www.python.org/downloads/

kafka-connect:https://docs.confluent.io/platform/current/connect/index.html

Mosquitto:https://mosquitto.org/

Telegraf:https://www.influxdata.com/time-series-platform/telegraf/


## Processing
Quarkus:https://quarkus.io/

Python3:https://www.python.org/downloads/


## FrontEnd:
Typescript:https://www.typescriptlang.org/

Grafana:https://grafana.com/


## Data Base
InfluxDB:https://www.influxdata.com/

MySql:https://www.influxdata.com/time-series-platform/telegraf/


## Libraries Used: 
neurokit2:https://github.com/neuropsychology/NeuroKit



# Esp32

For this project the esp32 used was the ESP32-Wroom-32D
<img src="/img/esp32_wroom_32D.jpg" alt="A cute kitten" />

## Sensors:

PPG Sensor:https://www.dfrobot.com/product-1540.html

GSR Sensor:https://www.digikey.pt/pt/products/detail/seeed-technology-co-ltd/101020052/5488086

RTC Module:https://mauser.pt/catalog/product_info.php?products_id=096-8833

A Breadboard and some cables will also be necessary for this project.

## Final Assembly;

<img src="/img/assemble.jpg" alt="A cute kitten" />