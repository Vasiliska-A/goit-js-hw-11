//Color switcher
    const pageBackground= document.querySelector('body')
    const startButton = document.querySelector('[data-start]')
    const stopButton = document.querySelector('[data-stop]')

startButton.addEventListener('click', getStartButtonnWork);
stopButton.addEventListener('click', stopChangeBgColor)

let intervalId = null;
let startButtonIsActive = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getStartButtonnWork() {
 intervalId = setInterval(changeBgColor, 1000);
}


function changeBgColor() {
    startButton.setAttribute('disabled', true);
    let bgColor = getRandomHexColor();
    pageBackground.style.backgroundColor = bgColor;
     
          
}

function stopChangeBgColor() {
    startButton.removeAttribute('disabled');
    clearInterval(intervalId);

}