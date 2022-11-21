const message = document.querySelector('.message');
const count = document.querySelector('#count');

let number = 9;
const onLoad = () => {
    const timer = setInterval(() => {
        if (number < 0) {
            message.style.opacity = '0';
            clearInterval(timer);
        } else {
            count.innerHTML = number;
            number -= 1;
        }
    }, 1000);
};

window.onload = onLoad();
