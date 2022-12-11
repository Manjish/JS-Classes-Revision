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
