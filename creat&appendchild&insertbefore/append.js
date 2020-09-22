var element = document.createElement("div");
element.style.background = "red";
element.style.width = "200px";
element.style.height = "20px";

element.onclick = function () {
  alert("hello");
};
//inserting just at end
//document.body.appendChild(element);

//inserting in between 
var target = document.getElementById('yellow');
document.body.insertBefore(element,target);