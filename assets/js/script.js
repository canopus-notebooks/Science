let current = 0;
let revealIndex = 0;

function loadLesson() {
  if (typeof lessonData === "undefined") {
    document.getElementById("slidesContainer").innerHTML =
      '<p style="color:red; font-weight:bold;">Error: lessonData was not loaded.</p>';
    return;
  }

  document.getElementById("lessonTitle").textContent = lessonData.title || "";
  document.getElementById("lessonInfo").textContent = lessonData.info || "";

  const container = document.getElementById("slidesContainer");
  container.innerHTML = "";

  lessonData.slides.forEach((slide, i) => {
    let html = `
      <!-- 🔹 TOP BUTTONS -->
      <div class="top-controls">
        <button onclick="goHome()">🏠 Home</button>
        <button onclick="restartLesson()">🔄 Restart</button>
      </div>

      <!-- 🔹 ARROWS -->
      <button class="reveal-arrow reveal-left" onclick="event.stopPropagation(); revealPrevStep();">❮</button>
      <button class="reveal-arrow reveal-right" onclick="event.stopPropagation(); revealNextStep();">❯</button>

      <h2 class="reveal-item">${slide.title || ""}</h2>
    `;

    if (slide.text) {
      html += `<p class="lead reveal-item">${slide.text}</p>`;
    }

    if (slide.image) {
      html += `<img src="${slide.image}" class="main-image reveal-item">`;
    }

    if (slide.bullets) {
      html += `<ul class="info-list">`;
      slide.bullets.forEach(item => {
        html += `<li class="reveal-item">${item}</li>`;
      });
      html += `</ul>`;
    }

    if (slide.cards) {
      html += `<div class="grid">`;
      slide.cards.forEach(card => {
        html += `
          <div class="card reveal-item">
            <img src="${card.image}">
            <h3>${card.title}</h3>
            <p>${card.text}</p>
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

function showSlide(i) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");

  current = i;

  document.getElementById("counter").textContent =
    "Slide " + (i + 1) + " of " + slides.length;

  document.getElementById("progressBar").style.width =
    ((i + 1) / slides.length) * 100 + "%";

  resetReveal();
}

function getRevealItems() {
  const activeSlide = document.querySelector(".slide.active");
  return activeSlide ? activeSlide.querySelectorAll(".reveal-item") : [];
}

function resetReveal() {
  const items = getRevealItems();
  revealIndex = items.length > 0 ? 1 : 0;

  items.forEach((item, index) => {
    item.classList.toggle("visible", index < revealIndex);
  });
}

function revealNextStep() {
  const items = getRevealItems();

  if (revealIndex < items.length) {
    revealIndex++;
    updateReveal();
  } else if (current < lessonData.slides.length - 1) {
    showSlide(current + 1);
  }
}

function revealPrevStep() {
  const items = getRevealItems();

  if (revealIndex > 1) {
    revealIndex--;
    updateReveal();
  } else if (current > 0) {
    showSlide(current - 1);
  }
}

function updateReveal() {
  const items = getRevealItems();
  items.forEach((item, index) => {
    item.classList.toggle("visible", index < revealIndex);
  });
}

function nextSlide() {
  if (current < lessonData.slides.length - 1) {
    showSlide(current + 1);
  }
}

function prevSlide() {
  if (current > 0) {
    showSlide(current - 1);
  }
}

function setupSlideClick() {
  document.getElementById("slidesContainer").addEventListener("click", e => {
    if (e.target.closest(".reveal-arrow") || e.target.closest(".top-controls")) return;
    revealNextStep();
  });
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
}

/* 🔥 NEW FUNCTIONS */

function goHome() {
  window.location.href = "index.html";
}

function restartLesson() {
  showSlide(0);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadLesson);
} else {
  loadLesson();
}
