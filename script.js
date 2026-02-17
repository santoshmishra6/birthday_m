
/* ===== Typing Effect ===== */
const texts = [
    "To the most beautiful soul 💖",
    "My Forever & Always ❤️",
    "8 March 2026 — A Special Day ✨",
];

let count = 0;
let index = 0;

function typeEffect() {
    if (count === texts.length) count = 0;
    let currentText = texts[count];
    document.getElementById("typing").textContent = currentText.slice(
        0,
        ++index,
    );

    if (index === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
        }, 1500);
    }
}
setInterval(typeEffect, 100);

/* ===== Countdown ===== */
const birthday = new Date("March 8, 2026 00:00:00").getTime();

setInterval(function () {
    const now = new Date().getTime();
    const distance = birthday - now;

    document.getElementById("days").innerHTML = Math.floor(
        distance / (1000 * 60 * 60 * 24),
    );
    document.getElementById("hours").innerHTML = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    document.getElementById("minutes").innerHTML = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60),
    );
    document.getElementById("seconds").innerHTML = Math.floor(
        (distance % (1000 * 60)) / 1000,
    );
}, 1000);

/* ===== Auto Scroll + Touch Scroll ===== */
const gallery = document.getElementById("galleryWrapper");

let autoScroll = setInterval(() => {
    gallery.scrollLeft += 0.5;
    if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
        gallery.scrollLeft = 0;
    }
}, 20);

/* Pause on Hover */
gallery.addEventListener("mouseenter", () => {
    clearInterval(autoScroll);
});
gallery.addEventListener("mouseleave", () => {
    autoScroll = setInterval(() => {
        gallery.scrollLeft += 1;
        if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
            gallery.scrollLeft = 0;
        }
    }, 20);
});

/* Mouse Drag */
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
});
gallery.addEventListener("mouseleave", () => (isDown = false));
gallery.addEventListener("mouseup", () => (isDown = false));
gallery.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2;
    gallery.scrollLeft = scrollLeft - walk;
});

/* Touch Support */
gallery.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = gallery.scrollLeft;
});
gallery.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    gallery.scrollLeft = scrollLeft - walk;
});

/* ===== Quotes ===== */
const quotes = [
    "❤️ You are my most beautiful blessing.",
    "🌹 Every heartbeat whispers your name.",
    "💖 Loving you is my favorite forever.",
    "✨ 8 March 2026 — The world became brighter.",
];

let qIndex = 0;
function changeQuote() {
    document.getElementById("quote").innerHTML = quotes[qIndex];
    qIndex = (qIndex + 1) % quotes.length;
}
changeQuote();
setInterval(changeQuote, 4000);

/* Floating Hearts */
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 500);

/* ===== Countdown + Redirect Logic ===== */
const birthdayDate = new Date("February 17, 2026 00:00:00");
const birthdayTime = birthdayDate.getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayTime - now;

    if (distance <= 0) {
        // If it's March 8
        const today = new Date();
        if (today.getDate() === 17 && today.getMonth() === 1) {
            // March = 2
            document.querySelector(".header-title").innerHTML =
                "🎉 Happy Birthday My Love 🎉";
            document.getElementById("typing").innerHTML =
                "The most special day has arrived ❤️";

            setTimeout(() => {
                window.location.href = "celebration.html";
            }, 30000); // Wait 30 seconds
        } else {
            window.location.href = "celebration.html";
        }
        return;
    }

    document.getElementById("days").innerHTML = Math.floor(
        distance / (1000 * 60 * 60 * 24),
    );
    document.getElementById("hours").innerHTML = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    document.getElementById("minutes").innerHTML = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60),
    );
    document.getElementById("seconds").innerHTML = Math.floor(
        (distance % (1000 * 60)) / 1000,
    );
}

setInterval(updateCountdown, 1000);
updateCountdown();