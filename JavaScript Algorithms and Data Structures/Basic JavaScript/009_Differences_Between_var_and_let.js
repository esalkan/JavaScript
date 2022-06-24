/**
 * Differences Between the "var" and "let" Keywords
 * >> "var" ve "let" anahtar kelimeleri arasındaki farklar.
 * 
 * One of the biggest problems with declaring variables with the "var" keyword is that you can easily overwrite variable declarations.
 * "var" anahtar sözcüğüyle değişken bildirmenin en büyük sorunlarından biri, değişken bildirimlerinin üzerine kolayca yazılabilmesidir.
 */

 var camper = "Alkan";
 var camper = "Codes Of Mine";
 console.log(camper);

 /**
  * In the code above, the "camper" variable is originally declared as "Alkan", and is then overridden to be "Codes Of Mine". The console then displays the string "Codes Of Mine".
  * >> Yukarıdaki kodda, "camper" değişkeni orijinal olarak "Alkan" olarak bildirilmiş ve daha sonra "Codes Of Mine" olarak geçersiz kılınmıştır. Konsol daha sonra "Codes Of Mine" dizesini görüntüler.
  * 
  * In a small application, you might not run into this type of problem. But as your codebase becomes lager, you might accidentally overwrite a variable that you did not intend to. Because this behavir does not throw an error, searching for and fixing bugs becomes more difficult.
  * >> Küçük bir uygulamada bu tür bir sorunla karşılaşmayabilirsiniz. Ancak kod tabanınız daha büyük hale geldikçe, yanlışlıkla istemediğiniz bir değişkenin üzerine yazabilirsiniz. Bu davranış hata vermediğinden, hataları aramak ve düzeltmek daha zor hale gelir.
  * 
  * A keyword called "let" was introduced in ES6, a major update to JavaScript, to solve this potential issue with the "var" keyword. 
  * >> JavaScript'te yapılan büyük bir güncelleme olan ES6'da, "var" anahtar kelimesiyle ilgili bu olası sorunu çözmek için "let" adlı bir anahtar kelime tanıtıldı.
  * 
  * If you replace "var" with "let" in the code above, it results in an error:
  * >> Yukarıdaki kodda "var"ı "let" ile değiştirirseniz, bir hatayla sonuçlanır:
  */

 let camper = "Alkan";
 let camper = "Codes Of Mine";

 /**
  * The error can be seen in your browser console.
  * 
  * So unlike "var", when use "let", a variable with the same name can only be declared once.
  * >> Yani "var"dan farklı olarak, "let" kullanıldığında, aynı ada sahip bir değişken yalnızca bir kez bildirilebilir.
  */

 let masterOfTorque = "Mt-09 Sp";
 let exhaust = "Akrapovič";

 console.log("masterOfTorque = " + masterOfTorque);
 console.log("exhaust " + exhaust);