let logData = null;
let isLoading = false;

async function loadData() {
  try {
    const response = await fetch('data.json');
    logData = await response.json();
  } catch (error) {
    console.error('Failed to load data:', error);
    showError('Failed to load collection log data. Please try refreshing.');
  }
}

function getRandomItem(category) {
  const items = category === 'any' 
    ? Object.values(logData).flat()
    : logData[category];
  return items[Math.floor(Math.random() * items.length)];
}

function showError(message) {
  const resultElement = document.getElementById('roll-result');
  resultElement.innerHTML = `<span style="color: #ff4444">${message}</span>`;
}

function updateUI(item) {
  const imgElement = document.getElementById('roll-image');
  const resultElement = document.getElementById('roll-result');
  const spinner = document.querySelector('.loading-spinner');
  
  if (isLoading) return;
  isLoading = true;
  
  spinner.style.display = 'block';
  imgElement.classList.remove('loaded');
  
  resultElement.style.color = '#ffcc00';
  
  const tempImage = new Image();
  tempImage.src = item.imageURL;

  tempImage.onload = () => {
    spinner.style.display = 'none';
    imgElement.style.transform = 'scale(1)';
    imgElement.src = item.imageURL;
    imgElement.classList.add('loaded');
    resultElement.innerHTML = `
      <a href="${item.wikiURL}" 
         target="_blank"
         rel="noopener noreferrer"
         class="result-link">
        ${item.name}
      </a>
    `;
    
    isLoading = false;
  };

  tempImage.onerror = () => {
    spinner.style.display = 'none';
    imgElement.src = '';
    resultElement.innerHTML = `
      <a href="${item.wikiURL}" 
         target="_blank"
         rel="noopener noreferrer"
         class="result-link">
        ${item.name}
      </a>
      <div style="color: #ff4444; margin-top: 8px;">
        (Image failed to load)
      </div>
    `;
    isLoading = false;
  };
}

document.addEventListener('DOMContentLoaded', async () => {
  const imageContainer = document.querySelector('.image-container');
  imageContainer.innerHTML += `
    <div class="loading-spinner"></div>
  `;

  await loadData();
  
  document.getElementById('roll-button').addEventListener('click', () => {
    if (!logData || isLoading) return;
    
    const category = document.getElementById('category').value;
    const item = getRandomItem(category);
    updateUI(item);
  });
});