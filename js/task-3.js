const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  let inputValue = event.target.value.trim();

  if (inputValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = inputValue;
  }
});
