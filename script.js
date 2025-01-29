// Load data and initialize
let logData = null;

async function loadData() {
  try {
    const response = await fetch('data.json');
    logData = await response.json();
  } catch (error) {
    console.error('Failed to load data:', error);
    alert('Error loading collection log data!');
  }
}

function getRandomItem(category) {
  const items = category === 'any' 
    ? Object.values(logData).flat() 
    : logData[category];
  return items[Math.floor(Math.random() * items.length)];
}

function updateUI(item) {
  const imgElement = document.getElementById('roll-image');
  const resultElement = document.getElementById('roll-result');

  // Reset
  imgElement.src = '';
  resultElement.textContent = '-';

  // Update image
  imgElement.src = item.imageURL;
  resultElement.innerHTML = `
    <a href="https://oldschool.runescape.wiki/w/${item.name.replace(/ /g, '_')}" 
       target="_blank"
       rel="noopener">
      ${item.name}
    </a>
  `;

  // Handle image errors
  imgElement.onerror = () => {
    imgElement.src = '';
    resultElement.textContent = 'Image unavailable';
  };
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  
  document.getElementById('roll-button').addEventListener('click', () => {
    if (!logData) return;
    
    const category = document.getElementById('category').value;
    const item = getRandomItem(category);
    updateUI(item);
  });
});