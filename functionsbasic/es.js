function MakeCoffee(sugar,milk){
    var instruction = "Boil the water";
    instruction += " pour into the cup";
    instruction+=" add coffee granuales"
    instruction+=" add "+sugar+" spoons of sugar";
    instruction+= " add "+milk+"% milk"
    return instruction;
} 
console.log(MakeCoffee(2,30));


//embeded functions 
function name(){
 var fullname = "Saad Ahmed"
 function  concat(name){
var conName = "Mr. "+name 
return conName
 }
 return concat(fullname)
}

console.log(name());

//callable embeded functions //call functions with-in a function 

function car(name){
    return name();
}
console.log(car(function(){
    return "Audi"
}))