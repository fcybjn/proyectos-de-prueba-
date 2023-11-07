const gallery = document.querySelector(".gallery");
const containerIMG = document.querySelector(".lightbox");
const img = document.querySelector(".show-img");
const button = document.querySelector(".btn");

gallery.addEventListener("click", (e) => {
    if (e.target.matches(".gallery__jpg")) {
        img.src = e.target.src;
        containerIMG.classList.add("show");
    }
});

button.addEventListener("click", function() {
    containerIMG.classList.remove("show");
});
