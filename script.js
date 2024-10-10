function calculateEnergy() {
    const panelEfficiency = document.getElementById('panelEfficiency').value;
    const panelArea = document.getElementById('panelArea').value;
    const sunHours = document.getElementById('sunHours').value;
  
    const energyOutput = panelEfficiency * panelArea * sunHours * 0.001; // convert to kWh
  
    const energyOutputElement = document.getElementById('energyOutput');
    energyOutputElement.innerText = `Energy Output: ${energyOutput.toFixed(2)} kWh per day`;
  }