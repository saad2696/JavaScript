var getObj = document.getElementsByName('cars')[0];
getObj.onclick =  function (event) {
    console.log(event)
    
}


//if we have to pass multiple events we use : 
//we drop 'on' keyword from eventlistner
function  listen(event) {
    var go = document.getElementById("status");
    go.style.float = "right";
    go.style.background="yellow";
    go.innerText="I am clicked";
    console.log("i am clicked");

    
}
getObj.addEventListener('click',listen );
//getObj.removeEventListener('click',listen );
