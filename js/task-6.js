function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const amount = document.querySelector("input[type='number']");
const boxes = document.querySelector('#boxes');

function addBox() {
  boxes.insertAdjacentHTML('afterbegin', createBoxes(amount));
}

function destroyBox() {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  let code = [];
  let size = 0;
  for (let i = 0; i < amount.value; i++) {
    code.push(
      `<div id="boxes${i}" style="height: ${size}px; width: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size += 10;
  }
  return code.join('');
}

btnCreate.addEventListener('click', () => {
  if (amount.value <= 100 && amount.value >= 1) {
    destroyBox();
    addBox();
    amount.value = '';
  } else {
    alert('Please, enter a number between 1 and 100!');
    amount.value = '';
  }
});

btnDestroy.addEventListener('click', destroyBox);
