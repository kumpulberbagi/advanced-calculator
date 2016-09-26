"use strict";

export class Calculator {
  //write your code here
  constructor() {

  }

  set a(value) {
    this._a = value;
  }

  penjumlahan(angka) {
    return this._a + angka;
  }

  pengurangan(angka) {
    return this._a - angka;
  }

  perkalian(angka) {
    return this._a * angka;
  }

  pembagian(angka) {
    return this._a / angka;
  }

  pangkat(angka) {
    return Math.pow(this._a, angka);
  }

  akar(angka) {
    return Math.sqrt(this._a, angka);
  }

  luasLingkaran(angka) {
    return Math.PI * angka;
  }
}


// var calculator = new Calculator();
// calculator.a = 8;

// console.log(calculator.penjumlahan(5).penjumlahan(3));
// console.log(calculator.pengurangan(2));
// console.log(calculator.perkalian(2));
// console.log(calculator.pembagian(2));
// console.log(calculator.pangkat(2));
// console.log(calculator.akar(2));
// console.log(calculator.luasLingkaran(5));

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */
