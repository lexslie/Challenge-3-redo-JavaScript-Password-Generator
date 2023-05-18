// Assignment Code

var generatePassword = function() {

  // Password criteria
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '"', '#', '$', '%', '&', '*', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '~'];
  var possibleCharacters = [];


  // Prompting user for desired password length
  passwordLength = window.prompt("Enter a desired password length between 8 and 128 characters:");
  if (passwordLength < 8 || passwordLength > 128) {
    return "Please choose a valid number of characters.";
  };

  // Prompting user for character types to include in the password
  lowercaseOption = confirm("Your password will include lowercase characters. (Choose 'OK' to confirm or 'cancel' to decline)");
  
  uppercaseOption = confirm("Your password will include uppercase characters.");

  numericOption = confirm("Your password will include numbers.");

  specialOption = confirm("Your password will include special characters.")

  // Assures that at least one character type is being selected/confirmed
  if (lowercaseOption === false && uppercaseOption === false && numericOption === false && specialOption === false) {
    return "Please select at least one character type.";
  };

  //combining password criteria
  if (lowercaseOption) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (uppercaseOption) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (numericOption) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (specialOption) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Creating the password with random combination of chosen password criteria
  let Password = ""
  for (let i = 0; i < passwordLength; i++) {
    let random =[Math.floor(Math.random() * possibleCharacters.length)];
    Password = Password + possibleCharacters[random];
  }
  return Password;
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
