const textArray = ["Software Engineer", "Full-Stack Developer", "Backend Developer", "Frontend Developer", "SEO", "Web Designer"];

let textIndex = 0;
let isTyping = true;
let textArrayIndex = 0;

function animateText() {
    let text = textArray[textArrayIndex];
    let textLength = text.length;
    const typeElement = document.querySelector('#type');
    if (isTyping) {
        typeElement.textContent = text.substring(0, typeElement.textContent.length + 1)
        if (typeElement.textContent.length == textLength) {
            isTyping = false;
        }
    } else if (!isTyping) {
        typeElement.textContent = text.substring(0, typeElement.textContent.length - 1)
        if (typeElement.textContent.length === 0) {
            if (textArrayIndex == textArray.length - 1) {
                textArrayIndex = 0;
            } else {
                textArrayIndex++;
            }
            isTyping = true;
        }
    }
}

setInterval(animateText, 300);

let blink_Text = document.querySelector('#blink_Text')
let text = blink_Text.textContent;
setInterval(() => {
    blink_Text.textContent == text ? blink_Text.textContent = '' : blink_Text.textContent = text;
}, 200)