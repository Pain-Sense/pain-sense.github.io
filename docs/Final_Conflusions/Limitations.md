## 5.3 Limitations and Difficulties

Throughout the development of this project, we encountered a range of challenges — both technical and organizational — that ultimately influenced the course and final outcome of the work. Below we highlight the most significant ones:

---

### Change of Project Scope

Originally, the project was intended as an extension of a previous implementation, focusing on hardware integration and the use of machine learning to predict pain thresholds. However, the client later redirected the objective toward a broader system for the **collection and processing of physiological signals** in general. This shift required a substantial technical redirection and reprioritization of features.

---

### Team Reduction and Collaboration Challenges

The team began with **five members**, but only **two completed the project**. Two formal withdrawals occurred early on, and other members exhibited a lack of commitment, often failing to complete assigned tasks or communicate progress. This lack of internal coordination particularly impacted the machine learning component, which required specialized input and collaboration that was ultimately not sustained. The limited communication and poor task management increased the workload and pressure on the remaining active members.

---

###  Backend-Frontend Integration

The **integration between frontend and backend** was below expectations. Key functionality — such as **user authentication** and **multi-user data separation** — was not implemented. As it stands, the system supports only a **single base user**, limiting both usability and scalability. Although technically simple to resolve, this omission directly affects the practicality of the application in real-world scenarios.

---

### ESP32 Hardware Setup

One of the more significant technical challenges involved the **assembly of the ESP32 microcontroller**. Initially, we were provided with a model without a USB port, making it impossible to flash the firmware directly from a computer. A replacement had to be sourced with support from engineer Manuel Arez Gonçalves.

Additionally, our background as computer science students meant we had no prior experience working with **breadboards or microcontrollers**. This lack of familiarity posed an initial barrier, particularly with the wiring of sensors such as **GSR, PPG, and RTC**. However, through hands-on experimentation and research, we overcame this learning curve relatively quickly.

---

### Machine Learning Integration

A **machine learning model for event detection in ECG signals** was developed during another course — *Topics in Machine Learning* — and achieved a promising **ROC_AUC score of 88%**. This model was intended to be integrated into the project. However, integration was not completed in time due to differences in sampling rates: the model had been trained with **360 Hz data**, while the current project’s data stream runs at **100 Hz**. Retraining the model to accommodate the new data format was not feasible within the available timeframe.

---

###  Summary

Despite these setbacks, the remaining team members adapted the project's direction, managed to meet core objectives, and delivered a functional, scalable system. However, these limitations underline the importance of consistent collaboration, clearer scope management, and early validation of hardware components in future projects.
