const CONFIG = {
  courseName: "Economics of Sustainability and the Environment",
  databaseRoot: "firstDayClassPulse",
  defaultQuestion: "In one or two words, what environmental issue concerns you most?",
  firebase: window.FIRST_DAY_PULSE_FIREBASE_CONFIG || null
};

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming", "Puerto Rico", "U.S. territory"
];

const COUNTRIES = [
  "Argentina", "Australia", "Austria", "Bangladesh", "Belgium", "Brazil", "Canada", "Chile", "China",
  "Colombia", "Costa Rica", "Denmark", "Ecuador", "Egypt", "Ethiopia", "France", "Germany", "Ghana",
  "Greece", "Guatemala", "Hong Kong", "India", "Indonesia", "Iran", "Ireland", "Israel", "Italy", "Japan",
  "Jordan", "Kenya", "Malaysia", "Mexico", "Morocco", "Nepal", "Netherlands", "New Zealand", "Nigeria",
  "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Russia", "Saudi Arabia", "Singapore",
  "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Taiwan", "Thailand",
  "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom", "Venezuela", "Vietnam", "Zimbabwe"
];

const STATE_COORDINATES = Object.freeze({
  "Alabama": [32.81, -86.79], "Alaska": [64.20, -152.49], "Arizona": [34.05, -111.09],
  "Arkansas": [34.97, -92.37], "California": [36.78, -119.42], "Colorado": [39.00, -105.50],
  "Connecticut": [41.60, -72.70], "Delaware": [38.91, -75.53], "District of Columbia": [38.91, -77.04],
  "Florida": [27.66, -81.52], "Georgia": [32.16, -82.90], "Hawaii": [19.90, -155.58],
  "Idaho": [44.07, -114.74], "Illinois": [40.00, -89.20], "Indiana": [39.77, -86.16],
  "Iowa": [42.03, -93.58], "Kansas": [38.50, -98.00], "Kentucky": [37.84, -84.27],
  "Louisiana": [31.17, -91.87], "Maine": [45.25, -69.45], "Maryland": [39.05, -76.64],
  "Massachusetts": [42.40, -71.38], "Michigan": [44.31, -85.60], "Minnesota": [46.73, -94.69],
  "Mississippi": [32.74, -89.67], "Missouri": [38.45, -92.29], "Montana": [46.88, -110.36],
  "Nebraska": [41.49, -99.90], "Nevada": [38.80, -116.42], "New Hampshire": [43.19, -71.57],
  "New Jersey": [40.06, -74.40], "New Mexico": [34.52, -105.87], "New York": [43.00, -75.00],
  "North Carolina": [35.76, -79.02], "North Dakota": [47.55, -101.00], "Ohio": [40.42, -82.91],
  "Oklahoma": [35.47, -97.52], "Oregon": [43.80, -120.55], "Pennsylvania": [41.20, -77.19],
  "Rhode Island": [41.58, -71.48], "South Carolina": [33.84, -80.90], "South Dakota": [44.30, -100.37],
  "Tennessee": [35.52, -86.58], "Texas": [31.00, -99.90], "Utah": [39.32, -111.09],
  "Vermont": [44.00, -72.70], "Virginia": [37.43, -78.66], "Washington": [47.40, -120.74],
  "West Virginia": [38.60, -80.45], "Wisconsin": [44.50, -89.50], "Wyoming": [43.08, -107.29],
  "Puerto Rico": [18.22, -66.59]
});

