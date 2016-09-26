"use strict";

export class Calculator {
  //write your code here
  constructor() {

  }

  penjumlahan(angka1, angka2) {
    return angka1 + angka2;
  }

  pengurangan(angka1, angka2) {
    return angka1 - angka2;
  }

  perkalian(angka1, angka2) {
    return angka1 * angka2;
  }

  pembagian(angka1, angka2) {
    return angka1 / angka2;
  }

  pangkat(angka1, angka2) {
    return Math.pow(angka1, angka2);
  }

  akar(angka1, angka2) {
    return Math.sqrt(angka1, angka2);
  }

  luasLingkaran(angka1) {
    return Math.PI * angka1;
  }
}

var calculator = new Calculator();


console.log(calculator.penjumlahan(2, 3));
console.log(calculator.pengurangan(10, 2));
console.log(calculator.perkalian(2, 3));
console.log(calculator.pembagian(10, 5));
console.log(calculator.pangkat(2, 3));
console.log(calculator.akar(16, 2));
console.log(calculator.luasLingkaran(5));

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */
