// studies/studies.js
const STUDIES = [
  {
   slug: "ai-in-aviation-2025",
   title: "The Integration of AI in Aviation (2025)",
   pdf: "studies/AI-in-aviation-2025/The Integration of AI in Aviation 2025.pdf",
   date: "2025-11-10",
   outline: [
     { title: "The Integration of AI in Aviation", dest: 2 },
     { title: "Key AI Integration Insights", dest: 3 },
     { title: "Market Size & Growth", dest: 4 },
     { title: "Long-Term Benefits & Transformation (2025–2032)", dest: 5 },
     { title: "Challenges", dest: 6 },
     { title: "Contact", dest: 7 } // keep/remove if the contact panel shares page 5
   ]
 },
  {
    slug: "demand-2025",
    title: "The Demand for Airplanes in 2025 and Beyond",
    pdf: "studies/demand-2025/The Demand For Airplanes in 2025.pdf",
    date: "2025-10-03",
    outline: [
      { title: "The Demand for Airplanes in 2025 and Beyond", dest: 1 },
      { title: "Key Demand Insights", dest: 3 },
      { title: "Market Size and Growth", dest: 4 },
      { title: "Long-term Forecasts (2025–2044)", dest: 4 },
      { title: "Challenges", dest: 5 },
      { title: "Sources & Contact", dest: 6 }
    ]
  },
  {
    slug: "pilot-shortage-2025",
    title: "The Global Pilot Shortage Crisis",
    pdf: "studies/pilot-shortage-2025/The Global Pilot Shortage Crisis.pdf",
    date: "2025-09-10",
    outline: [
      { title: "The Global Pilot Shortage Crisis", dest: 1 },
      { title: "Drivers of Shortage", dest: 2 },
      { title: "Regional Outlook", dest: 3 },
      { title: "Mitigation Strategies", dest: 4 },
      { title: "Conclusion", dest: 5 }
    ]
  }
];

function selectStudy() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("study");
  if (slug) {
    const match = STUDIES.find(s => s.slug === slug);
    if (match) return match;
  }
  return STUDIES[0];
}

window.__IAE_STUDIES__ = { STUDIES, selectStudy };
