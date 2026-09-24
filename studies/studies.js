// studies/studies.js
const STUDIES = [
  {
  slug: "electric-aircraft-regional-aviation-networks-2026",
  title: "Electric Aircraft and Regional Aviation Networks",
  pdf: "studies/electric-aircraft-regional-aviation-networks-2026/Electric Aircraft and Regional Aviation Networks.pdf",
  date: "2026-09-24",
  outline: [
    { title: "Electric Aircraft and Regional Aviation Networks", dest: 2 },  // first uses: training, cargo, thin regional routes — not high-capacity jet replacement
    { title: "Regional Networks as the Early Market", dest: 3 },             // short sectors, smaller aircraft, airports with spare capacity
    { title: "The Energy-Density Challenge", dest: 4 },                      // jet fuel vs battery mass; Pipistrel Velis Electro (EASA certified 2020)
    { title: "Aircraft Programs: All-Electric vs Hybrid", dest: 5 },         // Eviation Alice (9 pax, 150–250 mi); Heart Aerospace ES-30 (30 pax)
    { title: "Network Implications", dest: 6 },                              // section divider: economics and geography of regional service
    { title: "Route Economics and Viability", dest: 7 },                     // lower energy/maintenance cost may revive thin routes; cargo & medical
    { title: "Hub Feeding and Charging Constraints", dest: 8 },              // feeder segments only work if charge time fits airline schedules
    { title: "Airport Infrastructure", dest: 9 },                            // only 47 U.S. airports had charging in airport plans as of end-2025
    { title: "Environmental and Community Effects", dest: 10 },              // zero in-flight emissions & lower noise; lifecycle depends on grid
    { title: "Regulation and Safety", dest: 11 },                            // certification is the near-term bottleneck; thermal runaway, EASA special conditions
    { title: "Economic Trade-Offs", dest: 12 },                              // low production volumes, battery residual value, charge-time utilization
    { title: "Outlook", dest: 13 },                                          // late 2020s–early 2030s: training/cargo/commuter; hybrid 19–30 seat later
    { title: "Sources", dest: 14 },
    { title: "Contact", dest: 15 }
  ]
},
  {
  slug: "consumer-behavior-airline-service-innovations-2026",
  title: "The Impact of Consumer Behavior on Airline Service Innovations",
  pdf: "studies/consumer-behavior-airline-service-innovations-2026/The Impact of Consumer Behavior on Airline Service Innovations.pdf",
  date: "2026-08-13",
  outline: [
    { title: "The Impact of Consumer Behavior on Airline Service Innovations", dest: 2 },  // service innovation driven by trust, convenience, digital efficiency, perceived value
    { title: "Consumer Behavior in Aviation", dest: 3 },                                    // perceived value drives satisfaction; digital booking raises transparency
    { title: "Service Innovation as a Competitive Driver", dest: 4 },                        // Finnair A350 case; personalized bundles from customer data
    { title: "Digital Expectations", dest: 5 },                                              // self-service, AI/predictive analytics reshape acceptable service
    { title: "Value, Price, and Loyalty", dest: 6 },                                         // innovation works when perceived as useful, not cosmetic; loyalty monetization
    { title: "Sustainability and Consumer Choice", dest: 7 },                                // Lufthansa: ~7M passengers chose sustainable options in 2025
    { title: "Future Direction", dest: 8 },                                                  // convergence of personalization, automation, sustainability
    { title: "Conclusion", dest: 9 },
    { title: "References", dest: 10 },
    { title: "Contact", dest: 11 }
  ]
},
  {
  slug: "airports-developments-worldwide-2026",
  title: "Airports Developments Worldwide",
  pdf: "studies/airports-developments-worldwide-2026/Airports Developments Worldwide.pdf",
  date: "2026-07-30",
  outline: [
    { title: "Airports Developments Worldwide", dest: 1 },
    { title: "Executive Summary", dest: 2 },        // $700B+ across 50+ projects; capacity to double by 2040
    { title: "Market Overview", dest: 3 },           // King Salman, Al Maktoum, Long Thanh, DFW Terminal F, etc.
    { title: "Regional Highlights", dest: 4 },        // Middle East, Asia-Pacific, Africa, Europe/North America
    { title: "Challenges & Innovations", dest: 5 },   // congestion, AI/biometrics, sustainable design
    { title: "Contact", dest: 6 }
  ]
},
  {
  slug: "global-airlines-scale-power-2026",
  title: "Global Airlines: Scale & Power",
  pdf: "studies/global-airlines-scale-power-2026/Global Airlines Scale & Power.pdf",
  date: "2026-01-09",
  outline: [
    { title: "Airlines in the World: Scale, Trends & Future Dynamics", dest: 2 },   // 4.5B+ passengers; 5,000+ airlines; key challenges
    { title: "Global Scale & Economic Footprint", dest: 3 },                        // 4.7B pax (2024), ~$1T revenue, 87M jobs, 28k+ fleet
    { title: "Major Players & Market Leaders", dest: 4 },                           // mega-carriers; alliances (Star/oneworld/SkyTeam)
    { title: "Regional Dynamics & Growth Hotspots", dest: 5 },                      // APAC 40% share; ME hubs; EU/NA dynamics
    { title: "Business Models & Competitive Strategies", dest: 6 },                 // FSC vs LCC/ULCC; ancillaries; digital/NDC
    { title: "Challenges: Costs, Regulation & Disruptions", dest: 7 },              // fuel ~30% costs; labor/geopolitics; ETS/CORSIA; supply chain
    { title: "Future Outlook: Consolidation & Innovation", dest: 8 },               // mergers; 9B pax by 2040; UAM/eVTOL; margins
    { title: "Contact", dest: 9 }
  ]
},
  {
  slug: "path-to-sustainable-aviation-2025",
  title: "The Path to Sustainable Aviation",
  pdf: "studies/path-to-sustainable-aviation-2025/The Path to Sustainable Aviation.pdf",
  date: "2025-12-10",
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
