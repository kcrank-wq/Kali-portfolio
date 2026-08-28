const contactForm = document.querySelector("#contactForm");

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");

if (contactForm) {

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
}


const skillsList = document.querySelector("#skillsList");
const newSkill = document.querySelector("#newSkill");
const addSkill = document.querySelector("#addSkill");

if (skillsList && newSkill && addSkill) {

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
}



const goalsList = document.querySelector("#goalsList");
const newGoal = document.querySelector("#newGoal");
const addGoal = document.querySelector("#addGoal");

if (goalsList && newGoal && addGoal) {
    addGoal.addEventListener("click", function() {

        const goalText = newGoal.value.trim();

        if (goalText === "") {
            return;
        }

        const newItem = document.createElement("li");
        newItem.textContent = goalText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.type = "button";

        removeButton.addEventListener("click", function() {
            newItem.remove();
        });

        newItem.appendChild(removeButton);
        goalsList.appendChild(newItem);

        newGoal.value = "";
        
    });
}

const githubProfile = document.querySelector("#githubProfile");

if (githubProfile) {

    fetch("https://api.github.com/users/kcrank-wq")
        .then(function(response) {

            if (!response.ok) {
                throw new Error("GitHub information could not be loaded.");
            }

            return response.json();
        })

        .then(function(data) {

            githubProfile.innerHTML = `
                <img
                    src="${data.avatar_url}'
                    alt="GitHub profile avatar"
                    class="github-avatar">

                <h3>${data.login}</h3>

                <p>Public Repositories: ${data.public_repos}</p>

                <p>
                    <a href="${data.html_url}" target="_blank">
                        View My GitHub Profile
                    </a>
                </p>
            `;
        })

        .catch(function(error) {

            githubProfile.textContent = 
                "Sorry, the GitHub profile could not be loaded.";
            
            console.error(error);
        });
}

