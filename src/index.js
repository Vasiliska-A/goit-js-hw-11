import './sass/main.scss';

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





//delay function

const delay = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms


//toggleUserState function
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username,) => {
    return new Promise((resolve, reject) => {
        const updatedUsers = allUsers.map(user =>
            user.name === username ? { ...user, active: !user.active } : user
        );
        resolve(updatedUsers);
    });
  
};
const result =  updatedUsers => console.table(updatedUsers);


// Currently the function works like this
// toggleUserState(users, 'Mango', console.table);
// toggleUserState(users, 'Ajax', console.table);

// The function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Poly').then(console.table);
