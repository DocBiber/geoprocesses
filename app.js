const phases = [
  {
    de: { name: "Kontinentaler Riss", description: "Aufsteigendes Mantelmaterial wölbt die kontinentale Lithosphäre auf. Dehnung erzeugt Bruchsysteme und einen Graben.", location: "Ostafrikanischer Graben · 3,4° S, 36,7° O", geology: "Aktive Dehnungszone zwischen der Nubischen und Somalischen Platte.", literature: "Chorowicz (2005): The East African Rift System.", time: "Heute bis in etwa 10 Mio. Jahren" },
    en: { name: "Continental rift", description: "Upwelling mantle material domes continental lithosphere. Extension creates fault systems and a rift valley.", location: "East African Rift · 3.4° S, 36.7° E", geology: "Active extensional zone between the Nubian and Somali plates.", literature: "Chorowicz (2005): The East African Rift System.", time: "Today to about 10 million years" },
    coords: "-3.4,36.7", source: "https://doi.org/10.1016/j.jafrearsci.2005.07.019", type: "rift"
  },
  {
    de: { name: "Junges Meer", description: "Der Kontinentalriss vertieft sich. Meerwasser dringt ein, während neue ozeanische Kruste am Spreizungszentrum entsteht.", location: "Rotes Meer · 20,0° N, 38,0° O", geology: "Junger Ozean zwischen der Afrikanischen und Arabischen Platte.", literature: "Stern & Johnson (2010): Continental lithosphere of the Red Sea.", time: "Etwa 10–30 Mio. Jahre" },
    en: { name: "Young sea", description: "The continental rift deepens. Seawater enters as new oceanic crust forms at the spreading centre.", location: "Red Sea · 20.0° N, 38.0° E", geology: "Young ocean between the African and Arabian plates.", literature: "Stern & Johnson (2010): Continental lithosphere of the Red Sea.", time: "About 10–30 million years" },
    coords: "20,38", source: "https://doi.org/10.1016/j.tecto.2010.09.013", type: "young"
  },
  {
    de: { name: "Reifer Ozean", description: "Fortgesetzte Ozeanbodenspreizung weitet ein Ozeanbecken. Passive Kontinentränder sammeln mächtige Sedimentpakete.", location: "Atlantischer Ozean · 28,0° N, 45,0° W", geology: "Divergente Plattengrenze am Mittelatlantischen Rücken.", literature: "Wilson (1966): Did the Atlantic close and then re-open?", time: "Etwa 30–180 Mio. Jahre" },
    en: { name: "Mature ocean", description: "Continued seafloor spreading widens an ocean basin. Passive continental margins accumulate thick sediment packages.", location: "Atlantic Ocean · 28.0° N, 45.0° W", geology: "Divergent plate boundary at the Mid-Atlantic Ridge.", literature: "Wilson (1966): Did the Atlantic close and then re-open?", time: "About 30–180 million years" },
    coords: "28,-45", source: "https://doi.org/10.1038/211676a0", type: "ocean"
  },
  {
    de: { name: "Einsetzende Subduktion", description: "Dichte, alternde ozeanische Lithosphäre taucht an einer konvergenten Grenze in den Mantel ab. Ein Tiefseegraben entsteht.", location: "Marianengraben · 11,4° N, 142,6° O", geology: "Subduktion der Pazifischen Platte unter die Philippinische Platte.", literature: "Stern (2002): Subduction zones.", time: "Etwa 180–220 Mio. Jahre" },
    en: { name: "Onset of subduction", description: "Dense, aging oceanic lithosphere descends into the mantle at a convergent margin. A deep-sea trench develops.", location: "Mariana Trench · 11.4° N, 142.6° E", geology: "Pacific Plate subducting beneath the Philippine Sea Plate.", literature: "Stern (2002): Subduction zones.", time: "About 180–220 million years" },
    coords: "11.4,142.6", source: "https://doi.org/10.1029/2001RG000108", type: "subduction"
  },
  {
    de: { name: "Schließender Ozean", description: "Subduktionszonen verbrauchen die ozeanische Kruste. Inselbögen und Akkretionskeile säumen das kleiner werdende Becken.", location: "Mittelmeer · 36,0° N, 18,0° O", geology: "Komplexe Konvergenz zwischen der Afrikanischen und Eurasischen Platte.", literature: "Dewey et al. (1989): Kinematics of the western Mediterranean.", time: "Etwa 220–250 Mio. Jahre" },
    en: { name: "Closing ocean", description: "Subduction zones consume oceanic crust. Island arcs and accretionary wedges border the shrinking basin.", location: "Mediterranean Sea · 36.0° N, 18.0° E", geology: "Complex convergence between the African and Eurasian plates.", literature: "Dewey et al. (1989): Kinematics of the western Mediterranean.", time: "About 220–250 million years" },
    coords: "36,18", source: "https://doi.org/10.1130/GES00333.1", type: "closing"
  },
  {
    de: { name: "Kontinentkollision", description: "Nach dem Verbrauch des Ozeans kollidieren Kontinente. Kruste wird verdickt, gefaltet und zu einem Hochgebirge gehoben.", location: "Himalaya · 28,0° N, 86,9° O", geology: "Kollision der Indischen mit der Eurasischen Platte.", literature: "Yin & Harrison (2000): Geologic evolution of the Himalayan–Tibetan orogen.", time: "Ab etwa 250 Mio. Jahren" },
    en: { name: "Continental collision", description: "After ocean consumption, continents collide. Crust thickens, folds, and rises into a high mountain belt.", location: "Himalaya · 28.0° N, 86.9° E", geology: "Collision of the Indian and Eurasian plates.", literature: "Yin & Harrison (2000): Geologic evolution of the Himalayan–Tibetan orogen.", time: "From about 250 million years" },
    coords: "28,86.9", source: "https://doi.org/10.1146/annurev.earth.28.1.211", type: "collision"
  }
];

