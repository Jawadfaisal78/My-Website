// Load medicine list
async function loadMedicines() {
  const response = await fetch('/medicines/list.json');
  const medicines = await response.json();
  const container = document.getElementById('medicineList');
  container.innerHTML = medicines.map(med =>
    `<div class="medicine-card">
      <a href="medicine.html?name=${encodeURIComponent(med.slug)}">
        <h3>${med.name}</h3>
        <p>${med.description.slice(0, 70)}...</p>
      </a>
    </div>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', loadMedicines);