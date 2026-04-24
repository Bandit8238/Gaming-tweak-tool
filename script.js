let fpsBoost = false;
let fps = 60;

function updateFPS() {
  setInterval(() => {
    if (fpsBoost) {
      fps = Math.min(240, fps + Math.floor(Math.random() * 5));
    } else {
      fps = 60 + Math.floor(Math.random() * 5);
    }
    document.getElementById("fps").innerText = fps;
  }, 500);
}

updateFPS();

function toggleFPS() {
  fpsBoost = !fpsBoost;
  document.getElementById("status").innerText =
    "Status: " + (fpsBoost ? "Boosted 🚀" : "Normal");
}

function boostFPS() {
  fpsBoost = true;
  document.getElementById("status").innerText = "Status: Boost Mode 🚀";
}

function applyTweaks() {
  document.getElementById("gpuStatus").innerText =
    "GPU: Tweaks Applied (Simulated ⚡)";
}

function cleanCache() {
  document.getElementById("sysStatus").innerText =
    "System: Cache Cleaned 🧹";
}

function gameMode() {
  document.getElementById("sysStatus").innerText =
    "System: Game Mode ON 🎮";
}