const COUNTRY_COORDINATES = Object.freeze({
  "Argentina": [-34, -64], "Australia": [-27, 133], "Austria": [47.33, 13.33],
  "Bangladesh": [24, 90], "Belgium": [50.83, 4], "Brazil": [-10, -55], "Canada": [60, -95],
  "Chile": [-30, -71], "China": [35, 105], "Colombia": [4, -72], "Costa Rica": [10, -84],
  "Denmark": [56, 10], "Ecuador": [-2, -77.5], "Egypt": [27, 30], "Ethiopia": [8, 38],
  "France": [46, 2], "Germany": [51, 9], "Ghana": [8, -2], "Greece": [39, 22],
  "Guatemala": [15.5, -90.25], "Hong Kong": [22.27, 114.19], "India": [20, 77],
  "Indonesia": [-5, 120], "Iran": [32, 53], "Ireland": [53, -8], "Israel": [31.47, 35.13],
  "Italy": [42.83, 12.83], "Japan": [36, 138], "Jordan": [31, 36], "Kenya": [1, 38],
  "Malaysia": [2.5, 112.5], "Mexico": [23, -102], "Morocco": [32, -5], "Nepal": [28, 84],
  "Netherlands": [52.5, 5.75], "New Zealand": [-41, 174], "Nigeria": [10, 8], "Norway": [62, 10],
  "Pakistan": [30, 70], "Peru": [-10, -76], "Philippines": [13, 122], "Poland": [52, 20],
  "Portugal": [39.5, -8], "Russia": [60, 100], "Saudi Arabia": [25, 45], "Singapore": [1.37, 103.8],
  "South Africa": [-29, 24], "South Korea": [37, 127.5], "Spain": [40, -4], "Sri Lanka": [7, 81],
  "Sweden": [62, 15], "Switzerland": [47, 8], "Taiwan": [23.5, 121], "Thailand": [15, 100],
  "Turkey": [39, 35], "Ukraine": [49, 32], "United Arab Emirates": [24, 54],
  "United Kingdom": [54, -2], "Venezuela": [8, -66], "Vietnam": [16.17, 107.83], "Zimbabwe": [-20, 30]
});

const MAJORS = [
  "African American and African Studies", "Anthropology", "Architecture", "Biology", "Biomedical Engineering",
  "Chemistry", "Civil Engineering", "Commerce", "Computer Science", "Data Science", "Economics", "Education",
  "English", "Environmental Sciences", "Environmental Thought and Practice", "Finance", "Foreign Affairs",
  "Global Studies", "History", "Mathematics", "Mechanical Engineering", "Media Studies", "Neuroscience",
  "Nursing", "Philosophy", "Physics", "Political Philosophy, Policy, and Law", "Politics", "Psychology",
  "Public Policy", "Sociology", "Statistics", "Systems Engineering", "Undecided"
];

const YEAR_ORDER = ["First year", "Second year", "Third year", "Fourth year", "Graduate", "Other"];
const STOP_WORDS = new Set([
  "a", "about", "after", "all", "also", "am", "an", "and", "any", "are", "as", "at", "be", "because",
  "been", "being", "but", "by", "can", "could", "do", "for", "from", "get", "has", "have", "how", "i",
  "if", "in", "is", "it", "its", "just", "me", "more", "most", "my", "of", "on", "or", "our", "so",
  "some", "than", "that", "the", "their", "them", "there", "these", "they", "this", "to", "too", "very",
  "was", "we", "were", "what", "when", "which", "who", "will", "with", "would", "you", "your"
]);

const params = new URLSearchParams(location.search);
const ROLE = params.get("role") === "presenter" ? "presenter" : "student";
const DEMO = params.get("demo") === "1";

const els = Object.fromEntries([
  "loadingView", "waitingView", "studentView", "thanksView", "closedView", "presenterView", "roleBadge",
  "connectionStatus", "pulseForm", "state", "stateField", "country", "countryField", "yearChoices", "major",
  "answer", "answerCount", "questionLabel", "formError", "submitButton", "editResponseButton", "responseCount",
  "responseNoun", "toggleCollectionButton", "downloadButton", "newSessionButton", "noResponses", "dashboard",
  "originMap", "originList", "locationFallback", "unmappedNotice", "yearChart", "majorChart", "locationSummary",
  "majorSummary", "presenterQuestion", "wordCloud",
  "qrButton", "qrThumbnail", "qrDialog", "qrLarge", "studentUrl", "copyLinkButton", "sessionDialog", "sessionForm",
  "sessionQuestion", "cancelSessionButton", "toast"
].map(id => [id, document.getElementById(id)]));

let firebase = null;
let db = null;
let sessionId = params.get("session") || null;
let sessionMeta = null;
let responses = {};
let unsubscribeResponses = null;
let unsubscribeSessionMeta = null;
let unsubscribeOwnResponse = null;
let toastTimer = null;
let originMap = null;
let originLayer = null;

const DEMO_RESPONSES = {
  a1: { locationType: "state", location: "Virginia", year: "Third year", major: "Economics", answer: "Climate change" },
  a2: { locationType: "state", location: "New York", year: "Second year", major: "Computer Science", answer: "plastic pollution" },
  a3: { locationType: "country", location: "India", year: "First year", major: "Economics", answer: "air pollution" },
  a4: { locationType: "state", location: "Virginia", year: "Fourth year", major: "Environmental Sciences", answer: "Climate change" },
  a5: { locationType: "state", location: "Maryland", year: "Third year", major: "Public Policy", answer: "water scarcity" },
  a6: { locationType: "country", location: "China", year: "Graduate", major: "Data Science", answer: "air pollution" },
  a7: { locationType: "state", location: "California", year: "Second year", major: "Economics", answer: "wildfires" },
  a8: { locationType: "state", location: "Virginia", year: "First year", major: "Undecided", answer: "biodiversity loss" },
  a9: { locationType: "country", location: "United Kingdom", year: "Third year", major: "Politics", answer: "climate justice" },
  a10: { locationType: "state", location: "North Carolina", year: "Fourth year", major: "Commerce", answer: "climate change" },
  a11: { locationType: "state", location: "Virginia", year: "Second year", major: "Economics", answer: "deforestation" },
  a12: { locationType: "country", location: "Brazil", year: "First year", major: "Biology", answer: "deforestation" },
  a13: { locationType: "state", location: "Texas", year: "Third year", major: "Systems Engineering", answer: "water scarcity" },
  a14: { locationType: "state", location: "New Jersey", year: "Second year", major: "Economics", answer: "sea level rise" }
};

function showOnly(id) {
  ["loadingView", "waitingView", "studentView", "thanksView", "closedView", "presenterView"].forEach(key => {
    els[key].hidden = key !== id;
  });
}

function showFatalError(error) {
  console.error(error);
  setConnection("offline", "Needs refresh");
  showOnly("loadingView");
  const heading = els.loadingView.querySelector("h1");
  const message = els.loadingView.querySelector("p");
  const loader = els.loadingView.querySelector(".loader");
  if (loader) loader.hidden = true;
  if (heading) heading.textContent = "This page didn’t finish loading.";
  if (message) message.textContent = "Refresh once to load the latest version of the class app.";
}

window.addEventListener("unhandledrejection", event => showFatalError(event.reason));
window.addEventListener("error", event => {
  if (event.error) showFatalError(event.error);
});

function setConnection(state, label) {
  els.connectionStatus.className = `connection-status ${state}`;
  els.connectionStatus.lastElementChild.textContent = label;
}

function populateLists() {
  STATES.forEach(name => els.state.add(new Option(name, name)));
  document.getElementById("countrySuggestions").replaceChildren(...COUNTRIES.map(name => {
    const option = document.createElement("option");
    option.value = name;
    return option;
  }));
  document.getElementById("majorSuggestions").replaceChildren(...MAJORS.map(name => {
    const option = document.createElement("option");
    option.value = name;
    return option;
  }));
}

function deviceId() {
  const key = "firstDayPulseDeviceId";
  let id = localStorage.getItem(key);
  if (!id) {
    id = `d-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`}`;
    localStorage.setItem(key, id);
  }
  return id;
}

async function initFirebase() {
  try {
    if (!CONFIG.firebase) throw new Error("Firebase configuration is missing.");
    const appModule = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    firebase = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js");
    const app = appModule.initializeApp(CONFIG.firebase);
    db = firebase.getDatabase(app);
    firebase.onValue(firebase.ref(db, ".info/connected"), snap => {
      setConnection(snap.val() ? "connected" : "offline", snap.val() ? "Live" : "Offline");
    });
    return true;
  } catch (error) {
    console.error(error);
    setConnection("offline", "Offline");
    showToast("Could not connect. Check the internet connection and refresh.", 6000);
    return false;
  }
}

function rootRef(path = "") {
  return firebase.ref(db, `${CONFIG.databaseRoot}${path ? `/${path}` : ""}`);
}

async function start() {
  populateLists();
  bindStaticEvents();
  if (ROLE === "presenter") {
    document.title = `Presenter · ${document.title}`;
    els.roleBadge.hidden = false;
    els.qrButton.hidden = false;
  }

  if (DEMO) {
    setConnection("connected", "Demo");
    sessionId = "demo-session";
    sessionMeta = { question: CONFIG.defaultQuestion, status: "open", startedAt: Date.now() };
    responses = DEMO_RESPONSES;
    ROLE === "presenter" ? renderPresenter() : renderStudent();
    return;
  }

  const connected = await initFirebase();
  if (!connected) return;
  if (ROLE === "presenter") initPresenter();
  else initStudent();
}

function bindStaticEvents() {
  document.querySelectorAll("[data-close-dialog]").forEach(button => {
    button.addEventListener("click", () => document.getElementById(button.dataset.closeDialog).close());
  });
  document.querySelectorAll('input[name="locationType"]').forEach(input => input.addEventListener("change", updateLocationFields));
  els.answer.addEventListener("input", () => { els.answerCount.textContent = els.answer.value.length; });
  els.pulseForm.addEventListener("submit", submitResponse);
  els.editResponseButton.addEventListener("click", () => { hydrateExistingResponse(); showOnly("studentView"); });
  els.qrButton.addEventListener("click", () => els.qrDialog.showModal());
  els.copyLinkButton.addEventListener("click", copyStudentLink);
  els.newSessionButton.addEventListener("click", () => openSessionDialog(true));
  els.cancelSessionButton.addEventListener("click", () => els.sessionDialog.close());
  els.sessionForm.addEventListener("submit", createSession);
  els.toggleCollectionButton.addEventListener("click", toggleCollection);
  els.downloadButton.addEventListener("click", downloadCsv);
}

function updateLocationFields() {
  const type = document.querySelector('input[name="locationType"]:checked').value;
  const stateMode = type === "state";
  els.stateField.hidden = !stateMode;
  els.countryField.hidden = stateMode;
  els.state.required = stateMode;
  els.country.required = !stateMode;
}

function initStudent() {
  if (sessionId) {
    subscribeToSession(sessionId, true);
  } else {
    firebase.onValue(rootRef("currentSession"), snap => {
      const current = snap.val();
      if (!current) {
        sessionId = null;
        sessionMeta = null;
        responses = {};
        showOnly("waitingView");
        return;
      }
      if (current !== sessionId) {
        sessionId = current;
        sessionMeta = null;
        responses = {};
        subscribeToSession(sessionId, true);
      }
    });
  }
}

function initPresenter() {
  showOnly("presenterView");
  firebase.onValue(rootRef("currentSession"), snap => {
    const current = snap.val();
    if (!current) {
      sessionId = null;
      sessionMeta = null;
      responses = {};
      updateQr();
      renderPresenter();
      openSessionDialog(false);
      return;
    }
    if (current !== sessionId) {
      sessionId = current;
      sessionMeta = null;
      responses = {};
      subscribeToSession(sessionId, false);
    }
  });
}

function subscribeToSession(id, studentMode) {
  if (unsubscribeSessionMeta) unsubscribeSessionMeta();
  if (unsubscribeOwnResponse) {
    unsubscribeOwnResponse();
    unsubscribeOwnResponse = null;
  }
  unsubscribeSessionMeta = firebase.onValue(rootRef(`sessions/${id}/meta`), snap => {
    sessionMeta = snap.val();
    if (!sessionMeta) {
      studentMode ? showOnly("waitingView") : renderPresenter();
      return;
    }
    updateQr();
    studentMode ? renderStudent() : renderPresenter();
  });

  if (studentMode) {
    unsubscribeOwnResponse = firebase.onValue(rootRef(`responses/${id}/${deviceId()}`), snap => {
      const response = snap.val();
      if (response) {
        responses = { [deviceId()]: response };
      } else {
        responses = {};
      }
      renderStudent();
    });
  } else {
    if (unsubscribeResponses) unsubscribeResponses();
    unsubscribeResponses = firebase.onValue(rootRef(`responses/${id}`), snap => {
      responses = snap.val() || {};
      renderPresenter();
    });
  }
}

function renderStudent() {
  if (!sessionMeta) { showOnly("waitingView"); return; }
  els.questionLabel.textContent = sessionMeta.question || CONFIG.defaultQuestion;
  if (sessionMeta.status !== "open") { showOnly("closedView"); return; }
  const mine = responses[deviceId()];
  if (mine && !els.studentView.dataset.editing) showOnly("thanksView");
  else showOnly("studentView");
}

function hydrateExistingResponse() {
  const mine = responses[deviceId()];
  if (!mine) return;
  els.studentView.dataset.editing = "true";
  const locationRadio = document.querySelector(`input[name="locationType"][value="${mine.locationType}"]`);
  if (locationRadio) locationRadio.checked = true;
  updateLocationFields();
  if (mine.locationType === "state") els.state.value = mine.location;
  else els.country.value = mine.location;
  const yearRadio = document.querySelector(`input[name="year"][value="${CSS.escape(mine.year)}"]`);
  if (yearRadio) yearRadio.checked = true;
  els.major.value = mine.major;
  els.answer.value = mine.answer;
  els.answerCount.textContent = mine.answer.length;
}

function cleanText(value) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizedLocation(value, type) {
  const clean = cleanText(value);
  if (type === "state") return clean;
  const known = COUNTRIES.find(country => country.toLowerCase() === clean.toLowerCase());
  return known || clean.replace(/\b\w/g, char => char.toUpperCase());
}

function normalizedMajor(value) {
  const clean = cleanText(value);
  const aliases = {
    econ: "Economics", economics: "Economics", cs: "Computer Science", comm: "Commerce",
    es: "Environmental Sciences", etp: "Environmental Thought and Practice", ppe: "Political Philosophy, Policy, and Law",
    stats: "Statistics", undecided: "Undecided"
  };
  return aliases[clean.toLowerCase()] || clean.replace(/\b\w/g, char => char.toUpperCase());
}

function validateForm() {
  els.formError.hidden = true;
  document.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
  const type = document.querySelector('input[name="locationType"]:checked').value;
  const locationField = type === "state" ? els.state : els.country;
  const year = document.querySelector('input[name="year"]:checked');
  const missing = [];
  if (!cleanText(locationField.value)) { missing.push("where you’re from"); locationField.classList.add("invalid"); }
  if (!year) missing.push("your year");
  if (!cleanText(els.major.value)) { missing.push("your intended major"); els.major.classList.add("invalid"); }
  if (!cleanText(els.answer.value)) { missing.push("the final question"); els.answer.classList.add("invalid"); }
  if (missing.length) {
    els.formError.textContent = `Please complete ${missing.join(", ")}.`;
    els.formError.hidden = false;
    return null;
  }
  return {
    locationType: type,
    location: normalizedLocation(locationField.value, type),
    year: year.value,
    major: normalizedMajor(els.major.value),
    answer: cleanText(els.answer.value),
    submittedAt: firebase?.serverTimestamp ? firebase.serverTimestamp() : Date.now()
  };
}

async function submitResponse(event) {
  event.preventDefault();
  const response = validateForm();
  if (!response) return;
  els.submitButton.disabled = true;
  els.submitButton.textContent = "Sharing…";
  try {
    if (!DEMO) await firebase.set(rootRef(`responses/${sessionId}/${deviceId()}`), response);
    responses[deviceId()] = { ...response, submittedAt: Date.now() };
    delete els.studentView.dataset.editing;
    showOnly("thanksView");
  } catch (error) {
    console.error(error);
    els.formError.textContent = "We couldn’t save that response. Check your connection and try again.";
    els.formError.hidden = false;
  } finally {
    els.submitButton.disabled = false;
    els.submitButton.textContent = "Share my response";
  }
}

function openSessionDialog(confirmReplacement) {
  if (confirmReplacement && sessionId && !confirm("Start a new session? The current dashboard will switch to an empty response set.")) return;
  els.sessionQuestion.value = sessionMeta?.question || CONFIG.defaultQuestion;
  els.cancelSessionButton.hidden = !sessionId;
  els.sessionDialog.showModal();
}

async function createSession(event) {
  event.preventDefault();
  const question = cleanText(els.sessionQuestion.value);
  if (!question) return;
  if (DEMO) { showToast("Demo mode does not write to Firebase."); els.sessionDialog.close(); return; }
  const id = `class-${new Date().toISOString().slice(0, 10)}-${Math.random().toString(36).slice(2, 7)}`;
  try {
    await firebase.update(rootRef(), {
      currentSession: id,
      [`sessions/${id}/meta`]: { question, status: "open", startedAt: firebase.serverTimestamp() }
    });
    els.sessionDialog.close();
    showToast("New class session started.");
  } catch (error) {
    console.error(error);
    showToast("Could not start the session.", 5000);
  }
}

async function toggleCollection() {
  if (!sessionMeta || DEMO) { if (DEMO) showToast("Demo mode does not write to Firebase."); return; }
  const next = sessionMeta.status === "open" ? "closed" : "open";
  await firebase.update(rootRef(`sessions/${sessionId}/meta`), { status: next });
  showToast(next === "open" ? "Responses reopened." : "Responses paused.");
}

function renderPresenter() {
  showOnly("presenterView");
  const data = Object.values(responses || {}).filter(Boolean);
  els.responseCount.textContent = data.length;
  els.responseNoun.textContent = data.length === 1 ? "response" : "responses";
  els.toggleCollectionButton.textContent = sessionMeta?.status === "closed" ? "Reopen responses" : "Pause responses";
  els.toggleCollectionButton.disabled = !sessionMeta;
  els.downloadButton.disabled = data.length === 0;
  els.presenterQuestion.textContent = sessionMeta?.question || CONFIG.defaultQuestion;
  els.noResponses.hidden = data.length > 0;
  els.dashboard.hidden = data.length === 0;
  updateQr();
  if (!data.length) return;

  const origins = countOrigins(data);
  const years = countBy(data, item => item.year, YEAR_ORDER);
  const majors = countBy(data, item => normalizedMajor(item.major));
  renderOriginMap(origins);
  renderBarChart(els.yearChart, years, YEAR_ORDER.length);
  renderBarChart(els.majorChart, majors, 9);
  const stateCount = data.filter(item => item.locationType === "state").length;
  const countryCount = data.length - stateCount;
  els.locationSummary.textContent = `${stateCount} U.S. · ${countryCount} international`;
  els.majorSummary.textContent = `${majors.length} distinct`;
  renderWordCloud(data.map(item => item.answer));
}

function countOrigins(data) {
  const counts = new Map();
  data.forEach(item => {
    if (!item.location) return;
    const type = item.locationType === "country" ? "country" : "state";
    const key = `${type}:${item.location}`;
    const existing = counts.get(key) || { label: item.location, type, value: 0 };
    existing.value += 1;
    counts.set(key, existing);
  });
  return [...counts.values()].sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function coordinatesForOrigin(origin) {
  return origin.type === "state" ? STATE_COORDINATES[origin.label] : COUNTRY_COORDINATES[origin.label];
}

function renderOriginMap(entries) {
  renderOriginList(entries);
  const mapped = entries.map(origin => ({ ...origin, coordinates: coordinatesForOrigin(origin) })).filter(origin => origin.coordinates);
  const unmapped = entries.filter(origin => !coordinatesForOrigin(origin));
  els.unmappedNotice.hidden = unmapped.length === 0;
  els.unmappedNotice.textContent = unmapped.length
    ? `${unmapped.map(item => item.label).join(", ")} ${unmapped.length === 1 ? "is" : "are"} listed but not pinned.`
    : "";

  if (!window.L) {
    els.originMap.closest(".map-frame").hidden = true;
    els.locationFallback.hidden = false;
    renderBarChart(els.locationFallback, entries, 12);
    return;
  }

  els.originMap.closest(".map-frame").hidden = false;
  els.locationFallback.hidden = true;
  if (!originMap) {
    originMap = window.L.map(els.originMap, {
      worldCopyJump: true,
      minZoom: 1,
      maxZoom: 7,
      scrollWheelZoom: false
    }).setView([24, 0], 2);
    window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 7,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(originMap);
    originLayer = window.L.layerGroup().addTo(originMap);
  }

  originLayer.clearLayers();
  mapped.forEach(origin => {
    const size = Math.min(50, 29 + Math.sqrt(Math.max(0, origin.value - 1)) * 8);
    const icon = window.L.divIcon({
      className: "origin-pin-wrapper",
      html: `<div class="origin-pin ${origin.type}"><span>${origin.value}</span></div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size]
    });
    const marker = window.L.marker(origin.coordinates, {
      icon,
      title: `${origin.label}: ${origin.value}`,
      alt: `${origin.label}: ${origin.value} ${origin.value === 1 ? "student" : "students"}`,
      keyboard: true
    }).addTo(originLayer);
    const tooltip = document.createElement("span");
    tooltip.textContent = `${origin.label} · ${origin.value}`;
    marker.bindTooltip(tooltip, { direction: "top", className: "origin-tooltip", offset: [0, -size + 5] });
  });

  requestAnimationFrame(() => {
    originMap.invalidateSize();
    if (mapped.length === 1) {
      originMap.setView(mapped[0].coordinates, mapped[0].type === "state" ? 4 : 3);
    } else if (mapped.length > 1) {
      const bounds = window.L.latLngBounds(mapped.map(origin => origin.coordinates));
      originMap.fitBounds(bounds.pad(.22), { maxZoom: 4 });
    } else {
      originMap.setView([24, 0], 2);
    }
  });
}

