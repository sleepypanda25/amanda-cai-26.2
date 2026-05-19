const footerElement = document.createElement("p");
footerElement.className = "footer";
footerElement.innerHTML = "This is a footer";
document.body.appendChild(footerElement);

const today = new Date("May 17, 2026 10:18:00");
const thisYear = today.getFullYear();

const footer = document.querySelector(".footer");

const copyright = document.createElement("p");
copyright.className = "copyright";
copyright.innerHTML = `Amanda Cai ${thisYear}`;
document.body.appendChild(copyright);

const skills = ["Java", "Python", "C", "JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.querySelector(".skills");
const skillsList = skillsSection.querySelector(".skills-list");

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = `${skills[i]}`;
    skillsList.appendChild(skill);
}