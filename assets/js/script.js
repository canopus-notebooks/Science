let current = 0;

function loadLesson() {

document.getElementById("lessonTitle").textContent = lessonData.title;

document.getElementById("lessonInfo").textContent = lessonData.info;

const container = document.getElementById("slidesContainer");

lessonData.slides.forEach((slide, i) => {

const div = document.createElement("div");

div.className = "slide";

if (i === 0) div.classList.add("active");

div.innerHTML = `
<h2>${slide.title}</h2>
<img src="${slide.image}">
<p>${slide.text}</p>
`;

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
