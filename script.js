// ================= SLIDESHOW =================
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    index++;
    if (index >= slides.length) index = 0;
    slides[index].classList.add("active");
      
}


// ================= MOBILE MENU =================
document.querySelector(".menu-toggle").onclick = function() {
    document.querySelector(".navbar ul").classList.toggle("show");
};

// ================= DARK MODE =================
document.getElementById("theme-toggle").onclick = function() {
    document.body.classList.toggle("dark");
};

// ================= LIGHTBOX =================
let galleryImages = document.querySelectorAll(".grid img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach(img => {
    img.onclick = function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    };
});

document.getElementById("close").onclick = function() {
    lightbox.style.display = "none";
};

// ================= SCROLL ANIMATION =================
let elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        } 
   
});
    });
