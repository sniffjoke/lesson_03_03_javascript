// function CarCreate(brand, color) {
//     this.brand = brand;
//     this.color = color;
// }

// CarCreate.prototype.startEngine = function () {
//     console.log(`${this.brand} started`);
// };

// const bmw = new CarCreate('bmw', 'white');
// const kia = new CarCreate('kia', 'red');

// bmw.startEngine();
// kia.startEngine();
// console.log(bmw)
// console.log(kia)

class Car {

    #speed

    constructor(brand, color) {
        this.#speed = 100
        this.brand = brand;
        this.color = color;
    }

    startEngine() {                             // создается один раз
        console.log(`${this.brand} started`);
    }

    // startEngine = function() {
    //     console.log(`${this.brand} started`);           // создается на каждом новом экземпляре
    // }

    set speed(speed) {
        this.#speed = speed;
    }

    get speed() {
        return this.#speed;
    }

}

const bmw = new Car('bmw', 'white');
const kia = new Car('kia', 'red');

// bmw.startEngine();

// console.log(bmw)
// console.log(kia)

console.log(bmw.speed);
bmw.speed(123)
// console.log(bmw.speed);
