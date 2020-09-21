function Apple(x,y,color,score){
    this.x = x;
    this.y = y;
    this.color= color;
    this.score= score;
}

function thr(){
var a = 10 ;
return a ; 
}
//prototype gives a shared object 
Apple.prototype ={
  eat(){return this}
};

var apple1=  new Apple(10,20,'red',200);
console.log(apple1)
console.log('WE ARE PROTO' , apple1.eat())  ; //PROTOTYPING!
var apple2=  new Apple(30,50,'green',100);
console.log(apple2);
//ANOTHER WAY 
Apple.prototype.eat = function () {return "new apple eaten!!!"
    
}
console.log('WE ARE new PROTO, ' , apple2.eat()) 


