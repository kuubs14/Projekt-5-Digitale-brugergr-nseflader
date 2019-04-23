function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 300;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 570) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.right = pos + "px"; 
    }
  }
}