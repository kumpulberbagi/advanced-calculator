"use strict";

export class Calculator {
  constructor(x){
    this._x = x;
  }
  //write your code here
  addition(y) {
      return this._x+y;
  }
  substraction(y){
    return this._x-y;
  }
  multiplication(y) {
    return this._x*y;
  }
  division(y) {
    return this._x/y;
  }
  power(y) {
    return Math.pow(this._x, y);
  }
  squareRoot(y) {
    return Math.sqrt(this._x);
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
