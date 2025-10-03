// settings.js
var selectedStudy = (window.__IAE_STUDIES__ && window.__IAE_STUDIES__.selectStudy())
  ? window.__IAE_STUDIES__.selectStudy()
  : null;

if (!selectedStudy) {
  selectedStudy = {
    slug: "pilot-shortage-2025",
    title: "The Global Pilot Shortage Crisis – August 2025 IAE Study",
    pdf: "studies/pilot-shortage-2025/The Global Pilot Shortage Crisis.pdf",
    date: "2025-08-01",
    outline: [{ title: "The Global Pilot Shortage Crisis", dest: 1 }]
  };
}

var option_PDF1 = {
  source: selectedStudy.pdf,

  hard: "hard",
  backgroundImage: "assets/background.jpg",
  backgroundColor: "#fff",

  soundEnable: true,
  enableDownload: true,
  centerBook: true,
  singlePageMode: false,
  coverPage: true,
  rightToLeft: false,
  scrollWheel: true,

  text: {
    toggleSound: "Sound On/Off",
    toggleOutline: "Table of Contents",
    previousPage: "Previous Page",
    nextPage: "Next Page",
    toggleFullscreen: "Fullscreen",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    downloadPDFFile: "Download PDF"
  },

  allControls: "outline,thumbnail,startPage,altPrev,pageNumber,altNext,endPage,zoomIn,zoomOut,fullscreen,download",
};

// Provide outline immediately so the viewer has it during init
option_PDF1.outline = selectedStudy.outline || [];

document.addEventListener("DOMContentLoaded", function () {
  try {
    document.title = selectedStudy.title + " | Intercontinental Aviation Enterprise";
    var h1 = document.querySelector("#iae-study-seo h1");
    if (h1) h1.textContent = selectedStudy.title;
  } catch (e) {}
});
