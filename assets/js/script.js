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

  if (!lessonData.slides || !lessonData.slides.length) {
    container.innerHTML =
      '<p style="color:red; font-weight:bold;">Error: No slides found in lessonData.</p>';
    return;
  }

  lessonData.slides.forEach((slide, i) => {
    let html = `
      <div class="slide-click-layer"></div>
      <button class="reveal-arrow reveal-left" type="button" aria-label="Previous animation" onclick="event.stopPropagation(); revealPrevItem();">❮</button>
      <button class="reveal-arrow reveal-right" type="button" aria-label="Next animation" onclick="event.stopPropagation(); revealNextItem();">❯</button>
      <h2 class="reveal-item">${slide.title || ""}</h2>
    `;

    if (slide.text) {
      html += `<p class="lead reveal-item">${slide.text}</p>`;
    }

    if (slide.image) {
      html += `<img src="${slide.image}" class="main-image reveal-item" alt="${slide.title || ""}">`;
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
            <img src="${card.image}" alt="${card.title}">
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
  setupRevealClick();
}

function showSlide(i) {
  const slides = document.querySelectorAll(".slide");

  if (!slides.length) return;
  if (i < 0 || i >= slides.length) return;

  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");

  current = i;

  document.getElementById("counter").textContent =
    "Slide " + (i + 1) + " of " + slides.length;

  const progress = ((i + 1) / slides.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";

  resetReveal();
}

function resetReveal() {
  const activeSlide = document.querySelector(".slide.active");
  if (!activeSlide) return;

  const items = activeSlide.querySelectorAll(".reveal-item");
  items.forEach(item => item.classList.remove("visible"));

  revealIndex = 0;

  if (items.length > 0) {
    items[0].classList.add("visible");
    revealIndex = 1;
  }
}

function revealNextItem() {
  const activeSlide = document.querySelector(".slide.active");
  if (!activeSlide) return false;

  const items = activeSlide.querySelectorAll(".reveal-item");

  if (revealIndex < items.length) {
    items[revealIndex].classList.add("visible");
    revealIndex++;
    return true;
  }

  return false;
}

function revealPrevItem() {
  const activeSlide = document.querySelector(".slide.active");
  if (!activeSlide) return false;

  const items = activeSlide.querySelectorAll(".reveal-item");

  if (revealIndex > 1) {
    revealIndex--;
    items[revealIndex - 1].classList.remove("visible");
    return true;
  }

  return false;
}

function nextSlide() {
  if (current < lessonData.slides.length - 1) {
    current++;
    showSlide(current);
  }
}

function prevSlide() {
  if (current > 0) {
    current--;
    showSlide(current);
  }
}

function setupRevealClick() {
  const container = document.getElementById("slidesContainer");
  if (!container) return;

  container.addEventListener("click", function (e) {
    if (
      e.target.closest(".reveal-arrow") ||
      e.target.closest(".nav button")
    ) {
      return;
    }

    const activeSlide = document.querySelector(".slide.active");
    if (!activeSlide) return;

    if (activeSlide.contains(e.target)) {
      revealNextItem();
    }
  });
}

function toggleFullScreen() {
  const element = document.documentElement;

  if (!document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement) {

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

document.addEventListener("DOMContentLoaded", loadLesson);
