var storeManager = {}
storeManager.health = 30;
storeManager.greeting = "hello";

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    health: 40
}

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

//creating an object
var virtualPet = {
    sleepy: true,
    nap: function () {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false