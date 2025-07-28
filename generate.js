const fs = require('fs');
const path = require('path');
const medicines = [];

for (let i = 1; i <= 1000; i++) {
  const slug = `medicine${i}`;
  const med = {
    name: `Medicine ${i}`,
    slug,
    description: `This is medicine number ${i}. Used for demonstration.`,
    tags: ["Demo", "OTC"],
    usage: "For demo only.",
    dosage: "See instructions.",
    sideEffects: "None.",
    brandNames: "DemoBrand",
    countries: "DemoLand"
  };
  medicines.push({name: med.name, slug, description: med.description});
  fs.writeFileSync(path.join('public/medicines', `${slug}.json`), JSON.stringify(med, null, 2));
}
fs.writeFileSync('public/medicines/list.json', JSON.stringify(medicines, null, 2));