var car = { 
    color : "Red",
    make : "Nissan", 
    speed: 165,
    drive : function(){
        return "drive"
    },
    engine: {
        size: 2.0 ,
        type: "petrol",
        pistons: [{maker:"bmw"},{maker:"audi"}]
    }


}
var shopping = ['apple','mangos','oranges','banana','orange',function(){return 'fruits'}];
console.log(car.make);
console.log(car.engine.size);
console.log(car.drive())
console.log(shopping[5]());
console.log(car['engine']['pistons'][2-1]['maker'])