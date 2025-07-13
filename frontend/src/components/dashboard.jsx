import { useEffect, useState } from "react";
import axios from "axios";
import getMachineStatus from "../utils/status";

const thresholds = {
    temperature: 80,
    vibration: 20,
};

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("Healthy");

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/sensor-data");
            setData(res.data);
            setStatus(getMachineStatus(res.data.temperature, res.data.vibration));
        } catch (error) {
            console.error("Error fetching sensor data", error);
        }
    };

    const getAlert = (key, value) => {
        const isAlert = thresholds[key] && value > thresholds[key];
        return (
            <span
                className={`ml-2 font-semibold ${isAlert ? "text-red-600 visible" : "invisible"
                    }`}
            >
                High {key}
            </span>
        );
    };

    const statusColor = {
        Healthy: "text-green-600",
        Warning: "text-yellow-600",
        Critical: "text-red-600",
    };

    return (
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 space-y-6">
            <h1 className="text-3xl font-extrabold text-center text-gray-800">MachineWise IoT Dashboard</h1>

            {data ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg font-medium text-gray-700">
                    <div className="bg-gray-50 p-4 rounded-xl shadow">
                        Current: <span className="font-bold text-blue-700">{data.current} A</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow">
                        Voltage: <span className="font-bold text-indigo-700">{data.voltage} V</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow">
                        Temperature:
                        <span className="font-bold text-orange-700 ml-1">{data.temperature} °C</span>
                        <div>{getAlert("temperature", data.temperature)}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow">
                        Vibration:
                        <span className="font-bold text-pink-700 ml-1">{data.vibration} mm/s</span>
                        <div>{getAlert("vibration", data.vibration)}</div>
                    </div>
                    <div className="col-span-2 text-center">
                        <div className={`text-xl font-bold ${statusColor[status]}`}>
                            Status: {status}
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                            Last Updated: {new Date(data.timestamp).toLocaleTimeString()}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-500 text-lg">Loading sensor data...</div>
            )}
        </div>
    );
};

export default Dashboard;
