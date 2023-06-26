// Your code here
function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
  }
  
  // Function to move the dodger to the right
  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`
    }
  }