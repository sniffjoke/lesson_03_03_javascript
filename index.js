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

// class Car {
//
//     #speed = 100
//     #wheels = 4
//
//     constructor(brand, color) {
//         this.brand = brand;
//         this.color = color;
//     }
//
//     startEngine() {                             // создается один раз
//         console.log(`${this.brand} started`);
//     }
//
//     #validateAsNumber(speed) {
//         if (typeof speed !== "number") {
//             throw new Error(`Invalid speed: ${speed}`);
//         }
//     }
//
//     // startEngine = function() {
//     //     console.log(`${this.brand} started`);           // создается на каждом новом экземпляре
//     // }
//
//     set setSpeed(speed) {
//         this.#validateAsNumber(speed);
//         this.#speed = speed;
//     }
//
//     get speed() {
//         return this.#speed;
//     }
//
//     static compareCarSpeed(car1, car2) {
//         if (car1.speed > car2.speed) {
//             console.log(`${car1.brand} is faster`)
//         }
//         if (car2.speed > car2.speed) {
//             console.log(`${car2.brand} is faster`)
//         }
//     }
//
// }

// const bmw = new Car('bmw', 'white');
// const kia = new Car('kia', 'red');

// bmw.startEngine();

// console.log(kia)

// bmw.startEngine();
// console.log(bmw.speed);
// bmw.setSpeed = 123
// console.log(bmw.speed);

// Car.compareCarSpeed(bmw, kia)


