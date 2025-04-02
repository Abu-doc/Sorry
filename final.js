document.addEventListener("DOMContentLoaded", function () {
    const yesButtons = document.querySelectorAll(".yes-btn");
    const gifSection = document.getElementById("gifSection");
    const bgMusic = document.getElementById("bgMusic");

    // Play background music
    bgMusic.volume = 0.5; // Adjust volume
    bgMusic.play();

    yesButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Hide options and show GIF
            document.querySelector(".options").style.display = "none";
            gifSection.style.display = "block";

            // Add cute emoji shower
            createEmojiShower();
        });
    });

    function createEmojiShower() {
        const emojis = ["💖", "💜", "✨", "💕", "🌸", "🥺"];
        setInterval(() => {
            let emoji = document.createElement("div");
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = "absolute";
            emoji.style.fontSize = "30px";
            emoji.style.top = Math.random() * window.innerHeight + "px";
            emoji.style.left = Math.random() * window.innerWidth + "px";
            emoji.style.opacity = 0;
            emoji.style.transition = "opacity 1s ease-in-out";
            document.body.appendChild(emoji);
            setTimeout(() => emoji.style.opacity = 1, 50);
            setTimeout(() => emoji.remove(), 3000);
        }, 300);
    }
});
