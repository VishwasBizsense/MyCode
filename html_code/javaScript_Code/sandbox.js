document.getElementById("getElement").innerHTML="Lets start with JavaScript";

//----------------------Change html Attributes---------------
function off(){
  document.getElementById('myImage').src="/html_code/Multimedia/pic_bulboff.gif";
  alert("Bulb is turned off");
}
function on(){
  document.getElementById('myImage').src="/html_code/Multimedia/pic_bulbon.gif";
  alert("Bulb is turned on");
}

//------------Change title of page--------------------
function edit(){
  let data=document.querySelector(".myTextarea").value;
  document.querySelector(".displayDiv").innerHTML=data;
  document.querySelector(".myTextarea").value="";
}


function changeTitle() {
  var newTitle = document.getElementById("titleInput").value;

  document.title = newTitle;
}

//HTML Event handlers----------------------

const displayDate = () => {
  document.getElementById("demo").innerHTML = Date();
};

const emptyP = () => {
  document.querySelector('#demo').innerHTML='';
}
document.addEventListener("keydown", function(event) {
  // Check if the key pressed is Enter
  if (event.key === "Enter") {
    emptyP(); // Call emptyP function when Enter key is pressed
  }
});




