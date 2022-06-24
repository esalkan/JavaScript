/**
 * Understanding Uninitalized Variables
 * 
 * When JavaScript variables are declared, they have an initial value of "undefined". If you do a mathematical operation on an "undefined" variable your result will be "NaN" which means "Noy a Number". If you concatenate a string with an "undefined" variable, you will get a string of "undefined".
 * >> JavaScript değişkenleri tanımlandığında/bildirildiğinde, "tanımsız" başlangıç değerine sahiptirler. Bir "tanımsız" değişken üzerinde matematiksel bir işlem yaparsanız, sonucunuz "NaN" yani "Sayı Değil" olacaktır. Bir dizeyi "tanımsız" bir değişkenle birleştirirseniz, bir "tanımsız" dizesi alırsınız.
 */

// Initialize the three variables "a", "b",and "c" with "5", "10", and "I am a" respectively so that they will not be "undefined".
// >> "a", "b" ve "c" değişkenlerini sırasıyla "5", "10" ve "Ben bir" ile tanımlayın, böylece "tanımsız" olmayacaklardır.

var a = 5;
var b = 10;
var c = "Ben bir";

a = a + 1;
b = b + 5;
c = c + " Karakter Dizesiyim!";

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);