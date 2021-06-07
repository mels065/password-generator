// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    // Get minimum password length
    var minLength = Number.NEGATIVE_INFINITY;
    while (isNaN(minLength) || minLength < 8) {
        minLength = Number(prompt("Select minimum password length (cannot be less than 8)", 8));
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
