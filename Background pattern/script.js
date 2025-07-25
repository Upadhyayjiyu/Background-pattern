let backgrounds = ["bg-video", "pattern-bg", "animated-bg"];
let current = 0;

function toggleBackground() {
  // Hide all
  backgrounds.forEach(id => document.getElementById(id)?.style && (document.getElementById(id).style.display = "none") || document.querySelector(`.${id}`)?.style && (document.querySelector(`.${id}`).style.display = "none"));
  
  // Show current
  let nextId = backgrounds[current];
  const el = document.getElementById(nextId) || document.querySelector(`.${nextId}`);
  if (el) el.style.display = "block";

  // Prepare next toggle
  current = (current + 1) % backgrounds.length;
}

// Init first background
window.onload = toggleBackground;
