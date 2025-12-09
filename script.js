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

  // EVENT 1: "TRY AGAIN" BUTTON (WRONG POPUP)
  const event1TryAgainBtn = document.getElementById("event1TryAgainBtn");

  if (event1TryAgainBtn && event1WrongOverlay) {
    event1TryAgainBtn.addEventListener("click", () => {
      event1WrongOverlay.style.display = "none";
    });
  }

  // EVENT 1: "NEXT EVENT" BUTTON (SUCCESS SCREEN)
  const toEvent2Btn = document.getElementById("toEvent2Btn");

  if (toEvent2Btn) {
    toEvent2Btn.addEventListener("click", () => {
      // Hide success overlay
      if (event1SuccessOverlay) {
        event1SuccessOverlay.style.display = "none";
      }

      // Go to Event 2 if it exists
      const event2Section = document.getElementById("event2");
      if (event2Section) {
        showScreen("event2");
      } else {
        console.log("Event 2 not built yet – add <section id='event2' class='screen'> later.");
      }
    });
  }

  // ------------------------------------------------
  // EVENT 2: OUTFIT SELECTION
  // ------------------------------------------------
  const event2Buttons = document.querySelectorAll("#event2 .select-look");
  const event2WrongOverlay = document.getElementById("event2Wrong");
  const event2SuccessOverlay = document.getElementById("event2Success");

  event2Buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.dataset.correct === "true";

      if (isCorrect) {
        // Hide wrong popup if open
        if (event2WrongOverlay) {
          event2WrongOverlay.style.display = "none";
        }

        // Show success overlay
        if (event2SuccessOverlay) {
          event2SuccessOverlay.style.display = "flex";
          window.scrollTo(0, 0);
        }
      } else {
        // Show the wrong-answer popup
        if (event2WrongOverlay) {
          event2WrongOverlay.style.display = "flex";
        }
      }
    });
  });

  // EVENT 2: "TRY AGAIN" BUTTON (WRONG POPUP)
  const event2TryAgainBtn = document.getElementById("event2TryAgainBtn");

  if (event2TryAgainBtn && event2WrongOverlay) {
    event2TryAgainBtn.addEventListener("click", () => {
      event2WrongOverlay.style.display = "none";
    });
  }

  // EVENT 2: "NEXT EVENT" BUTTON (SUCCESS SCREEN)
  const toEvent3Btn = document.getElementById("toEvent3Btn");

  if (toEvent3Btn) {
    toEvent3Btn.addEventListener("click", () => {
      // Hide success overlay
      if (event2SuccessOverlay) {
        event2SuccessOverlay.style.display = "none";
      }

      // Go to Event 3 if it exists
      const event3Section = document.getElementById("event3");
      if (event3Section) {
        showScreen("event3");
      } else {
        console.log("Event 3 not built yet – add <section id='event3' class='screen'> later.");
      }
    });
  }

  // ------------------------------------------------
  // EVENT 3: OUTFIT SELECTION
  // ------------------------------------------------
  const event3Buttons = document.querySelectorAll("#event3 .select-look");
  const event3WrongOverlay = document.getElementById("event3Wrong");
  const event3SuccessOverlay = document.getElementById("event3Success");

  event3Buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.dataset.correct === "true";

      if (isCorrect) {
        // Hide wrong popup if open
        if (event3WrongOverlay) {
          event3WrongOverlay.style.display = "none";
        }

        // Show success overlay
        if (event3SuccessOverlay) {
          event3SuccessOverlay.style.display = "flex";
          window.scrollTo(0, 0);
        }
      } else {
        // Show the wrong-answer popup
        if (event3WrongOverlay) {
          event3WrongOverlay.style.display = "flex";
        }
      }
    });
  });

  // EVENT 3: "TRY AGAIN" BUTTON (WRONG POPUP)
  const event3TryAgainBtn = document.getElementById("event3TryAgainBtn");

  if (event3TryAgainBtn && event3WrongOverlay) {
    event3TryAgainBtn.addEventListener("click", () => {
      event3WrongOverlay.style.display = "none";
    });
  }

  // EVENT 3: "SEE RESULTS" BUTTON (SUCCESS SCREEN)
  const toFinalBtn = document.getElementById("toFinalBtn");

  if (toFinalBtn) {
    toFinalBtn.addEventListener("click", () => {
      // Hide success overlay
      if (event3SuccessOverlay) {
        event3SuccessOverlay.style.display = "none";
      }

      // Show final screen if you add one later
      const finalScreen = document.getElementById("finalScreen");
      if (finalScreen) {
        showScreen("finalScreen");
      } else {
        console.log("Final screen not built yet – add <section id='finalScreen' class='screen'> later.");
      }
    });
  }
});
