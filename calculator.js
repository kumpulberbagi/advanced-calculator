"use strict";

const PI = 3.14

export class Calculator {
constructor(num)
{
  this.i = num
}
  
  set num(num)
  {
    this.i = num
  }
  get num()
  {
    return this.i
  }
  
  penjumlahan(a)
  {
    this.i += a
    return this
  }

  pengurangan(a)
  {
    this.i -= a
    return this
  }

  perkalian(a)
  {
    this.i *= a
    return this
  }

  pembagian(a)
  {
    this.i /= a
    return this
  }

  pangkat(a)
  {
    this.i = Math.pow(this.i,a)
    return this
  }

  akarPangkat(a)
  {
    this.i = Math.sqrt(a)
    return this
  }

  luasLingkaran(a)
  {
    this.i =  PI*(Math.pow(a,2))
    return this
  }

  print()
  {
    console.log(this.i);
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
