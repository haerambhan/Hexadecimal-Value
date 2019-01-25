var input=document.querySelector("input");
var color=document.querySelector(".color");
var button=document.querySelector("button");

function fillColor()
{
  color.style.backgroundColor="#"+input.value;
  input.value="";
}
button.addEventListener("click",fillColor);
