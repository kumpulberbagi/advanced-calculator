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
    this._x += a;
    return this;
  }

  pengurangan(a){
    this._x -= a;
    return this;
  }

  perkalian(a){
    this._x *= a;
    return this;
  }

  pembagian(a){
    this._x /= a;
    return this;
  }

  pangkat(a){
    this._x = Math.pow(this._x, a);
    return this;
  }

  akarPangkat(a){
    this._x = Math.pow(this._x, 1/a);
    return this;
  }

  luasLingkaran(){
    this._x = (0.25 * Math.PI * Math.pow(this._x, 2));
    return this;
  }

  kelilingLingkaran(){
    this._x *= Math.PI;
    return this;
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
