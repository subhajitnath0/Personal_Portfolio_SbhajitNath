const services = [
    // {
    //     name: "App Development",
    //     icon: "./New folder/App_Development.svg",
    //     description: ""
    // },
    {
        name: "Backed development",
        icon: "./New folder/Backed_Design.svg",
        description: "Looking for a dependable backend developer for your company? I craft custom, high-performance backends using Node.js, Express.js, and Laravel—designed for scalability, security, and speed. From API development and cloud integration to complex data workflows, you’ll get robust, efficient systems tailored to your business needs. Unlock reliable automation, seamless connectivity, and future-ready architecture. Let’s build the foundation for your next-level success—connect today!",
    },
    {
        name: "Frontend development",
        name: "Web Design",
        icon: "./New folder/Web_Design.svg",
        description: "Elevate your brand with stunning, user-focused web design. I blend creativity and responsive layouts to deliver fast, modern websites optimized for engagement and conversions. Using the latest in HTML, CSS, JavaScript, and UI/UX best practices, I create visually appealing experiences that look great on any device. From landing pages to full-scale platforms, let’s build your digital presence for growth and impact—connect now to launch your vision!"
    },
    {
        name: "SEO",
        icon: "./New folder/SEO.svg",
        description: "Boost your online visibility and drive targeted traffic with expert SEO services. I optimize your website for search engines using proven strategies—keyword research, technical audits, on-page enhancements, and content creation. Elevate your rankings on Google and convert searches into customers with clean code, fast load times, and powerful metadata. Let me help you outshine competitors and achieve sustainable growth with a results-driven SEO strategy built for success!"
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

}
function toggleText(index) {
    const description = document.getElementById(`service_Description_${index}`);
    full_description = services[index].description
    const paragraph = description.querySelector('p');
    const readMore = description.querySelector('.read-more');

    if (paragraph.classList.contains('expanded')) {
        paragraph.classList.remove('expanded');
        // console.log(paragraph);
        paragraph.innerHTML = truncateDescription(full_description);
        readMore.textContent = 'Read more...';
    } else {
        paragraph.classList.add('expanded');
        paragraph.innerHTML = full_description;
        // console.log(full_description);
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