function renderOriginList(entries) {
  els.originList.replaceChildren();
  entries.slice(0, 9).forEach(origin => {
    const row = document.createElement("div");
    row.className = "origin-row";
    const name = document.createElement("div");
    name.className = "origin-name";
    name.textContent = origin.label;
    const kind = document.createElement("span");
    kind.className = "origin-kind";
    kind.textContent = origin.type === "state" ? "U.S. state" : "Country";
    name.append(kind);
    const count = document.createElement("span");
    count.className = "origin-count";
    count.textContent = origin.value;
    row.append(name, count);
    els.originList.append(row);
  });
}

function countBy(data, accessor, fixedOrder = null) {
  const counts = new Map();
  data.forEach(item => {
    const key = accessor(item);
    if (key) counts.set(key, (counts.get(key) || 0) + 1);
  });
  const entries = [...counts].map(([label, value]) => ({ label, value }));
  if (fixedOrder) return entries.sort((a, b) => fixedOrder.indexOf(a.label) - fixedOrder.indexOf(b.label));
  return entries.sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
}

function renderBarChart(container, entries, limit) {
  container.replaceChildren();
  const visible = entries.slice(0, limit);
  if (entries.length > limit) {
    const otherValue = entries.slice(limit).reduce((sum, item) => sum + item.value, 0);
    visible.push({ label: "Other", value: otherValue });
  }
  const max = Math.max(...visible.map(item => item.value), 1);
  visible.forEach(({ label, value }) => {
    const item = document.createElement("div");
    item.className = "bar-item";
    item.setAttribute("aria-label", `${label}: ${value}`);
    const valueEl = document.createElement("div");
    valueEl.className = "bar-value";
    valueEl.textContent = value;
    const track = document.createElement("div");
    track.className = "bar-track";
    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.height = `${Math.max(3, (value / max) * 100)}%`;
    const labelEl = document.createElement("div");
    labelEl.className = "bar-label";
    labelEl.textContent = label;
    labelEl.title = label;
    track.append(fill);
    item.append(valueEl, track, labelEl);
    container.append(item);
  });
}

function wordFrequencies(answers) {
  const frequencies = new Map();
  answers.forEach(raw => {
    const clean = cleanText(raw).toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "");
    if (!clean) return;
    const tokens = clean.split(/\s+/).filter(word => word.length > 1 && !STOP_WORDS.has(word));
    if (tokens.length > 0 && tokens.length <= 4) {
      const phrase = tokens.join(" ");
      frequencies.set(phrase, (frequencies.get(phrase) || 0) + 1);
    } else {
      tokens.forEach(word => frequencies.set(word, (frequencies.get(word) || 0) + 1));
    }
  });
  return [...frequencies].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 34);
}

function renderWordCloud(answers) {
  const svg = els.wordCloud;
  svg.replaceChildren();
  const frequencies = wordFrequencies(answers);
  if (!frequencies.length) return;
  const width = 1000;
  const height = 420;
  const maxCount = Math.max(...frequencies.map(([, count]) => count));
  const minCount = Math.min(...frequencies.map(([, count]) => count));
  const placed = [];
  const colors = ["#232d4b", "#e57200", "#0f8f91", "#4f7cac", "#6f4e7c"];

  frequencies.forEach(([word, count], index) => {
    const ratio = maxCount === minCount ? .55 : (count - minCount) / (maxCount - minCount);
    const size = Math.max(16, Math.min(20 + ratio * 54, 820 / Math.max(1, word.length * .55)));
    const boxWidth = word.length * size * .55 + 12;
    const boxHeight = size * 1.1;
    let chosen = null;
    for (let step = 0; step < 950; step++) {
      const angle = step * .43 + index;
      const radius = 2.7 * Math.sqrt(step);
      const x = width / 2 + Math.cos(angle) * radius * 5.3;
      const y = height / 2 + Math.sin(angle) * radius * 2.7;
      const box = { x: x - boxWidth / 2, y: y - boxHeight / 2, width: boxWidth, height: boxHeight };
      if (box.x < 4 || box.y < 4 || box.x + box.width > width - 4 || box.y + box.height > height - 4) continue;
      const collision = placed.some(other => !(box.x + box.width + 4 < other.x || other.x + other.width + 4 < box.x || box.y + box.height + 2 < other.y || other.y + other.height + 2 < box.y));
      if (!collision) { chosen = { ...box, centerX: x, centerY: y }; break; }
    }
    if (!chosen) return;
    placed.push(chosen);
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", chosen.centerX);
    text.setAttribute("y", chosen.centerY);
    text.setAttribute("font-size", size.toFixed(1));
    text.setAttribute("font-weight", ratio > .55 ? "700" : "500");
    text.setAttribute("fill", colors[index % colors.length]);
    text.style.animationDelay = `${index * 18}ms`;
    text.textContent = word.replace(/\b\w/g, char => char.toUpperCase());
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = `${word}: ${count}`;
    text.append(title);
    svg.append(text);
  });
}

function studentLink() {
  const url = new URL(location.href);
  url.search = "";
  if (sessionId) url.searchParams.set("session", sessionId);
  return url.href;
}

function qrSource(size) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=8&data=${encodeURIComponent(studentLink())}`;
}

function updateQr() {
  if (ROLE !== "presenter") return;
  els.qrButton.hidden = !sessionId;
  if (!sessionId) return;
  els.qrThumbnail.src = qrSource(216);
  els.qrLarge.src = qrSource(840);
  els.studentUrl.textContent = studentLink();
}

async function copyStudentLink() {
  try {
    await navigator.clipboard.writeText(studentLink());
    showToast("Student link copied.");
  } catch {
    showToast("Could not copy automatically. Select the link above.");
  }
}

function csvCell(value) {
  let string = String(value ?? "");
  if (/^[=+\-@]/.test(string)) string = `'${string}`;
  return `"${string.replace(/"/g, '""')}"`;
}

function downloadCsv() {
  const rows = [["Location type", "Location", "Year", "Intended major", "Answer", "Submitted at"]];
  Object.values(responses).forEach(item => rows.push([
    item.locationType, item.location, item.year, item.major, item.answer,
    typeof item.submittedAt === "number" ? new Date(item.submittedAt).toISOString() : ""
  ]));
  const csv = rows.map(row => row.map(csvCell).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `class-pulse-${sessionId || "responses"}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function showToast(message, duration = 2600) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.hidden = false;
  toastTimer = setTimeout(() => { els.toast.hidden = true; }, duration);
}

start().catch(showFatalError);
