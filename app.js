//creating a mixin method with function inside
let mixin = {
  madeIn(year) {
    return `This car was made in ${year}.`
  },
}

//creating a mixin for car which implements the madeIn method of mixin
let carMixin = {
  __proto__: mixin,
  madeIn(year) {
    return super.madeIn(year)
  },
}

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
    this._brand = 'No brand' //_brand = protected variable
    this.wheel = 4 //default initialization
    this.hasAc = true //default initialization

    //assigning the mixin --- this needs to done in the constructor
    Object.assign(this, carMixin)
  }

  myBrand() {
    return `This SUV is of ${this.brand} brand`
  }

  //method to get the value of brand variable
  get getBrand() {
    return this._brand
  }

  //method to set the value of brand variable
  set setBrand(newBrand) {
    return (this._brand = newBrand)
  }

  //getter and setter are the concepts of encapsulation which ensures that the protected variables are not accessed directly
}

const cx5 = new SUV(4, 'V6', 'Grey')
//Will console No brand since the value has not been set
console.log('Before setting the brand: ', cx5.getBrand) //get the _brand of the object through getter method
cx5.setBrand = 'Mazda' //setting the value of _brand through the setter method
//Will console Mazda as the value has been set
console.log('After setting the brand: ', cx5.getBrand)
//calling the mixing method
console.log(cx5.madeIn(2019))
