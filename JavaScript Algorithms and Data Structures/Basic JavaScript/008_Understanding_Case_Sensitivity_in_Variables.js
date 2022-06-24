/**
 * Understanding Case Sensivity in Variables
 * >> Değişkenlerde Büyük küçük harf duyarlılığını anlama
 * 
 * In JavaScript all variables and fuction names are case sensitive. This means that capitalization matters.
 * >> JavaScriptte tüm değişkenler ve fonksiyon isimleri büyük küçük harfe duyarlıdır. Bu, büyük harf kullanımının önemli olduğu anlamına gelir.
 * 
 * "MYVAR" is not the same as "MyVar" nor "myvar". It is possible to have multiple distinct variables with the same name but differencent casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.
 * >> "MYVAR", "MyVar" veya "myvar" ile aynı şey değildir. Aynı ada sahip ancak farklı büyük/küçük harfe sahip birden fazla farklı değişkene sahip olmak mümkündür. Anlaşılır olması için bu dil özelliğini kullanmamanız şiddetle tavsiye edilir.
 * 
 * Best Practice - En iyi Yöntem
 * Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
 * 
 * >> JavaScript'te değişken adlarını CamelCase ile yazın. camelCase ile, çok kelimeli değişken adlarında ilk kelime küçük harfle ve sonraki her kelimenin ilk harfi büyük harfle yazılır.
 */

// Examples - Örnekler
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

// Variable Declarations - Değişken Bildirimi
var highSchoolStudents;
var camelCaseVariable;
var titleCaseOver;

highSchoolStudents = 54;
camelCaseVariable = "That variable name written in camelCase";
titleCaseOver = 54100;

console.log("highSchoolStudents = " + highSchoolStudents);
console.log("camelCaseVariable = " + camelCaseVariable);
console.log("titleCaseOver = " + titleCaseOver);