const contactForm = document.querySelector("#contactForm");


contactForm.addEventListener("submit", function(event) {


    event.preventDefault();


    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");


    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        return;
    }


    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        return;
    }


    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        return;
    }


});

name.addEventListener("input", function() {
    nameError.textContent = "";
});

email.addEventListener("input", function() {
    emailError.textContent = "";
});

message.addEventListener("input", function() {
    messageError.textContent = "";
});
