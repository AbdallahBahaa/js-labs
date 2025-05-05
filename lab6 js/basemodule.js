import { FlyingCar } from './flyingcarmodule.js';
const myFlyingCar = new FlyingCar("Picanto", 2023);
document.body.innerHTML = `<h2>${myFlyingCar.toString()}</h2>`;
