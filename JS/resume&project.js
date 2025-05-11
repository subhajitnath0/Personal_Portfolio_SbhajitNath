var workExperienceData = [
    {
        date: "Aug 2024 - Present",
        title: "Software Engineer",
        organization: "Procellence Technology",
        description: "At Procellence Technology, I am currently working as a Software Engineer. In this role, I utilize Node.js, TypeScript, MongoDB, and Google Cloud Platform (GCP) to build and maintain cloud functions and APIs for the Qynko app. This opportunity allows me to expand my skills in cloud-based solutions and work on cutting-edge technologies. I am excited to contribute to the success of Qynko and continue growing in my role."
    },
    {
        date: "April 2023 - Sep 2023",
        title: "Software Developer",
        organization: "AOF Engineering Systems, LLC",
        description: "At AOF Engineering Systems, LLC, I had an enriching experience. Working with Laravel, MySQL, JavaScript, HTML, and CSS, I managed events with the Google Calendar API and contributed to two exciting projects. I am thankful for the knowledge and experience I gained, which has been instrumental in my growth as a software developer. I am confident in my ability to succeed in future endeavors. Thank you, AOF Engineering Systems, LLC, for being a significant part of my journey."
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
        date: "Aug 2024 - Present",
        title: "Qynko - App",
        organization: "Procellence Technology",
        description: `Qynko is the ultimate platform for connecting with influencers, creators, and experts from diverse industries. Whether you're seeking personalized advice, arranging fan meetups, or just want to engage in meaningful conversations with your favorite creators, Qynko brings these experiences directly to your fingertips.`,
        link: "https://app.qynko.com/" 
    },
    {
        date: "Jul 2024 - Jul 2024",
        title: "Laravel User Role Permission Management",
        organization: "Seacom Engineering College",
        description: `The Laravel User Role Permission Management system is designed to provide an efficient and scalable way to manage user roles and permissions within a Laravel application. This system allows administrators to create and assign roles to users, and to define specific permissions for each role. With this solution, you can ensure that users have appropriate access levels based on their assigned roles, enhancing the security and functionality of your application.`,
        link: "https://github.com/subhajitnath0/Laravel-User-Role-Permission-Management"
    },    
    {
        date: "Apr 2023 - Aug 2023",
        title: "Know Your Number",
        organization: "AOF Engineering Systems, LLC",
        description: `Know Your Number is an active web application built on the Laravel framework. It helps in managing employees, analyzing clients, billable areas, and more for Know Your Numbers company.`,
    },
    {
        date: "2023",
        title: "One View",
        organization: "AOF Engineering Systems, LLC",
        description: `I work as a junior developer on this project and use Laravel and Ajax.`,
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
        title: "Virtual Drum Kit Player",
        organization: "Seacom Engineering College",
        description: `"Virtual Drum Kit Player" is a web-based drumming application that lets you play a virtual drum kit using your keyboard or mouse. Easy and fun to use for drummers of all skill levels. Start drumming now with "Virtual Drum Kit Player"!`,
        link: "https://subhajitnath0.github.io/Virtual-Drum-Kit-Player/"
    },
  
    {
        date: "2022",
        title: "Smart Dustbin",
        organization: "Seacom Engineering College",
        description: `We have a problem with too much garbage and an increasing population. This is causing environmental issues, like pollution and diseases. To help with this problem, we made a smart dustbin. It uses an ultrasonic sensor to know when to open and a motor to open the lid. It's a fun and easy way to keep your home clean and can be used for different types of waste. The dustbin will open when someone or something is nearby and close after a certain amount of time.`,
        link: "https://github.com/subhajitnath0/SmartDustbin/"
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
// console.log(projectContainer)

workExperienceContainer.innerHTML = createSectionHTML(workExperienceData);
educationContainer.innerHTML = createSectionHTML(educationData);
projectContainer.innerHTML = createSectionHTML(projectData);