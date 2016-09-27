"use strict";

export class Calculator {
  //write your code here
  constructor(value) {
    this.value = value;
  }

  // set a(value) {
  //   this._a = value;
  // }

  penjumlahan(angka) {
    // return this.value + angka;
    this.angka = this.value + angka;
    return this;
  }

  pengurangan(angka) {
    // return this.value - angka;
    this.angka = this.value - angka;
    return this;
  }

  perkalian(angka) {
    // return this.value * angka;
    this.angka = this.value * angka;
    return this;
  }

  pembagian(angka) {
    // return this.value / angka;
    this.angka = this.value / angka;
    return this;
  }

  pangkat(angka) {
    // return Math.pow(this.value, angka);
    this.angka = Math.pow(this.value, angka);
    return this;
  }

  akar(angka) {
    // return Math.sqrt(this.value, angka);
    this.angka = Math.sqrt(this.value, angka);
    return this;
  }

  luasLingkaran(angka) {
    return Math.PI * angka;
  }
}




/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */
