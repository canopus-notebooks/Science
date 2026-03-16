let current = 0;
let revealIndex = 0;

function loadLesson() {
  document.getElementById("lessonTitle").textContent = lessonData.title;
  document.getElementById("lessonInfo").textContent = lessonData.info;

  const container = document.getElementById("slidesContainer");
  container.innerHTML = "";

  lessonData.slides.forEach((slide, i) => {
    let html = `<h2 class="reveal-item">${slide.title}</h2>`;

    if (slide.text) {
      html += `<p class="lead reveal-item">${slide.text}</p>`;
    }

    if (slide.image) {
      html += `<img src="${slide.image}" class="main-image reveal-item" alt="${slide.title}">`;
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
}

function showSlide(i) {
  const slides = document.querySelectorAll(".slide");

  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");

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

function nextSlide() {
  const hasMoreItems = revealNextItem();

  if (!hasMoreItems && current < lessonData.slides.length - 1) {
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

window.onload = loadLesson;
