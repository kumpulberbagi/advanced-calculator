"use strict";

export class Calculator {
  //write your code here
  constructor(x=1){
    this._x = x;
  }

  set x(value) {
    this._x = value;
  }

  get x() {
    return this._x;
  }

  penjumlahan(a){
    return this._x + a;
  }

  pengurangan(a){
    return this._x - a;
  }

  perkalian(a){
    return this._x * a;
  }

  pembagian(a){
    return this._x / a;
  }

  pangkat(a){
    return Math.pow(this._x, a);
  }

  akarPangkat(a){
    return Math.pow(this._x, 1/a);
  }

  luasLingkaran(){
    return (0.25 * Math.PI * Math.pow(this._x, 2));
  }

  kelilingLingkaran(){
    return (Math.PI * this._x);
  }

  result(){
    return this.x;
  }
}




/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
