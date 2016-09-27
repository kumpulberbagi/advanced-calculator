"use strict";

export class Calculator {
  //write your code here
  constructor(num1){
    this.num1 = num1;

  }
  perkalian(num2){
    return this.num1 * num2;
  }

  pengurangan(num2){
    return this.num1 - num2

  }

  penjumlahan(num2){
    return this.num1 + num2
  }

  pembagian(num2){
    return this.num1 / num2
  }

  pangkat(num2){
    return Math.pow(this.num1,num2)
  }

  akar(){
    return Math.sqrt(this.num1)
  }

  pi(){
    return (Math.pow(this.num1,2)) * Math.PI
  }

}







/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
