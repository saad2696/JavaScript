var array = ['Saad','Ahmed','Rajput','Paracha'];
 for( var i=0 ; i< array.length; i++){
     console.log(array[i]);
 }
console.log('inverted list')
 //inverted list
for( var x = array.length-1 ; x>=0 ;x--){
    console.log(array[x]);

}
console.log("for in loop")
//for in loop
for (var index in array){
    console.log(array[index])
}

//ECMA 6  have let symbol 
if(true){
    var symbolName = "Value refrence in memory"
    let  letSymbol = "Scoped value"
    const symName =  'const value in memory'
}
//VARIABLE dont respect conditional scope
//Let respects the scope of conditional execution 
//variable repect scope of functions only 

