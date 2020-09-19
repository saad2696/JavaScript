var array = [
    'string',
    100,
    ['embeded', 200],
    {car : "ford"},
    function(){return "function return"}
]
//Pre build Functions in javascript 

//-------------------------------------//
//array.shift() => delete at start 

array.shift();

//array.pop() => delete from bottom

array.pop();

//array.unshift() => ADD AT START 

array.unshift("abc");

//array.push() => add to end 

array.push("i am at end");

//array.splice() => first use is of delete in from any place 

array.splice(0,1)

//array.splice() => second use is of insert in from any place 

array.splice(1,0,"in center");