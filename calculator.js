"use strict";

export class Calculator {
  //write your code here
  //write your code here
    constructor() {
      this.init = 0;
    }

    set x(value) {
      this._x = value;
    }

    get x() {
      return this.x;
    }

    add(x) {
      this.init += x;
      return this;
    }

    substract(x) {
      this.init -= x;
      return this;
    }

    multiply(x) {
      this.init *= x;
      return this;
    }

    square(x) {
      this.init = Math.pow(this.init, x);
      return this;
    }

    sqrt() {
      this.init = Math.sqrt(this.init);
      return this;
    }

    print() {
      console.log(this.init);
    }
}


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
