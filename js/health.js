;
// Define the maximum number of slots per level
var maxSlots = 4;

// Function to retrieve data from local storage
function retrieveData() {
  const savedData = JSON.parse(localStorage.getItem('healthData'));
  return savedData || {
    level1: Array(maxSlots).fill('O'),
    level2: Array(maxSlots).fill('O'),
    level3: Array(maxSlots).fill('O'),
  };
}

// Function to update the health slots
function updateHealthSlots(level) {
  const levelSlots = healthData[level];
  const slotsContainer = document.getElementById(`${level}Slots`);
  slotsContainer.innerHTML = '';

  levelSlots.forEach((status, index) => {
    const slot = document.createElement('div');
    slot.classList.add('healthSlot');
    slot.textContent = `${status}`;
    slot.addEventListener('click', () => toggleHealthStatus(level, index));
    slotsContainer.appendChild(slot);
  });
}

// Function to toggle the health status
function toggleHealthStatus(level, index) {
  const levelSlots = healthData[level];
  
  // Toggle between 'O', 'N', and 'A'
  switch (levelSlots[index]) {
    case 'O':
      levelSlots[index] = 'N';
      break;
    case 'N':
      levelSlots[index] = 'A';
      break;
    case 'A':
      levelSlots[index] = 'O';
      break;
  }

  // Update the display
  updateHealthSlots(level);

  // Save data to local storage
  localStorage.setItem('healthData', JSON.stringify(healthData));
}

// Initialize the health data
const healthData = retrieveData();

// Initial rendering
updateHealthSlots('level1');
updateHealthSlots('level2');
updateHealthSlots('level3');