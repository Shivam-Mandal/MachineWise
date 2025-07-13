# 🚀 MachineWise IoT Dashboard

Welcome to the **MachineWise Industrial IoT Dashboard**!  
This project simulates live machine sensor data and displays it in real time using a sleek and responsive interface.

**Tech Stack:**
-  **Frontend** – React.js + Tailwind CSS  
-  **Backend** – Node.js + Express.js  

---

## 🧠 Logic & Thought Process

The core idea was to create a system that feels _alive_. The backend is designed to generate **mock sensor readings** — current, voltage, temperature, and vibration — and serve them via a simple API. Every **5 seconds**, the frontend fetches this data and updates the UI to simulate near-real-time monitoring.

A dynamic **machine status logic** is implemented based on the following thresholds:

 🔴 **Critical**: Both temperature > 80°C **and** vibration > 20 mm/s  
 🟡 **Warning**: Either temperature **or** vibration exceeds its threshold  
 🟢 **Healthy**: All values are within safe limits  

Each reading shows an alert if it exceeds its safe value. These alerts are rendered in a way that **prevents layout shift**, maintaining a smooth and consistent user experience.

---

## 💡 Design Decisions

- The **backend** is intentionally lightweight, using only Express and CORS. It generates fresh mock data on every request to simulate real sensor input.
- The **frontend** leverages React Hooks (`useEffect`, `useState`) and `axios` for periodic data fetching. Tailwind CSS is used for a clean, modern, and responsive layout.
- The interface is **mobile-friendly** and uses **color-coded status indicators** for easy readability and quick visual feedback.

---

## 🔧 Improvements for Production

If this project were to be scaled or deployed in a production environment, the following improvements would be considered:

- 🔁 Replace polling with **WebSockets (Socket.IO)** for real-time data streaming  
- 🔐 Add **authentication** and **role-based access control** (e.g., Admin, Operator)  
- 🧠 Store **historical data** using databases like **MongoDB** or **PostgreSQL**  
- 📊 Integrate **data visualization** (e.g., with Recharts or Chart.js) for trend analysis  
- ✅ Add **unit and integration tests**, enhanced error handling, and optional **notifications** via email/SMS for critical machine states  

