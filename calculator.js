"use strict";

export class Calculator {
  //write your code here
  constructor(value=1) {
    this._x = value;
  }

  set a(value) {
    this._x = value;
  }

  get x() {
    return this._x;
  }

  penjumlahan(angka) {
    // return this.value + angka;
    this._x = this._x + angka;
    return this;
  }

  pengurangan(angka) {
    // return this.value - angka;
    this._x = this._x - angka;
    return this;
  }

  perkalian(angka) {
    // return this.value * angka;
    this._x = this._x * angka;
    return this;
  }

  pembagian(angka) {
    // return this.value / angka;
    this._x = this._x / angka;
    return this;
  }

  pangkat(angka) {
    // return Math.pow(this.value, angka);
    this._x = Math.pow(this._x, angka);
    return this;
  }

  akar(angka) {
    // return Math.sqrt(this.value, angka);
    this._x = Math.sqrt(this._x, angka);
    return this;
  }

  luasLingkaran(angka) {
    this._x = Math.PI * this._x * angka;
    return this;
  }

  print() {
    return this._x;
  }
}




/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */
