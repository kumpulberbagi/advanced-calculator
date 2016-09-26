"use strict";

import {Calculator} from "./calculator.js";

// execute function on calculator.js in here
var kalkulator = new Calculator();
//kalkulator.add(10)

//kalkulator.x = 8;
//kalkulator.add(10).min(2).  //12
//var tmp = kalkulator.penjumlahan(2);
//tmp.penjumlahan(3);
console.log(kalkulator.penjumlahan(3).penjumlahan(6).result());
