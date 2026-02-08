// Floating hearts
const createHeart = () => {
  const heart = document.createElement("div");
  heart.innerHTML = "🩵";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "float 5s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
};

setInterval(createHeart, 600);

// Heart animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    s: Math.random() * 0.5 + 0.2
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.s;
    if (star.y > canvas.height) star.y = 0;
  });

  requestAnimationFrame(animateStars);
}

animateStars();

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      sec.classList.add("active");
    }
  });
});

const images = [
  { src: "pic1.jpg", text: "Our first selfie 💫" },
  { src: "pic2.jpg", text: "Our sneak outs 💙" },
  { src: "pic3.jpg", text: "A lovely moment🫂" },
  { src: "pic4.jpg", text: "A special Mall Date💘" },
  { src: "pic5.jpg", text: "My favorite smile 🥹" }
];

let index = 0;
const slide = document.getElementById("slide");
const caption = document.getElementById("caption");

setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index].src;
  caption.innerText = images[index].text;
}, 3500);

let heartTaps = 0;

document.getElementById("blue-heart").addEventListener("click", () => {
  heartTaps++;

  if (heartTaps === 3) {
    alert(
      "Blubiee 💙\n\n" +
      "No matter the distance,\n" +
      "No matter the time,\n" +
      "I choose you.\n\n" +
      "Always."
    );
    heartTaps = 0; // reset so she can do it again
  }
});
const startBtn = document.getElementById("start-btn");
const music = document.getElementById("bg-music");
const overlay = document.getElementById("music-overlay");

startBtn.addEventListener("click", () => {
  music.play();
  overlay.style.display = "none";
});


