function calculateArea(radius) {
  const pi = 3.14159;
  const area = pi * radius * radius;
  return area;
}

const radius = 5;
const result = calculateArea(radius);
console.log(`The area of a circle with radius ${radius} is: ${result}`);
