console.log("script.js connected!");

let result = 0

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
    
    // Now we can write different responses based on the mood
    if (answer === "A") {
      result = result + 1;
    } else if (answer === "B") {
      result = result + 2;
    } else if (answer === "C") {
      result = result + 3;
    } else if (answer === "D") {
      result = result + 4;
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
    
    // Now we can write different responses based on the mood
    if (answer === "A") {
      result = result + 4;
    } else if (answer === "B") {
      result = result + 1;
    } else if (answer === "C") {
      result = result + 2;
    } else if (answer === "D") {
      result = result + 3;
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
    
    // Now we can write different responses based on the mood
    if (answer === "A") {
      result = result + 2;
    } else if (answer === "B") {
      result = result + 4;
    } else if (answer === "C") {
      result = result + 1;
    } else if (answer === "D") {
      result = result + 3;
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
    
    // Now we can write different responses based on the mood
    if (answer === "A") {
      result = result + 2;
    } else if (answer === "B") {
      result = result + 4;
    } else if (answer === "C") {
      result = result + 3;
    } else if (answer === "D") {
      result = result + 1;
    };
  });
});