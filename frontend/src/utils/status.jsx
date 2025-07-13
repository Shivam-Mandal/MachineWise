const getMachineStatus = (temp, vibration)=>{
    if(temp > 80 && vibration > 20) return "Critical";
    if(temp > 80 || vibration > 20) return "Warning";
    return "Healthy";
}
export default getMachineStatus;