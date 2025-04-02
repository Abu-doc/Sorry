document.addEventListener("DOMContentLoaded", function () {
    let messagesContainer = document.getElementById("message-container");
    let nextButton = document.getElementById("next-btn");

    let messages = [
        "I know I messed up badly.",
        "It was never my intention to hurt you, Ana.",
        "I value you so much more than this one mistake.",
        "If I could take it back, I would.",
        "I understand if you’re still upset, but I just needed to say this…",
        "I'm truly, deeply sorry."
    ];

    let positions = [
        { top: "10%", left: "15%" },  
        { top: "20%", right: "10%" },
        { top: "80%", left: "10%" },
        { top: "60%", right: "15%" },
        { top: "80%", right: "10%" },
        { top: "40%", left: "10%" }  
    ];

    let index = 0;

    let clickButton = document.createElement("button");
    clickButton.innerText = "Click to hear me out...";
    clickButton.id = "click-button";
    document.body.appendChild(clickButton);

    // Style for Click Button
    clickButton.style.position = "absolute";
    clickButton.style.top = "80%";
    clickButton.style.left = "50%";
    clickButton.style.transform = "translateX(-50%)";
    clickButton.style.padding = "12px 24px";
    clickButton.style.fontSize = "18px";
    clickButton.style.border = "none";
    clickButton.style.borderRadius = "8px";
    clickButton.style.backgroundColor = "#28a745";
    clickButton.style.color = "#fff";
    clickButton.style.cursor = "pointer";
    clickButton.style.transition = "0.3s";

    clickButton.addEventListener("mouseover", function () {
        clickButton.style.backgroundColor = "#218838";
    });

    clickButton.addEventListener("mouseout", function () {
        clickButton.style.backgroundColor = "#28a745";
    });

    clickButton.addEventListener("click", function () {
        if (index < messages.length) {
            let messageDiv = document.createElement("div");
            messageDiv.className = "message";
            messageDiv.innerText = messages[index];

            messageDiv.style.position = "absolute";
            messageDiv.style.color = "white";
            messageDiv.style.backgroundColor = "#333";
            messageDiv.style.padding = "12px 18px";
            messageDiv.style.borderRadius = "8px";
            messageDiv.style.fontSize = "18px";
            messageDiv.style.fontWeight = "bold";
            messageDiv.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.3)";
            messageDiv.style.opacity = "0";
            messageDiv.style.transition = "opacity 0.5s ease-in-out";

            if (positions[index].left) {
                messageDiv.style.left = positions[index].left;
            }
            if (positions[index].right) {
                messageDiv.style.right = positions[index].right;
            }
            messageDiv.style.top = positions[index].top;

            messagesContainer.appendChild(messageDiv);
            
            // Fade-in effect
            setTimeout(() => {
                messageDiv.style.opacity = "1";
            }, 100);

            index++;

            if (index === messages.length) {
                clickButton.innerText = "Click one last time...";
            } else {
                clickButton.innerText = "Click again...";
            }
        } 

        // Show Next Button After Final Click
        if (index === messages.length) {
            setTimeout(() => {
                clickButton.style.display = "none"; // Hide the click button
                nextButton.style.display = "block"; // Make Next Button visible
                nextButton.style.opacity = "0"; // Start hidden for smooth effect
                nextButton.style.transition = "opacity 0.5s ease-in-out";

                setTimeout(() => {
                    nextButton.style.opacity = "1"; // Fade it in
                }, 200);
            }, 500);
        }
    });
});
