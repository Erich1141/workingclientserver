var div=document.getElementById("test");


var isBlue="true";

div.addEventListener("click", ()=> {
isBlue=!isBlue;

if (isBlue)  {
    div.style.backgroundColor="red"
}else {

    div.style.backgroundColor="blue"
}




});