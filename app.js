class Car {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }

  carStats() {
    return `There are ${this.doors} doors and ${this.engine} engine in this car. The car is ${this.color} in color.`
  }

  static totalDoors(car1, car2) {
    const door1 = car1.doors
    const door2 = car2.doors

    return door1 + door2
  }
}

//SUV is a child class and Car is a parent class, here extends keyword is used to implement inheritance
class SUV extends Car {
  constructor(doors, engine, color, brand, carStats) {
    //constructor of SUV class
    super(doors, engine, color, carStats) //constructor of Car class. super keyword is used for invoking constructor of parent class.
    this.brand = brand
    this.wheel = 4 //default initialization
    this.hasAc = true //default initialization
  }

  myBrand() {
    return `This SUV is of ${this.brand} brand`
  }
}

const cx5 = new SUV(4, 'V6', 'Grey', 'Mazda')
console.log(cx5)
console.log(cx5.myBrand())
console.log(cx5.carStats())
