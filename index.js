const screenNum = document.querySelector(".screenNum");
const keys = document.querySelector(".container-keys");
const keyOp = document.querySelector(".key--operator");
const ans = document.querySelector(".ans");
const calculator = document.querySelector(".calculator");
let keyContent;
let firstNumArr = [];

keys.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    const key = e.target;
    const action = key.dataset.action;
    keyContent = key.textContent; //content of the key
    let screenDisplay = screenNum.textContent;

    if (!action) {
      screenNum.textContent += key.textContent;
    } else {
      if (
        action === "add" ||
        action === "subtract" ||
        action === "divide" ||
        action === "multiply"
      ) {
        calculator.dataset.operator = action;
        calculator.dataset.firstValue = screenDisplay;
        screenNum.textContent += keyContent;
        // firstNumArr.push(screenDisplay);
        screenNum.textContent = "";

        key.classList.add("pressed");
      }
      if (action === "decimal") {
        screenNum.textContent += keyContent;
        return;
      }
      if (action === "calculate") {
        let firstValue = calculator.dataset.firstValue;
        console.log(firstValue);

        let operator = calculator.dataset.operator;
        let secondValue = screenNum.textContent;
        console.log(secondValue);

        ans.textContent = calculate(firstValue, operator, secondValue);
        Array.from(key.parentNode.children).forEach((k) =>
          k.classList.remove("pressed")
        );
        // k.classList.remove("pressed")
        screenNum.textContent = "";
        firstNumArr = [];
      }
      if (action === "clear") {
        console.log("clear-key");
        ans.textContent = "";
        screenNum.textContent = "";
        Array.from(key.parentNode.children).forEach((k) =>
          k.classList.remove("pressed")
        );
      }
    }

    function calculate(n1, operator, n2) {
      let result = "";

      if (operator === "add") {
        result = parseInt(n1) + parseInt(n2);
      } else if (operator === "subtract") {
        result = parseFloat(n1) - parseFloat(n2);
      } else if (operator === "multiply") {
        result = parseFloat(n1) * parseFloat(n2);
      } else if (operator === "divide") {
        result = parseFloat(n1) / parseFloat(n2);
      }
      console.log(result);
      return result;
    }
  }
});

//
// const operator = document.querySelector("operator");
// const equal = document.querySelectorAll(".equal");
// let screenStr = [];
// let arr = [];
// let total = 0;
// let validData = 0;
// let totalnew;
// let data;
// //////get valus from keys
// keys.forEach((i) => {
//   i.addEventListener("click", function (e) {
//     validData = Number(e.target.innerText);
//     data = e.target.innerText;
//     screenStr.push(data);
//     // console.log(data);
//     if (validData) {
//       screenNum.textContent += validData;
//     } else {
//       if (
//         data === "+" ||
//         data === "-" ||
//         data === "/" ||
//         data === "x" ||
//         data === "." ||
//         data === "0"
//       ) {
//         screenNum.textContent += data;
//       }
//       return;
//     }
//     arr.push(validData);

//     console.log(arr);
//   });
// });

// ///addition
// function add() {
//   for (j = 0; j < arr.length; j++) {
//     total = total + arr[j];
//   }
//   ans.textContent = total;
//   // console.log(total);
//   total = 0;
// }

// ///subtraction
// function sub() {
//   for (j = 1; j < arr.length; j++) {
//     total = arr[0];
//     console.log(total);
//     total -= arr[j];
//   }
//   ans.textContent = total;
//   // console.log(total);
// }

// function equalTo() {
//   for (let k = 0; k < screenStr.length; k++) {
//     if (screenStr[k] === "+") {
//       console.log("add");
//       add();
//     }

//     if (screenStr[k] === "-") {
//       console.log("sub");
//       sub();
//     }
//   }

//   //
// }

function clearC() {
  console.log("hi");
  screenNum.textContent = " ";
  arr = [];
}
