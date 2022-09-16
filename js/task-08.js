// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением
// о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери
// значения полей в обьект, где имя поля будет именем свойства,
//     а значение поля - значением свойства.Для доступа к элементам
//     формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения
//  полей формы методом reset.

const form = document.querySelector('.login-form');
const input = document.querySelectorAll('input');
form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const dataOutput = {
    email: email.value,
    password: password.value,
  };
  input.forEach(element => {
    if (element.value === '') {
      alert('Все поля должны быть заполнены.');
    }
  });
  //   const keys = Object.keys(dataOutput);
  //   for (const key of keys) {
  //     if (dataOutput[key] === '') {
  //       alert('Все поля должны быть заполнены.');
  //     }
  //   }
  console.log(dataOutput);
  event.currentTarget.reset();
});
