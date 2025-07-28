async function loadMedicine() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('name');
  if (!slug) return;
  const response = await fetch(`/public/medicines/${slug}.json`);
  const med = await response.json();
  const container = document.getElementById('medicineDetail');
  container.innerHTML = `
    <h2>${med.name}</h2>
    <div>${med.tags.map(t => `<span class="tag">${t}</span>`).join(' ')}</div>
    <p><b>Description:</b> ${med.description}</p>
    <p><b>Usage:</b> ${med.usage}</p>
    <p><b>Dosage:</b> ${med.dosage}</p>
    <p><b>Side Effects:</b> ${med.sideEffects}</p>
    <p><b>Brand Names:</b> ${med.brandNames}</p>
    <p><b>Countries:</b> ${med.countries}</p>
    <a href="index.html">Back to list</a>
  `;
}
document.addEventListener('DOMContentLoaded', loadMedicine);