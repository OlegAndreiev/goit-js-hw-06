// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredients = document.querySelector('#ingredients');

const countOfElements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});
listOfIngredients.append(...countOfElements);

// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement('li');
//   li.textContent = ingredients[i];
//   li.classList.add('item');
//   list.append(li);
// }

// ingredients.forEach(element => {
//   const li = document.createElement('li');
//   li.textContent = element;
//   li.classList.add('item');
//   listOfIngredients.append(li);
// });

// console.log(listOfIngredients);
