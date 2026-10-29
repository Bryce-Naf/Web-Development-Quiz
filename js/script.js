console.log("script.js connected!");

let buttons1 = document.querySelectorAll("#question-1 button");
buttons1.forEach(function(button){
  button.addEventListener("click", function() {
    // Remove the selected class from all buttons
    buttons1.forEach(function(btn) {
      btn.classList.remove("selected"); 
    });
    // Add the selected class to only the one that is clicked
    button.classList.add("selected");
  })
})

let buttons2 = document.querySelectorAll("#question-2 button");
buttons2.forEach(function(button){
  button.addEventListener("click", function() {
    // Remove the selected class from all buttons
    buttons2.forEach(function(btn) {
      btn.classList.remove("selected"); 
    });
    // Add the selected class to only the one that is clicked
    button.classList.add("selected");
  })
})

let buttons3 = document.querySelectorAll("#question-3 button");
buttons3.forEach(function(button){
  button.addEventListener("click", function() {
    // Remove the selected class from all buttons
    buttons3.forEach(function(btn) {
      btn.classList.remove("selected"); 
    });
    // Add the selected class to only the one that is clicked
    button.classList.add("selected");
  })
})

let buttons4 = document.querySelectorAll("#question-4 button");
buttons4.forEach(function(button){
  button.addEventListener("click", function() {
    // Remove the selected class from all buttons
    buttons4.forEach(function(btn) {
      btn.classList.remove("selected"); 
    });
    // Add the selected class to only the one that is clicked
    button.classList.add("selected");
  })
})