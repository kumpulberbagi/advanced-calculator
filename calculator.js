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
    this._angka += parameter;
    return this
  }
  sub(parameter){
    this._angka -= parameter;
    return this
  }

  mul(parameter){
    this._angka *= parameter;
    return this
  }

  div(parameter){
    this._angka /= parameter;
    return this
  }

  rank(parameter){

    this._angka = Math.pow( this._angka , parameter);
    return this;

  }

  root(){
    this._angka = Math.sqrt(this._angka);
    return this
  }

  circle(radius){
    this._angka = Math.PI * (radius * radius)
    return this;
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
