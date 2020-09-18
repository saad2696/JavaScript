function MakeCoffee(sugar,milk){
    var instruction = "Boil the water";
    instruction += " pour into the cup";
    instruction+=" add coffee granuales"
    instruction+=" add "+sugar+" spoons of sugar";
    instruction+= " add "+milk+"% milk"
    return instruction;
} 
console.log(MakeCoffee(2,30));