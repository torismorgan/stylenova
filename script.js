// script.js

// Run after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Helper: show one screen, hide all others
  function showScreen(id) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach((screen) => {
      screen.classList.remove("screen--visible");
    });

    const target = document.getElementById(id);
    if (target) {
      target.classList.add("screen--visible");
      window.scrollTo(0, 0); // make sure top of screen is visible
    }
  }

  // ------------------------------------------------
  // INTRO → EVENT 1
  // ------------------------------------------------
  const startGameBtn = document.getElementById("startGameBtn");

  if (startGameBtn) {
    startGameBtn.addEventListener("click", () => {
      showScreen("event1");
    });
  }

  // ------------------------------------------------
  // EVENT 1: OUTFIT SELECTION
  // ------------------------------------------------
  const event1Buttons = document.querySelectorAll("#event1 .select-look");
  const event1WrongOverlay = document.getElementById("event1Wrong");
  const event1SuccessOverlay = document.getElementById("event1Success");

  event1Buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.dataset.correct === "true";

      if (isCorrect) {
        // Hide any wrong popup if it's open
        if (event1WrongOverlay) {
          event1WrongOverlay.style.display = "none";
        }

        // Show the success overlay
        if (event1SuccessOverlay) {
          event1SuccessOverlay.style.display = "flex";
          window.scrollTo(0, 0);
        }
      } else {
        // Show the wrong-answer popup
        if (event1WrongOverlay) {
          event1WrongOverlay.style.display = "flex";
        }
      }
    });
  });

  // ------------------------------------------------
  // EVENT 1: "TRY AGAIN" BUTTON (WRONG POPUP)
  // ------------------------------------------------
  const event1TryAgainBtn = document.getElementById("event1TryAgainBtn");

  if (event1TryAgainBtn && event1WrongOverlay) {
    event1TryAgainBtn.addEventListener("click", () => {
      event1WrongOverlay.style.display = "none";
    });
  }

  // ------------------------------------------------
  // EVENT 1: "NEXT EVENT" BUTTON (SUCCESS SCREEN)
  // ------------------------------------------------
  const toEvent2Btn = document.getElementById("toEvent2Btn");

  if (toEvent2Btn) {
    toEvent2Btn.addEventListener("click", () => {
      // Hide success overlay
      if (event1SuccessOverlay) {
        event1SuccessOverlay.style.display = "none";
      }

      // If Event 2 exists, go there. If not, stay on Event 1 for now.
      const event2Section = document.getElementById("event2");
      if (event2Section) {
        showScreen("event2");
      } else {
        console.log("Event 2 not built yet – add <section id='event2' class='screen'> later.");
      }
    });
  }
});
