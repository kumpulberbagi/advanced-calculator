"use strict";

export class Calculator {
    //write your code here
    constructor(input) {
        this._input = input;
    }

    set input(value) {
        this._input = value;
    }

    get input() {
        return this._input;
    }

    //Setter Getter Pada Penggunaan kali ini berfungsi untuk mengSET (save) dari perhitungan pertama (perkalian), kemudian nilainya diteruskan ke (perkalian) dan seterusnya.
    // Jika Setter Getter Tidak Ada, Maka pada main.js menghitungnya satu-satu, tidak bisa diteruskan seperti "hitung.perkalian(5).pengurangan(5).penjumlahan(5).pembagian(2).pangkat(2).akar().lingkaran().hasil()""


    perkalian(input2) {
        this._input *= input2;
        return this;
    }
    pengurangan(input2) {
        this._input -= input2;
        return this;
    }
    penjumlahan(input2) {
        this._input += input2;
        return this;
    }
    pembagian(input2) {
        this._input /= input2;
        return this;
    }
    pangkat(input2) {
        this._input = Math.pow(this._input, input2);
        return this;
    }
    akar() {
        this._input = Math.sqrt(this._input);
        return this;
    }
    lingkaran() {
        this._input = Math.PI * Math.pow(this._input, 2);
        return this;
    }
    hasil() {
        return this._input.toFixed(2)
    }




}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */
