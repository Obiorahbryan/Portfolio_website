const burger = document.querySelector('#burger');
const menu = document.querySelector('.nav-fall');
const content = document.querySelector('.fall-com');


burger.addEventListener('click', () => {
    menu.style.height = menu.style.height === '100%' ? '0' : '100%';
});

content.addEventListener('click', () => {
    menu.style.height = menu.style.height === '100%' ? '0' : '100%';
    burger.checked = false;
});

/*Click to hide here*/
const hiddenText = document.querySelector(".hide-text");
const showHide = document.querySelector(".show-hide");
const midSec = document.querySelector('.mid-sec');

showHide.addEventListener('click', function () {
    hiddenText.style.display = hiddenText.style.display === 'block' ? 'none' : 'block';
    showHide.innerHTML = showHide.innerHTML === 'read more...' ? 'show less...' : 'read more...';
    midSec.style.height = midSec.style.height === '1300px' ? '850px' : '1300px';
});

/*Onload section*/
const textContainer = document.getElementById("text-container");
const mainContent = document.getElementById("main-content");

// Define the text to be typed out
const text = "<Obiorah Bryan/>";

// Define the time to wait before displaying the "Hello World" message
const waitTime = 3 * 1000; // 3 minutes in milliseconds

// Start typing out the text
let i = 0;
const typeInterval = setInterval(() => {
textContainer.textContent += text[i];
i++;
    if (i === text.length) {
        clearInterval(typeInterval);
        // Wait for the specified time before displaying the "Hello World" message
        setTimeout(() => {
        // Remove the text and background color
        textContainer.style.display = "none";
        document.body.style.backgroundColor = "white";

        }, waitTime);
    }
}, 100);