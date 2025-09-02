<!DOCTYPE html>

<html>

<head>

  <title>JavaScript Example</title>

</head>

<body>

  <h1>JavaScript Program Example</h1>

  

  <p id="message">Click the button to see magic!</p>

  

  <button onclick="showMessage()">Click Me</button>

  

  <script>

    // JavaScript program

    function showMessage() {

      let name = prompt("Enter your name:");

      document.getElementById("message").innerHTML = "Hello, " + name + "! Welcome to JavaScript!";

    }

  </script>

</body>

</html>