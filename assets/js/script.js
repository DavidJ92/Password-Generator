// Assignment code here
var generatePassword = function() {
  var passwordLength;
  var lowercase;
  var uppercase;
  var numeric;
  var special;

  // Use a loop to repeatedly prompt for input until it's valid
  while (true) {
    // Prompt user for password length
    passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));

    // Check if password length is a number
    if (isNaN(passwordLength)) {
      alert("Please enter a number.");
      continue;
    }
    
    // Check if password length is between 8 and 128
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128.");
      continue;
    }
    
    // Prompt user for character types
    lowercase = confirm("Would you like to include lowercase characters?");
    uppercase = confirm("Would you like to include uppercase characters?");
    numeric = confirm("Would you like to include numeric characters?");
    special = confirm("Would you like to include special characters?");
    
    // Check if user selected at least one character type
    if (!lowercase && !uppercase && !numeric && !special) {
      alert("Please select at least one character type.");
      continue;
    }

    break; // Exit the loop if input is valid
  }

  // Create arrays of character types
  var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
  var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numericArray = "0123456789".split("");
  var specialArray = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

  // Create array of selected character types
  var selectedArray = [];
  if (lowercase) {
    selectedArray = selectedArray.concat(lowercaseArray);
  }
  if (uppercase) {
    selectedArray = selectedArray.concat(uppercaseArray);
  }
  if (numeric) {
    selectedArray = selectedArray.concat(numericArray);
  }
  if (special) {
    selectedArray = selectedArray.concat(specialArray);
  }

  // Create password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += selectedArray[Math.floor(Math.random() * selectedArray.length)];
  }
  return password;
};

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