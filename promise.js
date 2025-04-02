document.addEventListener("DOMContentLoaded", function () {
    const promisesContainer = document.querySelector(".promises");
    const nextButton = document.querySelector(".next-btn");
    const musicToggle = document.getElementById("musicToggle");
    const bgMusic = document.getElementById("bgMusic");
    const stickyNote = document.getElementById("stickyNote");
    const sorryGif = document.getElementById("sorryGif");

    // Show Next Button Only After Scrolling
    promisesContainer.addEventListener("scroll", function () {
        if (promisesContainer.scrollTop + promisesContainer.clientHeight >= promisesContainer.scrollHeight) {
            nextButton.style.visibility = "visible";
        }
    });

    // Floating Hearts Effect
    function createFallingHearts() {
        const heartsContainer = document.querySelector(".hearts-container");

        setInterval(() => {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💕";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 400);
    }

    createFallingHearts();

    // Music Toggle
    musicToggle.addEventListener("click", function () {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.innerText = "🔊";
        } else {
            bgMusic.pause();
            musicToggle.innerText = "🔇";
        }
    });

    // Toggle the Sorry GIF when clicking the sticky note
    stickyNote.addEventListener("click", function () {
        sorryGif.style.display = (sorryGif.style.display === "none" || sorryGif.style.display === "") ? "block" : "none";
    });

    // Floating effect for promises (extra cute vibes ✨)
    const floatingPromises = document.querySelectorAll(".promise");
    floatingPromises.forEach(promise => {
        promise.style.animationDelay = Math.random() * 2 + "s";
    });

    // **🔥 100% Smooth Auto-Scroll Fix**
    function autoScroll() {
        let scrollSpeed = 1; // Adjust for smoothness (1 is slow, 2 is normal)
        let scrollInterval = setInterval(() => {
            if (promisesContainer.scrollTop + promisesContainer.clientHeight < promisesContainer.scrollHeight) {
                promisesContainer.scrollBy(0, scrollSpeed); // Scroll down gradually
            } else {
                clearInterval(scrollInterval); // Stop scrolling at the bottom
                setTimeout(() => {
                    promisesContainer.scrollTo({ top: 0, behavior: "smooth" }); // Smooth reset to top
                    setTimeout(autoScroll, 2000); // Restart after 2 seconds
                }, 1000);
            }
        }, 30); // Slower updates for ultra-smooth scroll
    }

    autoScroll(); // Start the auto-scrolling magic ✨
});
