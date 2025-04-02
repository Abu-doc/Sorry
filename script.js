document.addEventListener("DOMContentLoaded", function() {
    const bgMusic = document.getElementById("bgMusic");

    function playMusic() {
        bgMusic.volume = 0.5; // Adjust volume
        bgMusic.play().catch(() => {
            console.log("Autoplay blocked. Waiting for user interaction...");
        });
    }

    // Try to autoplay immediately
    playMusic();

    // If autoplay fails, wait for user interaction
    document.body.addEventListener("click", playMusic, { once: true });

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
        message.classList.remove("hidden"); // Make it visible
        message.style.opacity = "1"; // Smooth fade-in effect
    }, 7000);

    setTimeout(() => {
        document.querySelector(".next-btn").style.display = "inline-block";
    }, 8500);
});
