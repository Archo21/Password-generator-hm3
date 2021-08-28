// Assignment Code
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var Symbol = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
var base = ""
var passwordlength= ""
var finalResult = ""
var garantyPasswordChar = ""

var generateBtn = document.querySelector("#generate");
function restPassword (){
  finalResult= "";
  base = "";
  passwordlength = "0"

}
  

function generatePassword() {
  debugger
  askAgain()
  
function askAgain(){

var lengthQuestion = prompt(" pwd Length must be btw 8 - 128");
let length = parseInt(lengthQuestion)
console.log(length);
//ask user
if(length >=8 && length <=128){
  passwordlength = length;
  
}

else{
  alert("must be btw 8-128 characters")

return askAgain()
}

}
var hasUpperCase = confirm("do you want uppercase letters");
var haslowerCase = confirm("do you want lowercase letters");
var hasnumbers = confirm("do you want numbers");
var hasSymbol = confirm("do you want special characters");

 if(hasUpperCase){
   base += upperCase 
 }

 if(haslowerCase){
   base += lowerCase
 }
 if(hasnumbers){
   base += numbers
 }
if(hasSymbol){
base += Symbol
}
    
  for (var i = 0; i < passwordlength; i++) {
    finalResult += base.charAt(Math.floor(Math.random()*base.length));

  }

return finalResult
}

// Write password to the #password input
function writePassword() {
  restPassword()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
   writePassword()
});