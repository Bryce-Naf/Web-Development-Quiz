console.log("script.js connected!");

let result1 = 0
let result2 = 0
let result3 = 0
let result4 = 0

let buttons1 = document.querySelectorAll("#question-1 button");
buttons1.forEach(function(button){
  button.addEventListener("click", function() {
    // Remove the selected class from all buttons
    buttons1.forEach(function(btn) {
      btn.classList.remove("selected"); 
    });
    // Add the selected class to only the one that is clicked
    button.classList.add("selected");

    let answer = button.getAttribute("data-answer");
    
    if (answer === "A") {
      result1 = 1;
    } else if (answer === "B") {
      result1 = 2;
    } else if (answer === "C") {
      result1 = 3;
    } else if (answer === "D") {
      result1 = 4;
    };
  });
});

let buttons2 = document.querySelectorAll("#question-2 button");
buttons2.forEach(function(button){
  button.addEventListener("click", function() {
    // Remove the selected class from all buttons
    buttons2.forEach(function(btn) {
      btn.classList.remove("selected"); 
    });
    // Add the selected class to only the one that is clicked
    button.classList.add("selected");

    let answer = button.getAttribute("data-answer");
    
    if (answer === "A") {
      result2 = 4;
    } else if (answer === "B") {
      result2 = 1;
    } else if (answer === "C") {
      result2 = 2;
    } else if (answer === "D") {
      result2 = 3;
    };
  });
});

let buttons3 = document.querySelectorAll("#question-3 button");
buttons3.forEach(function(button){
  button.addEventListener("click", function() {
    // Remove the selected class from all buttons
    buttons3.forEach(function(btn) {
      btn.classList.remove("selected"); 
    });
    // Add the selected class to only the one that is clicked
    button.classList.add("selected");

    let answer = button.getAttribute("data-answer");
    
    if (answer === "A") {
      result3 = 2;
    } else if (answer === "B") {
      result3 = 4;
    } else if (answer === "C") {
      result3 = 1;
    } else if (answer === "D") {
      result3 = 3;
    };
  });
});

let buttons4 = document.querySelectorAll("#question-4 button");
buttons4.forEach(function(button){
  button.addEventListener("click", function() {
    // Remove the selected class from all buttons
    buttons4.forEach(function(btn) {
      btn.classList.remove("selected"); 
    });
    // Add the selected class to only the one that is clicked
    button.classList.add("selected");

    let answer = button.getAttribute("data-answer");
    
    if (answer === "A") {
      result4 = 2;
    } else if (answer === "B") {
      result4 = 4;
    } else if (answer === "C") {
      result4 = 3;
    } else if (answer === "D") {
      result4 = 1;
    };
  });
});

function displayResult(value1, value2, value3, value4) {
    let output = document.getElementById("result-text");
    let resultContainer = document.getElementById("result-container");
    let finalResult = value1 + value2 + value3 + value4;

    if (4 <= finalResult && finalResult <=6) {
      output.textContent = "Your Jedi Master is Obi-Wan Kenobi!";
    } else if (7 <= finalResult && finalResult <= 9) {
      output.textContent = "Your Jedi Master is Luke Skywalker!";
    } else if (10 <= finalResult && finalResult <= 12) {
      output.textContent = "Your Jedi Master is Mace Windu!";
    } else if (13 <= finalResult && finalResult <= 16) {
      output.textContent = "Your Jedi Master is Rey Skywalker!";
    };

    resultContainer.style.display = "block";
};

let showResult = document.getElementById("show-result");
showResult.addEventListener("click", function() {
    displayResult(result1, result2, result3, result4);
});