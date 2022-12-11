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

  //static methods - cannot be called from the instance/object, usually something that's not related to the object.
  static totalDoors(car1, car2) {
    const door1 = car1.doors
    const door2 = car2.doors

    return door1 + door2
  }
}

const cx5 = new Car(4, 'V6', 'Grey')
const cx6 = new Car(2, 'V8', 'Black')

console.log(cx5)
console.log(cx5.carStats())

console.log(cx6)
console.log(cx6.carStats())

// cx6.totalDoors() -----This gives error as static methods cannot be called through instance.
console.log(Car.totalDoors(cx5, cx6)) //This works as the statis method is being called from the class.
function greet(location) {
  console.log(`Hello from ${location}`)
}

greet('Bottom')
