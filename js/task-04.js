// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incrementBtn.addEventListener('click', () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
  console.log(counterValue);
});

decrementBtn.addEventListener('click', () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
  console.log(counterValue);
});
