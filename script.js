
const form = document.querySelector('form');
const result = document.querySelector('.display');
const currencies = document.querySelector('select');
const input = document.querySelector('input');

const render = (info) => {
    const calculateResult = () => {
        const value = input.value;
        const rate = info.rates[currencies.value];
        result.textContent = (+value) ? (value * rate).toFixed(3) : '';
    };

    currencies.addEventListener('change', calculateResult);
    input.addEventListener('keyup', calculateResult);
}

const byPass = async () => {
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/BYN`);
        if (!response.ok)
            throw new Error('Ошибка статус-кода');
        const info = await response.json();
        render(info);
    } catch (error) {
        console.error(error.message);
    }
};

byPass();
