// Assignment Code
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";
var specialCharacter="~'()-_';:[?]|\~`{}!@#$%^&*";

var generateBtn = document.querySelector("#generate");
function getUserInput() {
  var passwordLength = parseInt(prompt("number of characters enter number between 8- 128"))
  console.log("passwordLength",passwordLength);
  //ask user
  var hasUpperCase = confirm("do you want uppercase letters");
  var hasLowerCase = confirm("do you want lowercase letters");
  var hasNumbers = confirm("do you want numbers");
  var hasSpecialCharacter = confirm("do you want special characters");

  var passwordOptions = {
   hasUpperCase: hasUpperCase,
   hasLowerCase: hasLowerCase,
   hasNumbers: hasNumbers,
   hasSpecialCharacters: hasSpecialCharacter,
   passwordLength:passwordLength
   
  };
  generatePassword(passwordOptions)
}

function generatePassword(passwordOptions) {

  console.log(passwordOptions);
  if (passwordOptions.hasLowerCase === false &&
      passwordOptions.hasNumbers === false &&
      passwordOptions.hasUpperCase === false &&
      passwordOptions.hasSpecialCharacter === false) {
      alert("You must follow a criteria!");
  }
  var eligibleCharacters = ''
  var finalPassword = ''
	// check each property of the options object and if the property is true, do something that adds a random character from that set of characters and saves it to a string or array that tracks the final password being generated  
	if (passwordOptions.hasLowerCase === true) {
    eligibleCharacters += lowerCase
    var lowerChar = getRandomCharacter(lowerCase);
    finalPassword += lowerChar
    console.log(lowerChar);
  }

  if (passwordOptions.hasNumbers === true){
    eligibleCharacters += numbers
    var number = getRandomCharacter(numbers); 
    finalPassword += numbers
    console.log(numbers);
  }

  if  (passwordOptions.hasUpperCase === true){
    eligibleCharacters += upperCase
    var upperChar = getRandomCharacter(upperCase);
    finalPassword += upperChar
    console.log(upperChar)
  }
    
  if (passwordOptions.hasSpecialCharacters === true){
    eligibleCharacters += specialCharacter
   var specialChar = getRandomCharacter(specialCharacter);
   finalPassword += specialCharacter
  }
    
  
  // you’ll need to use passwordLength to determine how many total characters get added to the final password
	// once the password is generated you can call the writePassword function to write it to the DOM
}    

function getRandomCharacter(charType) {
  var index = Math.floor(Math.random() * charType.length)
  var character = charType[index]
  console.log("character",character);
  return character
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// for (let index = 0; index < length; index++) {
//   results += passwordOptions.charAt(
//     Math.floor(Math.random() * passwordOptions.length)
//   );
// }


// function generatePassword(){
//   range = 128 - 8
//   length = Math.floor(Math.random() * range + 8 );
  
//   password = ""
//   for (let index = 0; index <length; index++) {
//     size = value.length
//     i = Math.floor(Math.random() * size);

//      password = password + value.charAt(i);
    
//   }
  
//   return password
// }
function UserInput(password) {
  document.getElementById("password").textContent = password;
}

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}

// Add event listener to generate button
generateBtn.addEventListener ("click", function(){

  getUserInput() 
});