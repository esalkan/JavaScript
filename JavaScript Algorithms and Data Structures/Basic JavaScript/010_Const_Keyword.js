/**
 * Declare a Read-Only Variable withg the const Keyword
 * >> const Anahtar Kelime ile Salt Okunur Değişken Bildirimi
 * 
 * The keyword "let" is not the only new way to declare variables. IN ES6, we can also declare variables using the "const" keyword.
 * >> "let" anahtar sözcüğü, değişkenleri bildirmenin tek yeni yolu değildir. ES6'da değişkenleri "const" anahtar sözcüğünü kullanarak da bildirebiliriz.
 * 
 * "const" has all the awesome features that "let" has, with the added bonus that variables declared using "const" are read-only. They are a constant value which means that once a variable is assigned with "const", it can not be reassigned.
 * >> "const", "let"in sahip olduğu tüm harika özelliklere sahiptir ve "const" kullanılarak bildirilen değişkenlerin salt okunur olması ek avantajıyla birlikte. Bunlar sabit bir değerdir, yani bir değişkene "const" atandığında yeniden atama yapılamaz.
 */

const FAV_PET = "Cats";
FAV_PET = "Dogs"; // Reassigning
console.log(FAV_PET); // Console will display an error due to reassgning the value of "FAV PET"

const CFM = "codesOfMine"; 
let fact = "is cool!";
fact = "is awesome!";
console.log(CFM, fact);