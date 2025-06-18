## Data Processing Pipeline: Labeling and Feature Extraction

The data processing pipeline is divided into two main stages: **labeling** and **feature extraction**. These steps ensure that raw sensor data is contextually enriched and transformed into meaningful physiological indicators for analysis and visualization.

---

### 1. Data Labeling

Each monitoring session (referred to as an *experiment*) is created via the frontend and assigned a unique `experimentId`. This identifier is automatically linked to the messages sent by the ESP32 device, allowing for **automatic labeling of incoming data**.

#### Labeling Workflow:
- A Kafka consumer listens to the topic `SensorData`.
- Upon receiving a new message, it appends the relevant `experimentId`.
- The labeled data is then published to the topic `ProcessedData`.
- Telegraf consumes the labeled data and forwards it to **InfluxDB**, where it is stored in a structured format for future queries and dashboard visualizations.

This process ensures that every data sample is clearly attributed to its corresponding experiment, maintaining a clean separation by session or context.

---

### 2. Feature Extraction

Beyond labeling, the system performs **temporal and physiological analysis** of the raw signals from ECG, GSR, and PPG (BVP) sensors. A dedicated Kafka consumer handles this stage in a **distributed and continuous** manner.

#### Feature Extraction Logic:
- Circular buffers are maintained per `deviceId`, accumulating samples over time.
- At defined intervals (e.g., every 5 seconds), the system checks if there's enough data to extract meaningful features.
- Processing is done using the **NeuroKit2** Python library.

---

### Signal-Specific Processing Methods

#### A. ECG (Electrocardiogram)

The ECG signal captures the heart's electrical activity. From this, the system computes:

- **Heart Rate (HR)** – Beats per minute (bpm), a direct indicator of cardiac activity.
- **Heart Rate Variability (HRV)** – Assesses the variation between consecutive beats (RR intervals), reflecting autonomic nervous system balance.

**HRV Metrics Extracted:**
- `SDNN`: Standard deviation of RR intervals.
- `RMSSD`: Root mean square of differences between successive RR intervals.
- `pNN50`: Percentage of RR intervals differing by more than 50ms.

These metrics provide deep insight into cardiovascular and autonomic nervous system health.

---

#### B. GSR (Galvanic Skin Response)

GSR measures skin conductance, which varies with sweat gland activity—an indicator of emotional and physiological arousal.

**GSR Components:**
- **Tonic (SCL)**: Skin Conductance Level – Baseline arousal state.
- **Phasic (SCRs)**: Skin Conductance Responses – Quick responses to stimuli.

Features extracted include:
- Number of SCRs
- Mean SCR amplitude

These reflect sympathetic nervous system reactivity.

---

#### C. PPG (Photoplethysmography / BVP)

PPG assesses peripheral blood volume using light reflection. From this signal, the following metric is extracted:

- **Perfusion Index (PI)** – The ratio between:
  - **AC Component**: Pulsatile blood flow (heartbeat-driven)
  - **DC Component**: Static blood volume

PI is an indirect indicator of **peripheral circulation** and vascular health.

---

### Publishing Processed Data

Once valid features are extracted (from at least one signal), the system:

- Aggregates them into a **JSON object** including:
  - Extracted features
  - `deviceId`
- Publishes the message to the Kafka topic `hrData`.

> Only messages containing meaningful data are published, ensuring efficiency and preventing noise in the system.

Finally, the enriched metrics are stored in **InfluxDB**, enabling historical queries, dashboard visualization, and advanced time-series analytics.


<img src="/img/Processed.png" alt="A cute kitten" />