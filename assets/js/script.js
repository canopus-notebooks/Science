let current = 0;

function loadLesson() {

document.getElementById("lessonTitle").textContent = lessonData.title;
document.getElementById("lessonInfo").textContent = lessonData.info;

const container = document.getElementById("slidesContainer");

lessonData.slides.forEach((slide, i) => {

let html = `<h2>${slide.title}</h2>`;

if (slide.text) {
html += `<p class="lead">${slide.text}</p>`;
}

if (slide.image) {
html += `<img src="${slide.image}" class="main-image">`;
}

if (slide.bullets) {

html += `<ul class="info-list">`;

slide.bullets.forEach(item => {
html += `<li>${item}</li>`;
});

html += `</ul>`;
}

if (slide.cards) {

html += `<div class="grid">`;

slide.cards.forEach(card => {

html += `
<div class="card">
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

}

function showSlide(i) {

const slides = document.querySelectorAll(".slide");

slides.forEach(s => s.classList.remove("active"));

slides[i].classList.add("active");

document.getElementById("counter").textContent =
"Slide " + (i + 1) + " of " + slides.length;

const progress = ((i + 1) / slides.length) * 100;

document.getElementById("progressBar").style.width = progress + "%";

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

window.onload = loadLesson;