const labels = {
  de: { module: "MODUL 01", title: "Der Wilson-Zyklus", subtitle: "Von der kontinentalen Riftbildung zum Ozean und zurück zur Gebirgsbildung.", viewSection: "Schnitt", viewOblique: "Schrägoben", viewTop: "Von oben", continentalCrust: "Kontinentale Kruste", ocean: "Ozean", mantle: "Oberer Mantel", currentPhase: "AKTUELLE PHASE", spaceReference: "RAUMBEZUG", referenceTitle: "Die Animation im geographischen Kontext", location: "Ort & Koordinaten", geology: "Geologischer Bezug", literature: "Literatur", openMap: "In OpenStreetMap öffnen", openSource: "Quelle öffnen", footer: "Geowissenschaftliche Prozesse verständlich machen", prototype: "Prototyp", install: "Installieren", play: "Animation abspielen", pause: "Animation pausieren" },
  en: { module: "MODULE 01", title: "The Wilson Cycle", subtitle: "From continental rifting to an ocean and back to mountain building.", viewSection: "Cross-section", viewOblique: "Oblique", viewTop: "Top view", continentalCrust: "Continental crust", ocean: "Ocean", mantle: "Upper mantle", currentPhase: "CURRENT PHASE", spaceReference: "SPATIAL REFERENCE", referenceTitle: "The animation in geographic context", location: "Location & coordinates", geology: "Geological setting", literature: "Literature", openMap: "Open in OpenStreetMap", openSource: "Open source", footer: "Making geoscientific processes accessible", prototype: "Prototype", install: "Install", play: "Play animation", pause: "Pause animation" }
};

const sceneShapes = {
  rift: { left: "M0 225 L260 215 L385 255 L450 225 L450 300 L0 300Z", right: "M450 225 L515 255 L640 215 L900 225 L900 300 L450 300Z", water: "M385 255 L450 225 L515 255 L510 266 L390 266Z", mountain: "", boundary: "M450 225 L450 300" },
  young: { left: "M0 220 L270 220 L370 270 L400 270 L400 300 L0 300Z", right: "M500 270 L530 270 L630 220 L900 220 L900 300 L500 300Z", water: "M370 270 Q450 254 530 270 L530 278 Q450 264 370 278Z", mountain: "", boundary: "M450 258 L450 300" },
  ocean: { left: "M0 218 L225 218 L350 276 L385 282 L385 300 L0 300Z", right: "M515 282 L550 276 L675 218 L900 218 L900 300 L515 300Z", water: "M225 218 Q450 250 675 218 L675 276 Q450 308 225 276Z", mountain: "", boundary: "M450 249 L450 304" },
  subduction: { left: "M0 217 L315 217 L520 284 L520 300 L0 300Z", right: "M595 225 L690 190 L900 210 L900 300 L595 300Z", water: "M315 217 Q450 235 595 225 L570 250 Q450 257 340 237Z", mountain: "M620 225 L680 170 L728 213 L775 182 L820 215 L900 210 L900 240 L620 245Z", boundary: "M570 245 L520 300" },
  closing: { left: "M0 214 L360 220 L490 285 L490 300 L0 300Z", right: "M560 220 L900 214 L900 300 L410 300Z", water: "M360 220 Q460 232 560 220 L545 245 Q455 254 375 240Z", mountain: "M530 225 L585 175 L630 215 L690 181 L740 217 L900 214 L900 242 L530 245Z", boundary: "M545 245 L490 300" },
  collision: { left: "M0 220 L355 220 L450 245 L450 300 L0 300Z", right: "M450 245 L545 220 L900 220 L900 300 L450 300Z", water: "", mountain: "M250 220 L350 155 L410 205 L450 120 L490 205 L550 150 L650 220 L650 248 L250 248Z", boundary: "M450 238 L450 300" }
};

let language = "de";
let currentPhase = 0;
let currentView = "section";
let playing = false;
let timer;

const $ = id => document.getElementById(id);
const paths = ["left-crust", "right-crust", "water", "mountains", "plate-boundary"];

