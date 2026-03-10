document.body.classList.add("light-mode");

const modeToggle = document.getElementById("modeToggle");
const cards = document.querySelectorAll(".project-card");

modeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeToggle.textContent = "Light Mode";
  } else {
    modeToggle.textContent = "Dark Mode";
  }
});

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    const soundPath = card.getAttribute("data-sound");
    const link = card.getAttribute("data-link");

    const audio = new Audio(soundPath);
    audio.play();

    setTimeout(function () {
      window.location.href = link;
    }, 600);
  });
});