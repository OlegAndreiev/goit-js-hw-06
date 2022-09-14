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
