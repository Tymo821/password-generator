// Assignment code here
// Created arrays for the user inputs
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterOptions = ["~", "!", "@", "#", "$", "%", "^","&", "*", "(", ")", "-", "="];

// created a function for the password generator
function generatePassword() {
 
  //created the prompts for the user input
  var passwordLength = window.prompt("Enter password length (between 8 - 128 characters"); 
  var lowerCase = window.prompt("Do you want lower case letters? yes or no");
  var upperCase = window.prompt("Do you want UPPER CASE letters? yes or no");
  var numbers = window.prompt("Do you want to use numbers? yes or no");
  var specialCharacters = window.prompt("Do you want to use special characters? yes or no");

  //  created empty arrays for the input/new password
  var userInput = []
  var newPassword = '';

  //checked the user input with if/else statements, added to userInput array if yes
  if(lowerCase == "yes" ) {
    userInput = userInput.concat(lowerCaseOptions);
  } 
  if(upperCase == "yes" ) {
    userInput = userInput.concat(upperCaseOptions);
  }
  if(numbers == "yes" ) {
    userInput = userInput.concat(numberOptions);
  }
  if(specialCharacters == "yes" ) {
    userInput = userInput.concat(specialCharacterOptions);
  }

  //created a for loop to run the randomizer 
  for (let i = 0; i < passwordLength; i++) {
    var arrayLength = userInput.length
    var randomNumber = Math.floor(Math.random() * arrayLength);
    var newPassword = newPassword + userInput[randomNumber];
  }
  
  //returned the new password
  return (newPassword);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
