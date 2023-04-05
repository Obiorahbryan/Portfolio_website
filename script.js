const burger = document.querySelector('#burger');
const menu = document.querySelector('.nav-fall');


burger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
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