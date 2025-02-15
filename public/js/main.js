var direction = "smaller";

function changeRadius() {
  var radius = document.getElementById("circle1").getAttribute("r");
  if (radius <= 1){
    direction = "bigger";
  }
  if (radius >= 200){
    direction = "smaller";
    radius = 200;
  }
  if (direction == "smaller"){
    var roc;
    if (radius/10 > 1){
      roc = radius/10;
    }
    else{
      roc = 0.1
    }
    document.getElementById("circle1").setAttribute("r", String (Number(radius) - radius/100));
  }
  if (direction == "bigger"){
    document.getElementById("circle1").setAttribute("r", String (Number(radius) + (radius/100)));
  }
  console.log(radius);
  setTimeout(changeRadius, 5);
}