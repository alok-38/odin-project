const firstNumEl = document.getElementById("firstNum");
const secondNumEl = document.getElementById("secondNum");
const answerEl = document.getElementById("answer");
const inputBtnEl = document.getElementById("sumButton");

const findTheSum = () => {
  const firstNum = Number(firstNumEl.value);
  const secondNum = Number(secondNumEl.value);
  //   Check if both inputs are valid numbers
  if (isNaN(firstNum) || isNaN(secondNum)) {
    answerEl.textContent = "Please enter valid numbers.";
  } else {
    const sum = firstNum + secondNum;
    answerEl.textContent = ` ${sum}`;
  }
};

inputBtnEl.addEventListener("click", findTheSum);
