const textArray = ["Backend Designer", "SEO", "Web Designer",];

let textIndex = 0;
let isTyping = true;

function animateText() {
    const typeElement = document.querySelector('#type');
    const currentText = textArray[textIndex];
    const currentLength = typeElement.textContent.length;

    if (isTyping) {

        typeElement.textContent = currentText.substring(0, currentLength + 1);

        if (currentLength == typeElement.textContent.length) {
            setTimeout(() => {
                isTyping = false;
            }, 1000);
        }
    }

    if (!isTyping) {

        typeElement.textContent = currentText.substring(0, currentLength - 1);
        if (0 == typeElement.textContent.length) {
            isTyping = true;
            textIndex = (textIndex + 1) % textArray.length;
        }
    }
}

setInterval(animateText, 100);