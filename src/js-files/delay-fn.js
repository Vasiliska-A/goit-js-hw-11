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
