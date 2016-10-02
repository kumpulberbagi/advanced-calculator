"use strict";

export class Calculator {
  //write your code here
    constructor(value) {
      this.init = value;
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


var c = new Calculator();

c.add(2).add(2).sqrt().print();
