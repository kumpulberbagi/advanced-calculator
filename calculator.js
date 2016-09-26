"use strict";

export class Calculator {
  constructor(x, y){
    this._x = x;
    this._y = y;
  }
  //write your code here
  addition() {
      return this._x+this._y;
  }
  substraction(){
    return this._x-this._y;
  }
  multiplication() {
    return this._x*this._y;
  }
  division() {
    return this._x/this._y;
  }
  power() {
    return Math.pow(this._x, this._y);
  }
  squareRoot() {
    return Math.sqrt(this._x, this._y);
  }
  area(){
    return this._x*this._x*Math.PI;
  }
}
//
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
