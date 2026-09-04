let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnText = e.target.innerHTML;

    if (btnText == "=") {
      try {
        // Convert percentage signs to /100 before evaluating
        let formattedString = string.replace(/%/g, "/100");
        string = eval(formattedString).toString();
        input.value = string;
      } catch (err) {
        input.value = "Error";
        string = "";
      }
    } else if (btnText == "AC") {
      string = "";
      input.value = string;
    } else if (btnText == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += btnText;
      input.value = string;
    }
  });
});
