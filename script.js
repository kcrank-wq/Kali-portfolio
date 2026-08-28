const contactForm = document.querySelector("#contactForm");

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");

contactForm.addEventListener("submit", function(event) {


    event.preventDefault();


    let isValid = true;


    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }


    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    }


    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }

    if (!isValid) {
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

const skillsList = document.querySelector("#skillsList");
const newSkill = document.querySelector("#newSkill");
const addSkill = document.querySelector("#addSkill");

addSkill.addEventListener("click", function() {

    const skillText = newSkill.value.trim();

    if (skillText === "") {
        return;
    }

    const newItem = document.createElement("li");
    newItem.textContent = skillText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        newItem.remove();
    });

    newItem.appendChild(removeButton);
    skillsList.appendChild(newItem);

    newSkill.value = "";
});

