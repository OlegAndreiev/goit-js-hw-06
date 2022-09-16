// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//     если неправильное - красным.

// Для добавления стилей, используй CSS - классы valid и invalid, которые
// мы уже добавили в исходные файлы задания.

const input = document.querySelector('input');
const textInput = document.querySelector('input#validation-input');
const dataLength = document.querySelector('input[data-length="6"]');

textInput.addEventListener('blur', () => {
  const countSymbols = textInput.value.length;
  const validSymbols = dataLength.getAttribute('data-length');
  if (countSymbols === Number(validSymbols)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
  //   console.log(typeof countSymbols);
  //   console.log(typeof Number(validSymbols));
});
