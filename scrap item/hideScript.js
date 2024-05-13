// var role = document.querySelector('#role');

// if(role.getAttribute('value') == 'Save'){
//     role.style.display = 'none';
// }

var x = document.getElementById("div")
var y = document.getElementById("div2")
// element.style.visibility = 'hidden';      // Hide
// element.style.visibility = 'visible';

x.style.display = "block";
y.style.display = "none" 

function myFunction() {
    if (x.style.display = "block" && y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none"
    }
  }

  function myFunction2() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }