class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `This car is a ${this.year} ${this.make} ${this.model}.`
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
    }
    getDescription() {
        return `${super.getDescription()} The range is ${this.range}.`
    }
}

const newCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(newCar.getDescription());