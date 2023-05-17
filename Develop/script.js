// Assignment Code

var generatePassword = function() {

  // Password criteria
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '"', '#', '$', '%', '&', '*', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '~'];


  // Prompting user for desired password length
  passwordLength = window.prompt("Enter a desired password length between 8 and 128 characters:");
  if (passwordLength < 8 || passwordLength > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(passwordLength)) {
    passwordLength = prompt("Please enter a valid number.");
  }

  // Prompting user for character types to include in the password
  lowercaseOption = confirm("Your password will include lowercase characters.");
  
  uppercaseOption = confirm("Your password will include uppercase characters.");

  numericOption = confirm("Your password will include numbers.");

  specialOption = confirm("Your password will include special characters.")

  // Assures that at least one character type is being selected/confirmed
  if (lowercaseOption === false && uppercaseOption === false && numericOption === false && specialOption === false) {
    return "Please select at least one character type.";
  };
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
