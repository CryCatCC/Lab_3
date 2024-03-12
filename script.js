console.log("                 Завдання 1.2.3 - 1.2.10          ")


var driver = {
  name: "Hello Kitty",
  category: "C",
  personalLimitations: "Not driving at night"
};

var car1 = {
  color: "black",
  maxSpeed: 170,
  driver: driver,
  tuning: true,
  numberOfAccidents: 0,

  drive: function() {
    console.log("I am not driving at night");
  }
};

car1.drive();
console.log(car1);

//-----------------------------------------------------------------

var driver2 = {
  name: "Bee",
  category: "B",
  personalLimitations: null
};

var car2 = {
  color: "white",
  maxSpeed: 120,
  driver: driver2,
  tuning: false,
  numberOfAccidents: 2,

  drive: function() {
    console.log("I can drive anytime");
  }
};

car2.drive();
console.log(car2);

//-----------------------------------------------------------------

// Визначення конструктора
function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
}

// Визначення методу
Truck.prototype.trip = function() {

  if (!this.driver) {
    console.log("No driver assigned");
  } else {
    var message = "Driver " + this.driver.name;
    if (this.driver.nightDriving) {
      message += " drives at night";
    } else {
      message += " does not drive at night";
    }
    message += " and has " + this.driver.experience + " years of experience";
    console.log(message);
  }
};

// Визначення методу
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience
  };
};

// Створення об'єктів Truck
var truck1 = new Truck("red", 7000, 70, "Peterbilt 379", "Semi-truck");
var truck2 = new Truck("gray", 6000, 60, "Mack", "Granite military truck");

truck1.AssignDriver("Optimus Prime", true, 5);
truck2.AssignDriver("Megatron", false, 3);

truck1.trip();
truck2.trip();