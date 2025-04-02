document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const passwordInput = document.getElementById("passwordInput");
    const passwordSection = document.getElementById("passwordSection");
    const messageContainer = document.getElementById("messageContainer");
    const customAlert = document.getElementById("customAlert");
    const closeAlertBtn = document.getElementById("closeAlert");

    // Correct password (change if needed)
    const correctPassword = "winter";

    submitBtn.addEventListener("click", function () {
        let inputPassword = passwordInput.value.trim().toLowerCase(); // Trim spaces & lowercase

        if (inputPassword === correctPassword) {
            // Hide password section and show the secret message
            passwordSection.classList.add("hidden");
            messageContainer.classList.remove("hidden");

            // Ensure the message remains visible
            messageContainer.style.display = "flex";
        } else {
            // Show custom alert for wrong password
            customAlert.classList.remove("hidden");
        }
    });

    // Close alert when clicking OK
    closeAlertBtn.addEventListener("click", function () {
        customAlert.classList.add("hidden");
    });

    // Allow "Enter" key to submit password
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            submitBtn.click(); // Trigger button click
        }
    });
});