function renderSection(type) {
  const shape = sceneShapes[type];
  paths.forEach(id => $(id).setAttribute("d", shape[{ "left-crust": "left", "right-crust": "right", water: "water", mountains: "mountain", "plate-boundary": "boundary" }[id]]));
  $("left-texture").setAttribute("d", shape.left);
  $("right-texture").setAttribute("d", shape.right);
  const converging = ["subduction", "closing", "collision"].includes(type);
  const arrows = converging
    ? '<path d="M270 260h75l-13-10m13 10-13 10M630 260h-75l13-10m-13 10 13 10" fill="none"/>'
    : '<path d="M270 260h-70l13-10m-13 10 13 10M630 260h70l-13-10m13 10-13 10" fill="none"/>';
  $("arrows").innerHTML = arrows;
}

function renderPlan(type) {
  const widths = { rift: 60, young: 120, ocean: 310, subduction: 250, closing: 130, collision: 0 };
  const width = widths[type];
  $("top-land").setAttribute("d", width ? `M0 0H${450 - width}V430H0ZM${450 + width} 0H900V430H${450 + width}Z` : "M0 0H900V430H0Z");
  $("top-ocean").setAttribute("d", width ? `M${450 - width} 0H${450 + width}V430H${450 - width}Z` : "");
  $("top-boundary").setAttribute("d", type === "collision" ? "M450 0V430" : `M450 0V430`);
  $("top-relief").setAttribute("d", type === "collision" ? "M280 65Q350 20 420 70T570 70T720 65 M280 365Q350 410 420 360T570 360T720 365" : `M${450 - width - 50} 0V430 M${450 + width + 50} 0V430`);
}

function renderOblique(type) {
  const widths = { rift: 55, young: 105, ocean: 260, subduction: 215, closing: 115, collision: 0 };
  const width = widths[type];
  $("oblique-mantle").setAttribute("d", "M0 300 300 215 900 285V430H0Z");
  $("oblique-land").setAttribute("d", width ? `M0 80 300 25V280L${450 - width} 325V110L0 170ZM${450 + width} 110 900 55V270L600 340V165Z` : "M0 80 300 25 900 55 600 340 300 280 0 300Z");
  $("oblique-ocean").setAttribute("d", width ? `M${450 - width} 110 600 65 ${450 + width} 110 600 340 ${450 - width} 325 300 280Z` : "");
  $("oblique-ridge").setAttribute("d", type === "collision" ? "M300 175 450 105 600 175" : "M450 105 450 310");
}

function updateScene() {
  const phase = phases[currentPhase];
  renderSection(phase.type);
  renderPlan(phase.type);
  renderOblique(phase.type);
  $("section-scene").hidden = currentView !== "section";
  $("top-scene").hidden = currentView !== "top";
  $("oblique-scene").hidden = currentView !== "oblique";
  $("scene-label").textContent = phase[language].name;
}

function update() {
  const phase = phases[currentPhase];
  const text = phase[language];
  $("phase-name").textContent = text.name;
  $("phase-description").textContent = text.description;
  $("time-label").textContent = text.time;
  $("location-reference").textContent = text.location;
  $("geology-reference").textContent = text.geology;
  $("literature-reference").textContent = text.literature;
  const [latitude, longitude] = phase.coords.split(",");
  $("map-link").href = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=6/${latitude}/${longitude}`;
  $("literature-link").href = phase.source;
  $("phase-slider").value = currentPhase;
  document.querySelectorAll(".phase-markers button").forEach((button, index) => button.classList.toggle("active", index === currentPhase));
  updateScene();
}

function translate() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = labels[language][element.dataset.i18n]; });
  $("language-button").textContent = language === "de" ? "EN" : "DE";
  $("play-button").setAttribute("aria-label", labels[language][playing ? "pause" : "play"]);
  $("install-button").textContent = labels[language].install;
  update();
}

function togglePlayback() {
  playing = !playing;
  $("play-button").textContent = playing ? "Ⅱ" : "▶";
  $("play-button").setAttribute("aria-label", labels[language][playing ? "pause" : "play"]);
  if (playing) timer = window.setInterval(() => { currentPhase = (currentPhase + 1) % phases.length; update(); }, 3000);
  else window.clearInterval(timer);
}

phases.forEach((phase, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = index + 1;
  button.setAttribute("aria-label", `Phase ${index + 1}`);
  button.addEventListener("click", () => { currentPhase = index; update(); });
  $("phase-markers").append(button);
});

document.querySelectorAll(".view-button").forEach(button => button.addEventListener("click", () => {
  currentView = button.dataset.view;
  document.querySelectorAll(".view-button").forEach(other => other.classList.toggle("active", other === button));
  updateScene();
}));
$("phase-slider").addEventListener("input", event => { currentPhase = Number(event.target.value); update(); });
$("play-button").addEventListener("click", togglePlayback);
$("language-button").addEventListener("click", () => { language = language === "de" ? "en" : "de"; translate(); });

let installPrompt;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  $("install-button").hidden = false;
});
$("install-button").addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = undefined;
  $("install-button").hidden = true;
});
if ("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js");
translate();
