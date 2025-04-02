document.addEventListener("DOMContentLoaded", function () {
    const puzzlePieces = document.querySelectorAll(".puzzle-piece");
    const puzzleSlots = document.querySelectorAll(".puzzle-slot");
    const nextButton = document.getElementById("nextBtn");
    const celebrationGif = document.getElementById("celebrationGif");
    const completionMessage = document.getElementById("completion-message");

    let correctPieces = 0;

    puzzlePieces.forEach(piece => {
        piece.setAttribute("draggable", "true"); // Ensure pieces are draggable
        piece.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text", e.target.id);
        });
    });

    puzzleSlots.forEach(slot => {
        slot.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        slot.addEventListener("drop", (e) => {
            e.preventDefault();
            let draggedPieceId = e.dataTransfer.getData("text");
            let draggedPiece = document.getElementById(draggedPieceId);

            // If the slot already has a piece, remove it back to the puzzle-pieces area
            if (slot.firstChild) {
                document.querySelector(".puzzle-pieces").appendChild(slot.firstChild);
            }

            slot.appendChild(draggedPiece);
            checkPuzzleCompletion();
        });
    });

    function checkPuzzleCompletion() {
        correctPieces = 0;

        puzzleSlots.forEach(slot => {
            let placedPiece = slot.firstChild;
            if (placedPiece && placedPiece.dataset.letter === slot.dataset.letter) {
                correctPieces++;
                placedPiece.classList.add("fixed"); // Remove cracks when correct
            }
        });

        if (correctPieces === puzzlePieces.length) {
            setTimeout(() => {
                completionMessage.classList.remove("hidden"); 
                celebrationGif.classList.remove("hidden"); 
                nextButton.style.visibility = "visible"; 

                triggerConfetti(); // Confetti Effect
            }, 500);
        } else {
            completionMessage.classList.add("hidden");
            celebrationGif.classList.add("hidden");
            nextButton.style.visibility = "hidden";
        }
    }

    // Falling Black Hearts Effect (keeps running)
    function createFallingHearts() {
        const heartsContainer = document.createElement("div");
        heartsContainer.classList.add("hearts-container");
        document.body.appendChild(heartsContainer);

        setInterval(() => {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "🖤"; // Black heart
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 300);
    }

    createFallingHearts();

    // 🎉 Confetti Effect 🎉
    function triggerConfetti() {
        for (let i = 0; i < 50; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }
});
