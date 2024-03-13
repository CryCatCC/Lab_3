
// Painter function
function Painter(color) {
  return function(object) {
   const objectType = object.type || "No 'type' property occurred!";
    console.log(`${color} ${objectType}`);
  };
}

// PaintBlue, PaintRed, і PaintYellow фунції
const PaintBlue = Painter('Blue');
const PaintRed = Painter('Red');
const PaintYellow = Painter('Yellow');

const object1 = { maxSpeed: 280, type: 'Sportcar', color: 'magenta'};
const object2 = { type: 'Truck', avgSpeed: 90, loadCapacity: 2400 };
const object3 = { maxSpeed: 180, color: 'purple', isCar: true};

console.log("Object 1:");
PaintBlue(object1);
console.log("Object 2:");
PaintRed(object2);
console.log("Object 3:");
PaintYellow(object3);
