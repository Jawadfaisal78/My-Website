// DEMO DATA: You can connect to a real API or database later
const medicines = [
    {
        name: "Paracetamol",
        tags: ["Pain Relief", "Fever", "OTC"],
        description: "Paracetamol is used to treat mild to moderate pain and reduce fever. It is one of the most commonly used medications globally.",
        details: {
            usage: "Headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.",
            dosage: "Adults: 500mg-1g every 4-6 hours. Do not exceed 4g/day.",
            sideEffects: "Rare; may cause liver damage in overdose.",
            brandNames: "Tylenol, Panadol, Crocin",
            countries: "Available worldwide"
        }
    },
    {
        name: "Amoxicillin",
        tags: ["Antibiotic", "Prescription"],
        description: "Amoxicillin is a broad-spectrum antibiotic used to treat bacterial infections of the respiratory tract, urinary tract, skin, and more.",
        details: {
            usage: "Treats bacterial infections (bronchitis, pneumonia, UTI, ear and skin infections).",
            dosage: "Adults: 250-500mg every 8 hours or as prescribed.",
            sideEffects: "Nausea, rash, diarrhea, possible allergic reactions.",
            brandNames: "Amoxil, Moxatag, Trimox",
            countries: "Available worldwide"
        }
    },
    {
        name: "Ibuprofen",
        tags: ["Anti-inflammatory", "Pain Relief", "OTC"],
        description: "Ibuprofen is a non-steroidal anti-inflammatory drug (NSAID) used for pain relief, reducing inflammation, and lowering fever.",
        details: {
            usage: "Headache, dental pain, menstrual cramps, muscle aches, arthritis.",
            dosage: "Adults: 200-400mg every 4-6 hours as needed. Max 1200mg/day OTC.",
            sideEffects: "Stomach upset, nausea, dizziness, risk of ulcers.",
            brandNames: "Advil, Motrin, Nurofen",
            countries: "Available worldwide"
        }
    },
    {
        name: "Metformin",
        tags: ["Diabetes", "Prescription"],
        description: "Metformin is used to control high blood sugar in people with type 2 diabetes.",
        details: {
            usage: "Improves blood sugar control in type 2 diabetes.",
            dosage: "500-1000mg twice daily with meals.",
            sideEffects: "Nausea, stomach upset, rare lactic acidosis.",
            brandNames: "Glucophage, Fortamet",
            countries: "Available worldwide"
        }
    },
    {
        name: "Atorvastatin",
        tags: ["Cholesterol", "Heart", "Prescription"],
        description: "Atorvastatin lowers cholesterol and triglyceride levels to reduce risk of heart disease.",
        details: {
            usage: "Treats high cholesterol, prevents heart attacks and strokes.",
            dosage: "10-80mg once daily.",
            sideEffects: "Muscle pain, liver issues (rare).",
            brandNames: "Lipitor",
            countries: "Available worldwide"
        }
    },
    // Add more medicines as needed for a larger, richer experience
];

// --- DOM Elements ---
const featuredList = document.getElementById('featuredList');
const medicineList = document.getElementById('medicineList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.closeBtn');

// --- Render Functions ---
function renderMedicineCard(med, idx) {
    return `
        <div class="medicine-card" data-index="${idx}">
            <h3>${med.name}</h3>
            <div class="tags">${med.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
            <p>${med.description}</p>
        </div>
    `;
}

function showMedicines(meds = medicines) {
    medicineList.innerHTML = meds.map((med, idx) => renderMedicineCard(med, idx)).join('');
}

function showFeatured() {
    // Show 3 random featured medicines
    const shuffled = [...medicines].sort(() => 0.5 - Math.random());
    featuredList.innerHTML = shuffled.slice(0, 3).map((med, idx) => renderMedicineCard(med, idx)).join('');
}

// --- Modal ---
function showModal(med) {
    modalBody.innerHTML = `
        <h2>${med.name}</h2>
        <div class="tags">${med.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
        <p><strong>Usage:</strong> ${med.details.usage}</p>
        <p><strong>Dosage:</strong> ${med.details.dosage}</p>
        <p><strong>Side Effects:</strong> ${med.details.sideEffects}</p>
        <p><strong>Brand Names:</strong> ${med.details.brandNames}</p>
        <p><strong>Countries:</strong> ${med.details.countries}</p>
    `;
    modal.classList.add('active');
}

function hideModal() {
    modal.classList.remove('active');
}

// --- Events ---
medicineList.addEventListener('click', (e) => {
    const card = e.target.closest('.medicine-card');
    if (card) {
        const idx = card.getAttribute('data-index');
        showModal(medicines[idx]);
    }
});

featuredList.addEventListener('click', (e) => {
    const card = e.target.closest('.medicine-card');
    if (card) {
        const idx = card.getAttribute('data-index');
        showModal(medicines[idx]);
    }
});

closeBtn.addEventListener('click', hideModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
});

// --- Search ---
function searchMedicines() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
        showMedicines(medicines);
        return;
    }
    const filtered = medicines.filter(med =>
        med.name.toLowerCase().includes(query) ||
        med.tags.some(tag => tag.toLowerCase().includes(query)) ||
        med.description.toLowerCase().includes(query)
    );
    showMedicines(filtered);
}

searchBtn.addEventListener('click', searchMedicines);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchMedicines();
});

// --- Initialization ---
showMedicines();
showFeatured();