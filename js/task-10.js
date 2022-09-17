// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.При нажатии на
// кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
//  Функция создает столько < div >, сколько указано в amount и добавляет их
//  в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй
// готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);

input.addEventListener('input', countOfBoxes);
createBtn.addEventListener('click', () => createBoxes(amount));
destroyBtn.addEventListener('click', () => destroyBoxes());

let amount;
let sizeOfBox = 30;
const box = [];

function countOfBoxes() {
  amount = Number(input.value);
  return amount;
}

function createBoxes(amount) {
  sizeOfBox = 30;
  boxes.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML(
      'beforeend',
      `<div class="color" style="width: ${sizeOfBox}px; height: ${sizeOfBox}px; background-color: ${getRandomHexColor()};"></div>`
    );
    sizeOfBox += 10;
  }
  boxes.append(...box);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
