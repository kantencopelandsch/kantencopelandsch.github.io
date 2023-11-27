function bounce() {
   setInterval(movein, 1);
   if (x <= yBoundary && y <= xBoundary) {
      x = Math.abs((x + 50) yBoundary)
      y = Math.abs((y + (y / 2)) - xBoundary)
      document.getElementById("box").style.top = x + "px";
      document.getElementById("box").style.left = y + "px";
   } else if (x > yBoundary && y <= xBoundary) {
      x = yBoundary
      x = Math.abs((x - (x / 2)) - yBoundary)
      y = Math.abs((y + (y / 2)) - xBoundary)
      document.getElementById("box").style.top = x + "px";
      document.getElementById("box").style.left = y + "px";
   } else if (x > yBoundary && y > xBoundary) {
      y = yBoundary
      x = xBoundary
      x = Math.abs((x - (x / 2)) - yBoundary)
      y = Math.abs((y - (y / 2)) - xBoundary)
      document.getElementById("box").style.top = x + "px";
      document.getElementById("box").style.left = y + "px";
   } else if (x <= yBoundary && y > xBoundary) {
      y = xBoundary
      x = Math.abs((x + (x / 2)) - yBoundary)
      y = Math.abs((y - (y / 2)) - xBoundary)
      document.getElementById("box").style.top = x + "px";
      document.getElementById("box").style.left = y + "px";
   }
}

function movein() {
   x = x + 50
   y = y + 50
}
