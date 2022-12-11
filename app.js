// const testCar = new Car(4, 'V6', 'Grey')

// console.log(testCar)
// console.log(testCar.carStats())

//Since classes are not hoisted, the code above will give a runtime error.
//Cannot access Class before initialization.

//Since functions are hoisted, they can be declared anywhere and JS will hoist them to the top.
//This enables function call before the function declaration section.
greet('Top')
class Car {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }

  carStats() {
    return `There are ${this.doors} doors and ${this.engine} engine in this car. The car is ${this.color} in color.`
  }
}

const cx5 = new Car(4, 'V6', 'Grey')

console.log(cx5)
console.log(cx5.carStats())

function greet(location) {
  console.log(`Hello from ${location}`)
}

greet('Bottom')
