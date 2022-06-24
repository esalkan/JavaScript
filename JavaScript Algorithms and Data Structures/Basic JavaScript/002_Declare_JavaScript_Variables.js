/**
 * In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are
 * >> Bilgisayar biliminde veri, bilgisayar için anlamlı olan her şeydir. JavaScript sekiz farklı veri türü sağlar.
 * 
 * 1. undefined
 * 2. null
 * 3. boolean
 * 4. string
 * 5. symbol
 * 6. bigint
 * 7. number
 * and
 * 8. object
 * 
 * For example computers distinguish between numbers, such as the numver 12, and strings, such as the string "12", "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.
 * >> Örneğin bilgisayarlar, 12 rakamı gibi sayılar ile karakter koleksiyonları olan "12", "köpek" veya "123 kedi" gibi dizeleri ayırt eder. Bilgisayarlar bir sayı üzerinde matematiksel işlemler yapabilir, ancak bir dizi üzerinde yapamaz.
 * 
 * Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the ight data types my be stored in a variable.
 * >> Değişkenler, bilgisayarların verileri dinamik bir şekilde depolamasına ve işlemesine olanak tanır. Bunu, verilerin kendisini kullanmak yerine verilere işaret etmek için bir "etiket" kullanarak yaparlar. Doğru veri türlerinden herhangi biri bir değişkende saklanabilir.
 * 
 * Variables are similar to the x and y variables you use in mathematics, which means they are a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.
 * >> Değişkenler, matematikte kullandığınız x ve y değişkenlerine benzer, yani başvurmak istediğimiz verileri temsil eden basit bir addır. Bilgisayar değişkenleri, farklı zamanlarda farklı değerler depolayabilmeleri bakımından matematiksel değişkenlerden farklıdır.
 * 
 * We tell JavaScript to create or declare a variable by putting the keyword "var" in front of it, like so:
 * >> JavaScript'da değişkenin önüne "var" anahtar sözcüğünü koyarak bir değişken oluşturmasını veya bildirmesini söyleriz, şöyle:
 * 
 * var myName = "Alkan";
 * 
 * creates a variable called "myName". In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters and $ or _, but may not contain spaces or start with a number.
 * >> "benimAdım" adında bir değişken oluşturur. JavaScript'te ifadeleri noktalı virgülle bitiririz. Değişken adları harflerden ve $ veya _'den oluşabilir, ancak boşluk içeremez veya bir sayı ile başlayamaz.
 * 
 */

// 1. Undefined
var myName; // undefined
console.log(myName);

// 2. Null
var myAge = null; // null
console.log(myAge);

// 3. Boolean
var isMarried = false; // false
console.log(isMarried);

// 4. String
var myName = "Alkan"; // "Alkan"
console.log(myName);

// 5. Symbol
var myName = Symbol("Alkan"); // Symbol("Alkan")
console.log(myName);

// 6. BigInt
var myAge = BigInt(123456789012345678901234567890); // BigInt(123456789012345678901234567890)
console.log(myAge);

// 7. Number
var myAge = 123456789012345678901234567890; // 123456789012345678901234567890
console.log(myAge);

// 8. Object
var myName = {
    firstName: "Alkan",
    age: 40
}
console.log(myName);            // myName is an object with two properties: firstName and age.
                                // myName iki özelliği olan bir nesnedir: firstName ve age.
console.log(myName.firstName);  // myName.firstName is "Alkan" (the value of the firstName property) 
                                // myName.firstName "Alkan" (firstName özelliğinin değeri)
console.log(myName.age);        // myName.age is 40 (the value of the age property)
                                // myName.age 40 (age özelliğinin değeri)

