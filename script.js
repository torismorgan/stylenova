// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const introSection = document.getElementById("introSection");
  const event1Section = document.getElementById("event1");
  const startBtn = document.getElementById("startGameBtn");

  // helper to switch screens
  function showScreen(sectionToShow) {
    document.querySelectorAll(".screen").forEach(screen => {
      screen.classList.remove("screen--visible");
    });
    sectionToShow.classList.add("screen--visible");
  }

  // click "pick her outfit" → go to Event 1
  startBtn.addEventListener("click", () => {
    showScreen(event1Section);
  });
});
