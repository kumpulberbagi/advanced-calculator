"use strict";

const PI = 3.14

export class Calculator {
constructor()
{
  this.i = 0
}

  penjumlahan(a)
  {
    this.i += a
  }

  pengurangan(a)
  {
    this.i -= a
  }

  perkalian(a)
  {
    this.i *= a
  }

  pembagian(a)
  {
    this.i /= a
  }

  pangkat(a)
  {
    this.i = Math.pow(i,a)
  }

  akarPangkat(a)
  {
    this.i = Math.sqrt(a)
  }

  luasLingkaran(a)
  {
    this.i =  PI*(Math.pow(a,2))
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
