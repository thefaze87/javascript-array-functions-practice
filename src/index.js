const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female"
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male"
  }
];

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
// first param is a callback function that gets ref to accumulator
// and the current value, and the second param is the initial accumulator
// value

//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0); // initialize the acc with 0
console.log("---- Total Mass Reduce Function:", totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0); // initialize the acc with 0
console.log("---- Total Height Reduce Function:", totalHeight);

//3. Get total number of characters by eye color
// Initialize acc as empty object - return {color: count}
const charactersByEyeColor = characters.reduce((acc, cur) => {
  const eyeColor = cur.eye_color; // create local variable for cleaner code
  if (acc[eyeColor]) {
    // if the eye color exists, let's add 1 to the current value
    acc[eyeColor]++;
  } else {
    // set the eye color to 1
    acc[eyeColor] = 1;
  }
  // Return our eye color
  return acc;
}, {}); // initialize the acc with 0
console.log(
  "---- Characters by Eye Color Reduce Function:",
  charactersByEyeColor
);

//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
