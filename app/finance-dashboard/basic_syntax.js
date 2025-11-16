let myYearOfBirth = 1991
let currentYear = 2025
let myAge = currentYear - myYearOfBirth
console.log("My age is: " + myAge)


// Perimeter of a rectangle
let length = 10
let width = 5
let perimeterOfRectangle = 2 * (length + width)
console.log("Area of rectangle is: " + perimeterOfRectangle)

// Perimeter of a square
side = 9
let perimeterOfSquare = 4 * side
console.log("Perimeter of aquare is: " + perimeterOfSquare)

// Perimeter ofa circle
radius = 8
let perimeterOfCircle = 2 * Math.PI * radius
console.log("Perimeter of circle is: " + perimeterOfCircle)

// Perimeter of a triangle
let sideA = 6
let sideB = 9
let sideC = 10
let perimeterOfTriangle = sideA + sideB + sideC
console.log("Perimeter of triangle is: " + perimeterOfTriangle)

// Perimeter of a trapezoid
let side1 = 9
let side2 = 6
let side3 = 8
let side4 = 7
let perimeterOfTrapezoid = side1 + side2 + side3 + side4
console.log("Perimeter of trapezoid is: " + perimeterOfTrapezoid)


// Area of a rectangle
length = 10
width = 5
let areaOfRectangle = length * width
console.log("Area of the rectangle is: " + areaOfRectangle)

// Area of a square
let side = 4
let areaOfSquare = side * side
console.log("Area of the square is: " + areaOfSquare)

// Area of a circle
let radius = 5
let areaOfCircle = Math.PI * radius * radius
console.log("Area of circle is: " + areaOfCircle)

// Area of a triangle
let base = 9
let height = 8
let areaOfTriangle = 0.5 * base * height
console.log("Area of triangle is: " + areaOfTriangle)

// Volume of a cylinder
height = 10
radius = 8
let volumeOfCylinder = Math.PI * radius * radius * height
console.log("Volume of cylinder is: " + volumeOfCylinder)

// Volume of a cone
height = 9
radius = 7
let volumeOfCone = (1 / 3) * Math.PI * radius * radius * height
console.log("Volume of cone is: " + volumeOfCone)

// Volume of sphere
height = 5
radius = 9
let volumeOfSphere = (4 / 3) * Math.PI * radius * radius * height
console.log("Volume of sphere is: " + volumeOfSphere)

// Volume of a rectangular prism
length = 8
width = 6
height = 10
let volumeOfRectangularPrism = length * width * height
console.log("Volume of Rectangular Prism is: : " + volumeOfRectangularPrism)


// First-degree equations
// equation: ax + b = c
let a = 4
let b = 5
let c = 18
let x = (c - b) / a
console.log("The solution of the equation is: " + x)

// First-degree with two variables
// equation: a1x + b1y = c1
//           a2x + b2y = c2
let a1 = 2
let b1 = 3
let c1 = 12
let a2 = 4
let b2 = 5
let c2 = 26

let y = (c2 - (a2 * (c1 / a1))) / (b2 - (a2 * (b1 / a1)))
let x2 = (c1 - b1 * y) / a1
console.log("The solution of the equations is: x = " + x2 + ", y = " + y)

// first-degree with three variables
// equation: a1x + b1y + c1z = d1
//           a2x + b2y + c2z = d2
//           a3x + b3y + c3z = d3
a1 = 1
b1 = 2
c1 = 3
let d1 = 14
a2 = 4
b2 = 5
c2 = 6
let d2 = 32
a3 = 7
b3 = 8
c3 = 9
let d3 = 50

let z = (d3 - (a3 * (d1 / a1)) - (b3 * ((d2 - (a2 * (d1 / a1))) / (b2 - (a2 * (b1 / a1)))))) / (c3 - (a3 * (c1 / a1)) - (b3 * (c2 - (a2 * (c1 / a1))) / (b2 - (a2 * (b1 / a1)))))
let y2 = (d2 - a2 * (d1 / a1) - c2 * z) / (b2 - a2 * (b1 / a1))
let x3 = (d1 - b1 * y2 - c1 * z) / a1
console.log("The solution of the equations is: x = " + x3 + ", y = " + y2 + ", z = " + z)