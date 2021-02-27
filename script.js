// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Arrays 
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "?", "+", ".", "*"];

// Declaration 
var acceptedLength= "";
var acceptedUppercase;
var acceptedLowercase;
var acceptedNumbers;
var specialCharacter;


//Will ask how many characters the password will contain
function generatePassword() {
  //Password Guidelines
alert(`Password Guidelines: At least 8 character, A mixture of both uppercase and lowercase, A mixture of letters and numbers, and inclusion of at least on special character such as ! @ # ?`)
var acceptedLength = (prompt("How many characters will your password contain? Must contain at least 8 characters."))


while(acceptedLength <= 7 || acceptedLength >= 51) {
  alert("Password length must be between 8-128 characters. Try again");
  var acceptedLength = (prompt("How many characters will your password contain? Must contain at least 8 characters."))
}

// Repeat back how many charactes the user will have  
alert(`Your password will have ${acceptedLength} characters`);

// Determine parameters of password 
var acceptedUppercase = confirm("Click OK to confirm if you would like uppercase letters in your password.");
var acceptedLowercase = confirm("Click OK to confirm if you would like lowercase letters in your password.")
var acceptedNumbers = confirm("Click OK to confirm if you would like numbers in your password.")
var specialCharacter = confirm("Click OK to confirm if you would like special characters in your password.")

  // Loop if answer is outside the parameters 
  while(acceptedUppercase === false && acceptedLowercase === false && specialCharacter === false && acceptednumber === false) {
    alert("You must choose at least one parameter");
    var acceptedUppercase = confirm("Click OK to confirm if you would like to include uppercase characters"); 
    var acceptedLowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var acceptednumber= confirm("Click OK to confirm if you would like to include numeric characters");    
    var specialCharacter = confirm("Click OK to confirm if you would like to include special characters");  
} 
var passwordCharacters = []
      
if (specialChar) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}

if (acceptednumber) {
  passwordCharacters = passwordCharacters.concat(number)
}
  
if (acceptedLowercase) {
  passwordCharacters = passwordCharacters.concat(alphaLower)
}

if (acceptedUppercase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper)
}

  console.log(passwordCharacters)

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = ""
  
  for (var i = 0; i < acceptedLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
return randomPassword
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}