// studies/studies.js
const STUDIES = [
  {
  slug: "path-to-sustainable-aviation-2025",
  title: "The Path to Sustainable Aviation (2025)",
  pdf: "studies/path-to-sustainable-aviation-2025/The Path to Sustainable Aviation.pdf",
  date: "2025-12-01",
  outline: [
    { title: "The Path to Sustainable Aviation", dest: 2 },                 // intro: climate impact context (2.5% CO₂; ~4% warming incl. non-CO₂)
    { title: "The Non-CO₂ Challenge", dest: 3 },                            // contrails & NOx dominate warming
    { title: "Sustainable Aviation Fuel (SAF) Revolution", dest: 4 },       // lifecycle cuts up to ~80%
    { title: "Scaling Production & Policy Mandates", dest: 5 },             // ReFuelEU, US incentives; supply/cost gaps
    { title: "Technological Innovation – Engine Tech", dest: 6 },           // e.g., CFM RISE open-fan >20% fuel burn reduction
    { title: "Technological Innovation – Airframe & Hybrid/H₂", dest: 7 },  // composites, laminar flow; hydrogen timeline shift; hybrid-electric
    { title: "Future Concepts (BWB, eVTOL)", dest: 8 },
    { title: "Policy & Offsetting (CORSIA)", dest: 9 },                     // baseline 2019–2025; credits; 2025 review
    { title: "The Net-Zero Pathway", dest: 10 },                              // Fly Net Zero 2050; ~80% reductions + removals/offsets
    { title: "Conclusion", dest: 11 },
    { title: "Contact", dest: 12 }
  ]
},
  {
   slug: "ai-in-aviation-2025",
   title: "The Integration of AI in Aviation",
   pdf: "studies/AI-in-aviation-2025/The integration of AI in aviation 2025.pdf",
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
