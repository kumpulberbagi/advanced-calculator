"use strict";

import {Calculator} from "./calculator.js";

var calculator = new Calculator();
calculator.angka = 9;
console.log("hasil : " + calculator.add(10).sub(4).div(3).mul(2).root().rank(2).circle(4));


// calculator.sub();
// execute function on calculator.js in here
