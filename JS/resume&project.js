var workExperienceData = [
    {
        date: "April, 2023 - Sep, 2023",
        title: "Software Developer",
        organization: "AOF Engineering Systems, LLC",
        description: "At AOF Engineering Systems, LLC, I had an enriching experience. Working with Laravel, MySQL, JavaScript, HTML, and CSS, I managed events with the Google Calendar API and contributed to two exciting projects. I am thankful for the knowledge and experience I gained, which have been instrumental in my growth as a software developer. I am confident in my ability to succeed in future endeavors. Thank you, AOF Engineering Systems, LLC, for being a significant part of my journey."
    },

    // Add more objects if needed
];


var educationData = [
    {
        date: "2020 - 2024",
        title: "Bachelor of Technology in Computer Science and Engineering",
        organization: "Seacom Engineering College",
        description: "I spent the best 4 years at this college with no strict attendance policies, which allowed me to discover my true potential."
    },

    // Add more objects if needed
];

var projectData = [
    {
        date: "2023",
        title: "One View",
        organization: "AOF Engineering Systems ,LLC",
        description: `I work as a junior developer on this project and use Laravel and Ajax.`,
        // link: "https://softdevltd.com/demo/template/codefolio/#contact"
    },
    {
        date: "2023",
        title: "Anime",
        organization: "Seacom Engineering College",
        description: `"Anime" is a web-based food delivery application designed to provide users with a convenient platform to order food online. This project is developed using HTML, CSS, JavaScript, Node.js, and EJS (Embedded JavaScript).`,
        link: "https://github.com/subhajitnath0/Anime"
    },
    {
        date: "2023",
        title: "Virtual-Drum-Kit-Player",
        organization: "Seacom Engineering College",
        description: `"Virtual Drum Kit Player" is a web-based drumming application that lets you play a virtual drum kit using your keyboard or mouse. Easy and fun to use for drummers of all skill levels. Start drumming now with "Virtual Drum Kit Player"!`,
        link: "https://subhajitnath0.github.io/Virtual-Drum-Kit-Player/"
    },
  
    {
        date: "2022",
        title: "Smart Dustbin",
        organization: "Seacom Engineering College",
        description: `We have a problem with too much garbage and an increasing population. This is causing environmental issues, like pollution and diseases. To help with this problem, we made a smart dustbin. It uses an ultrasonic sensor to know when to open and a motor to open the lid. It's a fun and easy way to keep your home clean and can be used for different types of waste. The dustbin will open when someone or something is nearby, and close after a certain amount of time.`,
        link: "https://github.com/subhajitnath0/SmartDustbin/"
    },
    {
        date: "2022",
        title: "Employee Management System",
        organization: "Seacom Engineering College",
        description: "We use technology to work faster, save time and money. An employee management system is a software program in C that helps us get more profits with fewer employees.",
        link: "https://github.com/subhajitnath0/EMPLOYEE_MANAGEMENT_SYSTEM"
    },

    // Add more objects if needed
];


function createSectionHTML(data) {
    var sectionHTML = "";
    data.forEach(function (item) {
        sectionHTML += `
    <div class="p-2 resume_full">
        <div class="resume_part"></div>
        <div class="svg-container">
            <svg width="900" height="50" viewBox="0 0 948 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.1782 0L0 86.8696L70.1782 162H948V0H70.1782Z" fill="#26028B" />
            </svg>
            <span class="text">${item.date}</span>
        </div>
        <div class="resume_body p-4">
            <h5>${item.title}</h5>
            <h6>${item.organization}</h6>
            <p>${item.description}</p>
            ${item.link != null ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer"><button type="button" class="hire_button My_Resume  project_link">Link 🔗</button></a>` : ""}

        </div>
    </div>        `;
    });
    return sectionHTML;
}


var workExperienceContainer = document.querySelector('.work_experience');
var educationContainer = document.querySelector('.education_diplomas');
var projectContainer = document.querySelector('.project_body');
console.log(projectContainer)

workExperienceContainer.innerHTML = createSectionHTML(workExperienceData);
educationContainer.innerHTML = createSectionHTML(educationData);
projectContainer.innerHTML = createSectionHTML(projectData);