let person = {
    name: "Peter",
    yearOfBirth: 1991,
}
let currentYear = 2025
let age = currentYear - person.yearOfBirth
console.log(person.name + "'s age is: " + age)

let rect = {
    length: 10,
    width: 5,
}
let perimeterOfRectangle = 2 * (rect.length + rect.width)
console.log("Perimeter of rectangle is: " + perimeterOfRectangle)

let square = {
    side: 9,
}
let perimeterOfSquare = 4 * square.side
console.log("Perimeter of square is: " + perimeterOfSquare)

let circle = {
    radius : 8,
}
let perimeterOfCircle = 2 * Math.PI * circle.radius
console.log("Perimeter of circle is: " + perimeterOfCircle)

let triangle = {
    sideA : 6,
    sideB : 9,
    sideC : 10,
}
let perimeterOfTriangle = triangle.sideA + triangle.sideB + triangle.sideC
console.log("Perimeter of triangle is: " + perimeterOfTriangle)

let trapezoid = {
    side1 : 9,
    side2: 6,
    side3: 8,
    side4: 7,
}
let perimeterOfTrapezoid = trapezoid.side1 + trapezoid.side2 + trapezoid.side3 + trapezoid.side4
console.log("Perimeter of trapezoid is: " + perimeterOfTrapezoid)

rect = {
    length: 10,
    width: 6,
}
let areaOfRect = rect.length * rect.width
console.log("Area of the rectangle: " + areaOfRect)

square = {
    side: 9,
}
let areaOfSquare = square.side * square.side
console.log("Area of the square is: " + areaOfSquare)

circle = {
    radius : 10,
}
let areaOfCircle = Math.PI * circle.radius * circle.radius
console.log("Area of circle is: " + areaOfCircle)

triangle = {
    base: 9,
    height: 8,
}
let areaOfTriangle = 0.5 * triangle.base * triangle.height
console.log("Area of triangle is: " + areaOfTriangle)

let cylinder = {
    height: 10,
    radius: 8,
}
let volumeOfCylinder = Math.PI * cylinder.radius * cylinder.radius * cylinder.height
console.log("Volume of cylinder is: " + volumeOfCylinder)

let cone = {
    height: 10,
    radius: 8,
}
let volumeOfCone = (1/3) * Math.PI * cone.radius * cone.radius * cone.height
console.log("Volume of cone is: " + volumeOfCone)


let sphere = {
    height: 5,
    radius: 9,
}
let volumeOfSphere = (4/3) * Math.PI * sphere.radius * sphere.radius * sphere.height
console.log("Volume of sphere is: " + volumeOfSphere)

let rectprism = {
    length: 8,
    width: 6,
    height: 10,
}
let volumeOfRectPrism = rectprism.length * rectprism.width * rectprism.height
console.log("Volume of rectangular prism is: " + volumeOfRectPrism)

let equation = {
    a: 4,
    b: 5,
    c: 18
}
let x = (equation.c - equation.b) / equation.a
console.log("The solution for the equation is: " + x)

let equation2 = {
    a1: 2,
    b1: 3,
    c1: 8,
    a2: 1,
    b2: -4,
    c2: -2,
}
let y = (equation2.c2 - (equation2.a2 * (equation2.c1 / equation2.a1))) / (equation2.b2 - (equation2.a2 * (equation2.b1 / equation2.a1)))
let x1 = (equation2.c1 - equation2.b1 * y) / equation2.a1
console.log("The solution of the equations is: x = " + x1 + ", y = " + y)

let equation3 = {
    a1: 3,
    b1: 2,
    c1: 16,
    d1: 4,
    a2: 4,
    b2: -3,
    c2: 5,
    d2: 1,
    a3: 2,
    b3: 5,
    c3: 11,
    d3: 7,
}
let z = (equation3.d3 - (equation3.a3 * ((equation3.d1 - (equation3.c1 * (equation3.d2 - (equation3.c2 * (equation3.d1 / equation3.c1)) / equation3.b2) / equation3.a2) / equation3.b1))) / equation3.b3)
let y2 = (equation3.d2 - (equation3.a2 * (equation3.d1 - (equation3.c1 * z) / equation3.b1))) / equation3.b2
let x2 = (equation3.d1 - (equation3.b1 * y2) - (equation3.c1 * z)) / equation3.a1
console.log("The solution of the equations is: x = " + x2 + ", y = " + y2 + ", z = " + z)
