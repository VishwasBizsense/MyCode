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




function edit(){
  let data=document.querySelector(".myTextarea").value;
  document.querySelector(".displayDiv").innerHTML=data;
  document.querySelector(".myTextarea").value="";
}


function changeTitle() {
  var newTitle = document.getElementById("titleInput").value;

  document.title = newTitle;
}
