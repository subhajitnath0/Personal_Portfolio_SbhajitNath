const services = [
    // {
    //     name: "App Development",
    //     icon: "./New folder/App_Development.svg",
    //     description: ""
    // },
    {
        name: "Backed Design",
        icon: "./New folder/Backed_Design.svg",
        description: "Looking for a top-notch backend for your company? Look no further! I develop fully functional and high-quality backends using Node JS, Express JS, and Laravel. With my expertise, you can rest assured that your backend will be reliable and efficient. If you're interested in taking your company to the next level, connect with me today!"
    },
    {
        name: "Web Design",
        icon: "./New folder/Web_Design.svg",
        description: "With my expertise in React Js, HTML, CSS, Bootstrap, Javascript, and Laravel, I can design a website that is both exceptional and fully functional for you and your company. Contact me now to get started."
    },
    {
        name: "SEO",
        icon: "./New folder/SEO.svg",
        description: "Developing a fully SEO-friendly website is crucial for achieving top search rankings. With my expertise, your website can be optimized to its fullest potential, ensuring that your business gets the visibility it deserves. Let me help you create a website that will attract and engage your target audience, and take your online presence to the next level."
    },
];

function renderServices() {
    const serviceList = document.getElementById('service_body');

    services.forEach((service, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('service_card');

        listItem.innerHTML = `
    <div class="service_icon">
        <img src="${service.icon}" alt="${service.name}">
    </div>
    <div class="service_name">
        <h3>${service.name}</h3>
    </div>
    <div class="Description" id="service_Description_${index}">
        <p>${truncateDescription(service.description)}</p>
        ${countWords(service.description) > 10 ? `<span class="read-more colorgray" onclick="toggleText(${index})">Read more...</span>` : ""}
       
    </div>`;
        serviceList.appendChild(listItem);
    });

    truncateText();
}
function toggleText(index) {
    const description = document.getElementById(`service_Description_${index}`);
    full_description = services[index].description
    const paragraph = description.querySelector('p');
    const readMore = description.querySelector('.read-more');

    if (paragraph.classList.contains('expanded')) {
        paragraph.classList.remove('expanded');
        console.log(paragraph);
        paragraph.innerHTML = truncateDescription(full_description);
        readMore.textContent = 'Read more...';
    } else {
        paragraph.classList.add('expanded');
        paragraph.innerHTML = full_description;
        console.log(full_description);
        readMore.textContent = 'Read less';
    }
}

function countWords(sentence) {
    sentence = sentence.trim();
    const words = sentence.split(/\s+/);
    return words.length;
}

function truncateDescription(description) {

    const words = description.split(" ");
    const selectedWords = words.slice(0, 10);
    const newDescription = selectedWords.join(" ");

    return newDescription;
}

window.onload = function () {
    renderServices();
};
