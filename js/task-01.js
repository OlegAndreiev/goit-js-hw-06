// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const countOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${countOfCategories.length}`);
const infoForEachCategory = countOfCategories => {
  countOfCategories.forEach(category => {
    const nameOfCategories = category.firstElementChild.textContent;
    console.log(`Category: ${nameOfCategories}`);
    const countOfElements = category.querySelectorAll('li');
    console.log(`Elements: ${countOfElements.length}`);
  });
};

infoForEachCategory(countOfCategories);
