 // Function to append a value to the result input
 function appendToResult(value) {
    document.getElementById('result').value += value;
  }

  // Function to clear the result input
  function clearResult() {
    document.getElementById('result').value = '';
  }

  // Function to calculate the result
  function calculateResult() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
  }