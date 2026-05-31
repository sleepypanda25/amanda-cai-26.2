const footerElement = document.createElement("footer");
footerElement.className = "footer";
document.body.appendChild(footerElement);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector(".footer");

const copyright = document.createElement("p");
copyright.className = "copyright";
copyright.innerHTML = `&copy; Amanda Cai ${thisYear}`;
footer.appendChild(copyright);

const skills = ["Java", "Python", "C", "JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.querySelector(".skills");
const skillsList = skillsSection.querySelector(".skills-list");

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = `${skills[i]}`;
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(`User's Name: ${usersName}`);
    console.log(`User's Email: ${usersEmail}`);
    console.log(`User's Message: ${usersMessage}`);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><p><span>${usersMessage}</span></p>`;
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
})

fetch('https://api.github.com/users/sleepypanda25/repos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response.json();
    })
    .then(data => {
        const repositories = data;
        console.log(repositories);

        const projectSection = document.querySelector("#Projects");
        const projectList = projectSection.querySelector("ul");

        for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error('Error occurred:', error);
    })