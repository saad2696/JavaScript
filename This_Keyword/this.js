//this bby default point to window object
//inside embeded functions in object and array this points to locally to array and object
//context change to local
var object= {
    prop: this,
    method : function(){return this},
    embeded: {
        embed: true, 
        method: function(){ return this }
    }
}

var array = [
    this,
    function(){return this}
]

function global(){
    return this;
}

//functions are treated as object 
//means this = object in global function
//context of this change to object
global.call(object)
// we want this to point to something new so this = {}
new global();

//to change this context 
var cntxt = object.embeded.method.call(array);
console.log(cntxt);

//or 
var cntxt2 = object.embeded.method.call(object)
console.log(cntxt2);

//embeded function within another function this will point to window

function emb(){
    console.log("from emb",this)
    function inside(){console.log("from inside",this)}
    inside(); //this in this will point to window
}

new emb();

