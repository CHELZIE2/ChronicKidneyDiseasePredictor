// DOM elements
const form = document.getElementById('predict-form');
const loading = document.getElementById('loading');
const resultDiv = document.getElementById('result');
const clearBtn = document.getElementById('clear-btn');
const randomizeBtn = document.getElementById('randomize-btn');

// Realistic medical data ranges
const medicalRanges = {
  age: [20, 80],
  bp: [80, 180],
  sg: [1.005, 1.025],
  al: [0, 5],
  su: [0, 5],
  bgr: [70, 250],
  bu: [15, 150],
  sc: [0.5, 15],
  sod: [135, 150],
  pot: [3.5, 5.5],
  hemo: [8, 18],
  pcv: [25, 50],
  wc: [4000, 15000],
  rc: [3.5, 6.5]
};

// Utility functions
function getRandomFloat(min, max, decimals = 1) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBinary() {
  return Math.random() < 0.3 ? 1 : 0; // 30% chance of positive condition
}

// Form submission handler
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  resultDiv.style.display = 'none';
  loading.style.display = 'block';

  const features = [
    Number(form.feature1.value),
    Number(form.feature2.value),
    Number(form.feature3.value),
    Number(form.feature4.value),
    Number(form.feature5.value),
    Number(form.feature6.value),
    Number(form.feature7.value),
    Number(form.feature8.value),
    Number(form.feature9.value),
    Number(form.feature10.value),
    Number(form.feature11.value),
    Number(form.feature12.value),
    Number(form.feature13.value),
    Number(form.feature14.value),
    Number(form.feature15.value),
    Number(form.feature16.value),
    Number(form.feature17.value),
    Number(form.feature18.value),
    Number(form.feature19.value),
    Number(form.feature20.value),
    Number(form.feature21.value),
    Number(form.feature22.value),
    Number(form.feature23.value),
    Number(form.feature24.value)
  ];

  if (features.some(isNaN)) {
    loading.style.display = 'none';
    resultDiv.style.display = 'block';
    resultDiv.className = '';
    resultDiv.style.color = 'red';
    resultDiv.textContent = 'Please fill in all fields with valid numbers.';
    return;
  }

  try {
    const response = await fetch('/predict', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({features})
    });

    loading.style.display = 'none';

    if (!response.ok) {
      const errorData = await response.json();
      resultDiv.className = '';
      resultDiv.style.color = 'red';
      resultDiv.textContent = 'Error: ' + (errorData.error || 'Unknown error');
    } else {
      const data = await response.json();
      resultDiv.className = data.prediction === 'CKD' ? 'negative' : 'positive';
      resultDiv.textContent = `Prediction: ${data.prediction} (Probability: ${data.probability})`;
    }
    resultDiv.style.display = 'block';

  } catch (err) {
    loading.style.display = 'none';
    resultDiv.className = '';
    resultDiv.style.color = 'red';
    resultDiv.textContent = 'Failed to fetch prediction. Try again later.';
    resultDiv.style.display = 'block';
  }
});

// Clear form handler
clearBtn.addEventListener('click', () => {
  form.reset();
  resultDiv.style.display = 'none';
});

// Randomize data handler
randomizeBtn.addEventListener('click', () => {
  // Fill numerical inputs with realistic medical values
  form.feature1.value = getRandomInt(medicalRanges.age[0], medicalRanges.age[1]); // Age
  form.feature2.value = getRandomInt(medicalRanges.bp[0], medicalRanges.bp[1]); // Blood pressure
  form.feature3.value = getRandomFloat(medicalRanges.sg[0], medicalRanges.sg[1], 3); // Specific gravity
  form.feature4.value = getRandomInt(medicalRanges.al[0], medicalRanges.al[1]); // Albumin
  form.feature5.value = getRandomInt(medicalRanges.su[0], medicalRanges.su[1]); // Sugar
  form.feature10.value = getRandomInt(medicalRanges.bgr[0], medicalRanges.bgr[1]); // Blood glucose
  form.feature11.value = getRandomInt(medicalRanges.bu[0], medicalRanges.bu[1]); // Blood urea
  form.feature12.value = getRandomInt(medicalRanges.sod[0], medicalRanges.sod[1]); // Sodium
  form.feature13.value = getRandomFloat(medicalRanges.sc[0], medicalRanges.sc[1], 1); // Serum creatinine
  form.feature14.value = getRandomFloat(medicalRanges.pot[0], medicalRanges.pot[1], 1); // Potassium
  form.feature15.value = getRandomFloat(medicalRanges.hemo[0], medicalRanges.hemo[1], 1); // Hemoglobin
  form.feature16.value = getRandomInt(medicalRanges.pcv[0], medicalRanges.pcv[1]); // Packed cell volume
  form.feature17.value = getRandomInt(medicalRanges.wc[0], medicalRanges.wc[1]); // White cell count
  form.feature18.value = getRandomFloat(medicalRanges.rc[0], medicalRanges.rc[1], 1); // Red cell count
  
  // Fill select dropdowns with random but realistic values
  form.feature6.value = getRandomBinary(); // Red blood cells (mostly normal)
  form.feature7.value = getRandomBinary(); // Pus cell count (mostly normal)
  form.feature8.value = Math.random() < 0.2 ? 1 : 0; // Pus cell clumps (20% present)
  form.feature9.value = Math.random() < 0.2 ? 1 : 0; // Bacteria (20% present)
  form.feature19.value = Math.random() < 0.4 ? 1 : 0; // Hypertension (40% chance)
  form.feature20.value = Math.random() < 0.3 ? 1 : 0; // Diabetes (30% chance)
  form.feature21.value = Math.random() < 0.2 ? 1 : 0; // Coronary artery disease (20% chance)
  form.feature22.value = Math.random() < 0.3 ? 1 : 0; // Appetite (30% poor)
  form.feature23.value = Math.random() < 0.3 ? 1 : 0; // Pedal edema (30% chance)
  form.feature24.value = Math.random() < 0.4 ? 1 : 0; // Anemia (40% chance)
  
  resultDiv.style.display = 'none';
});