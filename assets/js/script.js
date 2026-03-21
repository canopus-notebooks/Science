let current = 0;
let revealIndex = 0;
let autoPlay = null;

function loadLesson() {
  if (typeof lessonData === "undefined") {
    document.getElementById("slidesContainer").innerHTML =
      '<p style="color:red; font-weight:bold;">Error: lessonData was not loaded.</p>';
    return;
  }

  document.getElementById("lessonTitle").innerHTML = lessonData.title || "";
  document.getElementById("lessonInfo").innerHTML = lessonData.info || "";

  const container = document.getElementById("slidesContainer");
  container.innerHTML = "";

  if (!lessonData.slides || !lessonData.slides.length) {
    container.innerHTML =
      '<p style="color:red; font-weight:bold;">Error: No slides found in lessonData.</p>';
    return;
  }

  lessonData.slides.forEach((slide, i) => {
    let html = `
      <div class="top-controls">
        <button type="button" onclick="goHome()">🏠 Home</button>
        <button type="button" onclick="restartLesson()">🔄 Restart</button>
      </div>

      <button
        class="reveal-arrow reveal-left"
        type="button"
        aria-label="Previous animation"
        onclick="event.stopPropagation(); revealPrevStep();"
      >❮</button>

      <button
        class="reveal-arrow reveal-right"
        type="button"
        aria-label="Next animation"
        onclick="event.stopPropagation(); revealNextStep();"
      >❯</button>

      <h2 class="reveal-item">${slide.title || ""}</h2>
    `;

    if (slide.text) {
      html += `<p class="lead reveal-item">${slide.text}</p>`;
    }

    if (slide.image) {
      html += `<img src="${slide.image}" class="main-image reveal-item" alt="${stripHtml(slide.title || "")}">`;
    }

    if (slide.bullets && slide.bullets.length) {
      html += `<ul class="info-list">`;
      slide.bullets.forEach(item => {
        html += `<li class="reveal-item">${item}</li>`;
      });
      html += `</ul>`;
    }

    if (slide.sections && slide.sections.length) {
      html += `<div class="sections-wrap">`;
      slide.sections.forEach(section => {
        html += `
          <div class="section-box reveal-item">
            <h3 class="section-title">${section.heading || ""}</h3>
        `;

        if (section.text) {
          html += `<p class="section-text">${section.text}</p>`;
        }

        if (section.bullets && section.bullets.length) {
          html += `<ul class="section-list">`;
          section.bullets.forEach(item => {
            html += `<li>${item}</li>`;
          });
          html += `</ul>`;
        }

        html += `</div>`;
      });
      html += `</div>`;
    }

    if (slide.cards && slide.cards.length) {
      html += `<div class="grid">`;
      slide.cards.forEach(card => {
        html += `
          <div class="card reveal-item">
            <img src="${card.image}" alt="${stripHtml(card.title || "")}">
            <h3>${card.title || ""}</h3>
            <p>${card.text || ""}</p>
          </div>
        `;
      });
      html += `</div>`;
    }

    const div = document.createElement("div");
    div.className = "slide";
    if (i === 0) div.classList.add("active");
    div.innerHTML = html;
    container.appendChild(div);
  });

  showSlide(0);
  setupSlideClick();
}

function stripHtml(value) {
  const temp = document.createElement("div");
  temp.innerHTML = value;
  return temp.textContent || temp.innerText || "";
}

function getSlides() {
  return document.querySelectorAll(".slide");
}

function getActiveSlide() {
  return document.querySelector(".slide.active");
}

function getRevealItems() {
  const activeSlide = getActiveSlide();
  return activeSlide ? activeSlide.querySelectorAll(".reveal-item") : [];
}

function applyRevealState() {
  const items = getRevealItems();

  items.forEach((item, index) => {
    if (index < revealIndex) {
      item.classList.add("visible");
    } else {
      item.classList.remove("visible");
    }
  });
}

function resetReveal() {
  const items = getRevealItems();
  revealIndex = items.length > 0 ? 1 : 0;
  applyRevealState();
}

function showSlide(i) {
  const slides = getSlides();

  if (!slides.length) return;
  if (i < 0 || i >= slides.length) return;

  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");

  current = i;

  document.getElementById("counter").textContent =
    "Slide " + (i + 1) + " of " + slides.length;

  document.getElementById("progressBar").style.width =
    ((i + 1) / slides.length) * 100 + "%";

  resetReveal();
}

function nextSlide() {
  if (current < lessonData.slides.length - 1) {
    showSlide(current + 1);
  } else {
    pauseSlides();
  }
}

function prevSlide() {
  if (current > 0) {
    showSlide(current - 1);
  }
}

function revealNextStep() {
  const items = getRevealItems();

  if (!items.length) {
    nextSlide();
    return;
  }

  if (revealIndex < items.length) {
    revealIndex++;
    applyRevealState();
    return;
  }

  if (current < lessonData.slides.length - 1) {
    showSlide(current + 1);
  } else {
    pauseSlides();
  }
}

function revealPrevStep() {
  const items = getRevealItems();

  if (!items.length) return;

  if (revealIndex > 1) {
    revealIndex--;
    applyRevealState();
    return;
  }

  if (current > 0) {
    showSlide(current - 1);
    const previousItems = getRevealItems();
    revealIndex = previousItems.length;
    applyRevealState();
  }
}

function setupSlideClick() {
  const container = document.getElementById("slidesContainer");
  if (!container) return;

  container.addEventListener("click", function (e) {
    if (
      e.target.closest(".reveal-arrow") ||
      e.target.closest(".top-controls") ||
      e.target.closest(".toolbar")
    ) {
      return;
    }
    revealNextStep();
  });
}

function playSlides() {
  if (autoPlay) return;

  autoPlay = setInterval(() => {
    revealNextStep();
  }, 1400);
}

function pauseSlides() {
  clearInterval(autoPlay);
  autoPlay = null;
}

function restartLesson() {
  pauseSlides();
  showSlide(0);
}

function goHome() {
  pauseSlides();
  window.location.href = "index.html";
}

function toggleFullScreen() {
  const page = document.documentElement;

  if (!document.fullscreenElement) {
    if (page.requestFullscreen) {
      page.requestFullscreen().catch(err => {
        console.log("Fullscreen error:", err);
      });
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(err => {
        console.log("Exit fullscreen error:", err);
      });
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadLesson);
} else {
  loadLesson();
}
