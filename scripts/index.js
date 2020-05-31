const BACKGROUND = document.querySelector('.contant');
const COLOR_INPUT = document.querySelector('#colorInput');
const RANGE_INPUT_R = document.querySelector('#rangeInputR');
const RANGE_INPUT_G = document.querySelector('#rangeInputG');
const RANGE_INPUT_B = document.querySelector('#rangeInputB');

const colorChange = (event) => {
  const RGB = {
    red: RANGE_INPUT_R.value,
    green: RANGE_INPUT_G.value,
    blue: RANGE_INPUT_B.value,
  };
  const hex = (num) => Number(num).toString(16).padStart(2, '0');
  const hexR = hex(RGB.red);
  const hexG = hex(RGB.green);
  const hexB = hex(RGB.blue);
  let colorValue = `#${hexR}${hexG}${hexB}`;
  // COLOR_INPUT.value = colorValue;
  if (event.target === COLOR_INPUT) {
    colorValue = COLOR_INPUT.value;
  }
  COLOR_INPUT.value = colorValue;
  BACKGROUND.style.background = `linear-gradient(#ffffff, ${colorValue})`;
};

document.addEventListener('input', (event) => colorChange(event));
document.removeEventListener('input', (event) => colorChange(event));
