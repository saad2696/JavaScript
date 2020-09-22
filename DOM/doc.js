//DOCUMENTED OBJECT MODEL (DOM)
//returning a object / refrence of the object
var phello = document.getElementById("hello");
//way of refering , by which we can acess in innerHtml
phello.innerText = "You changed";
phello.innerHTML += " alot <h2> Hey </h2> ";
//styling in javascript
var el = document.getElementById('style');
el.style.background= "blue";
el.style.color="white";
el.style.width= "200px"
//as we have put !important in html it will be overlook js CSS