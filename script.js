// Assignment code here
// global variables 
var passwordLength;
var password = "";

// password variables
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const specialChar = "!@#$%^&*(){}[]=+-";
var uppercaseSelected;
var lowercaseSelected;
var numbersSelected;
var specialCharSelected;

// Prompts function
function generatePassword () {
  // creating an empty password
  password = "";
  passwordLength = prompt("Enter the desired number of characters for your password (8-128)");

  // error message if password length is not acceptable
  if (!(passwordLength >= 8 && passwordLength <= 128)) { 
      alert ("Your desired password length must be between 8 - 128. Try again");
      return;
    }   
  else {
      lowercaseSelected = confirm("Would you like to include lower case letters?");
      uppercaseSelected = confirm("Would you like to include uppercase letters?");
      numbersSelected = confirm("Would you like to include numbers?");
      specialCharSelected = confirm("Would you like to include special characters?"); 
  } 
  // this if statement checks if the user has selected password input
  if (!lowercaseSelected && !uppercaseSelected && !numbersSelected && !specialCharSelected) {
      alert("No selections were made.");
      return;
    } 
  else {
    // this adds the selected characters to the password
    if (lowercaseSelected === true) {
      password += lowercaseLetters;
    } 
    if (uppercaseSelected === true) {
      password += uppercaseLetters;
    } 
    if (numbersSelected === true) {
      password += numbers;
    } 
    if (specialCharSelected === true) {
      password += specialChar;   
    }  
  }
  // this will be the returned password in string format
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// writing th password to the #generate element
function writePassword() {
  let password = generatePassword();
  let showPassword = "";
// This is the for loop that will loop through each character in the password
  for (let x = 0; x < passwordLength; x++) {
    let randomChar = Math.floor(Math.random() * password.length);
    showPassword += password.substring(randomChar, randomChar +1);
  }
  var passwordText = document.querySelector("#password");
  passwordText.textContent = showPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);