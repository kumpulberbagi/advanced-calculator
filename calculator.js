"use strict";

export class Calculator{
  //write your code here
  constructor(value){
    this._angka = value || 0;
  }
  //
  set angka(value){
    this._angka = value
  }
  get angka(){
    return this._angka
  }
  //
  add(parameter){
    return this._angka += parameter;
  }
  sub(parameter){
    return this._angka -= parameter;
  }

  mul(parameter){
    return this._angka *= parameter;
  }

  div(parameter){
    return this._angka /= parameter;
  }

  rank(parameter){

    return Math.pow( this._angka , parameter);

  }

  root(){
    return Math.sqrt(this._angka);
  }

  circle(radius){
    return Math.PI * (radius * radius)
  }



// root(){
//   console.log(Math.sqrt());
// }


}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
