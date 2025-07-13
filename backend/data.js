const generateMockData=()=> {
  return {
    current: +(Math.random() * 100).toFixed(2),      
    voltage: +(Math.random() * 400 + 100).toFixed(2), 
    temperature: +(Math.random() * 100).toFixed(2),   
    vibration: +(Math.random() * 30).toFixed(2),      
    timestamp: new Date().toISOString(),
  };
}

module.exports = { generateMockData };
