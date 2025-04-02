document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");
    const musicButton = document.createElement("button");

    function playMusic() {
        bgMusic.volume = 0.5; 
        bgMusic.play().then(() => {
            console.log("Music started playing.");
        }).catch(() => {
            console.log("Autoplay blocked. Showing play button...");
            showMusicButton();
        });
    }

    function showMusicButton() {
        musicButton.textContent = "Tap to Play Music 🎶";
        musicButton.style.position = "fixed";
        musicButton.style.top = "50%";
        musicButton.style.left = "50%";
        musicButton.style.transform = "translate(-50%, -50%)";
        musicButton.style.padding = "12px 24px";
        musicButton.style.fontSize = "18px";
        musicButton.style.fontWeight = "bold";
        musicButton.style.background = "#9c27b0"; 
        musicButton.style.color = "#fff";
        musicButton.style.border = "none";
        musicButton.style.cursor = "pointer";
        musicButton.style.borderRadius = "10px";
        musicButton.style.zIndex = "1000";
        document.body.appendChild(musicButton);

        musicButton.addEventListener("click", function () {
            bgMusic.play();
            musicButton.remove();
        });
    }

    // Try autoplay
    playMusic();

    // If user clicks anywhere on the page, try playing again
    document.body.addEventListener("click", playMusic, { once: true });

    // Other animations
    setTimeout(() => {
        document.getElementById("intro").style.opacity = "0";
    }, 2500);

    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("glitch-gif").style.display = "block";
    }, 3500);

    setTimeout(() => {
        document.getElementById("glitch-text").classList.remove("hidden");
    }, 5000);

    setTimeout(() => {
        let message = document.getElementById("message");
        message.classList.remove("hidden");
        message.style.opacity = "1";
    }, 7000);

    setTimeout(() => {
        document.querySelector(".next-btn").style.display = "inline-block";
    }, 8500);
});
