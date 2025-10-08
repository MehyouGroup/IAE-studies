// studies/studies.js
const STUDIES = [
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
