// Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты.

// Если пользователь выбрал дату в прошлом, необходимо показать уведомление "Please choose a date in the future".
// Используй библиотеку sweetalert2.
// Кнопка должа быть не активна до тех пор, пока пользователь не выбрал дату в будущем.
// Если выбрана валидная дата и пользователь нажал кнопку - начинается отсчет времени.
// Скрипт должен вычислять раз в секунду сколько времени осталось до указанной даты и обновлять интерфейс, 
// показывая четыре цифры: дни, часы, минуты и секунды в формате xx: xx: xx: xx.

// Количество дней может состоять из более чем двух цифр.
// Таймер должен останавливаться когда дошел до конечной даты, то есть 00:00:00:00.
// Для подсчета значений используй готовую функцию, где ms - разница между конечной и текущей датой в миллисекундах.

const refs = {
    inputData: document.getElementById('date-selector'),
    startButton: document.querySelector('.timer-button'),
    timerContainer: document.querySelector('.timer'),
    dataField: document.querySelector('.field'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
  
}




class Timer  {
    constructor({ onTick }){
        this.intervalID = null,
            this.isActive = false,
            this.onTick = onTick;
    }

    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;

        this.intervalID = setInterval(() => {
            const enteredDate = new Date(document.getElementById('date-selector').value);
            const inputDate = enteredDate.getTime();
            const currentDate = new Date();


            const ms = inputDate - currentDate;
            const time = this.convertMs(ms);

            this.onTick(time);

        }, 1000);

    }

     pad(value){
        return String(value).padStart(2, '0');
    }

     convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

}


const timer = new Timer({
    onTick: changeTimerNumbers,
});

function changeTimerNumbers({ days, hours, minutes, seconds }) {
    refs.dataDays.textContent = `${days}`;
    refs.dataHours.textContent = `${hours}`;
    refs.dataMinutes.textContent = `${minutes}`;
    refs.dataSeconds.textContent = `${seconds}`;
}
 
 refs.startButton.addEventListener('click', timer.start.bind(timer));


















// function getUserInputTime() {
//    const enteredDate = document.getElementById('date-selector').value;
//     return enteredDate;
//     console.log(enteredDate); 
// }