function CarCreate(brand, color) {
    this.brand = brand;
    this.color = color;
}

CarCreate.prototype.startEngine = function () {
    console.log(`${this.brand} started`);
};

const bmw = new CarCreate('bmw', 'white');
const kia = new CarCreate('kia', 'red');

// bmw.startEngine();
// kia.startEngine();
console.log(bmw)
console.log(kia)
