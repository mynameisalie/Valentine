// Load data
const dataArrayString = localStorage.getItem("valentineData");

const dataArray = JSON.parse(dataArrayString)

// Get message node
const messageNode = document.getElementById("message");

// Create load message
let loadMessage = "";
for (let i = 0; i < dataArray.length; i++) {
    loadMessage += `Question ${i + 1}: ${dataArray[i].question} - Answer ${i + 1}: ${dataArray[i].answer}\n`;
}

messageNode.value = loadMessage;

