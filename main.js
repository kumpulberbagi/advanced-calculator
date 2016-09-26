"use strict";

import {Calculator} from "./calculator.js";

var calculator = new Calculator();
calculator.angka = 9;
console.log("penjumlahan : " + calculator.add(10));
console.log("pengurangan : " +calculator.sub(4));
console.log("pembagian : " +calculator.div(3));
console.log("perkalian : " +calculator.mul(2));
console.log("akar : " +calculator.root());
console.log("pangkat : " +calculator.rank(2));
console.log("luas lingkaran : " +calculator.circle(4));


// calculator.sub();
// execute function on calculator.js in here
