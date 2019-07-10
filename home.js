function alert_name() {
  var name = "Michaela";
  alert("My name is " + name);
  console.log("Test 123");
}

function change_image(){
  var image = document.getElementById('sunset_id');
  image.src = "beach.jpg";
}

function increase_size(){
  var image = document.getElementById('sunset_id');
  image.style.width = "400px";
}

function decrease_size(){
  var image = document.getElementById('sunset_id');
  image.style.width = "200px"
}
