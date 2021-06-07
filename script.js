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

    // Get maximum password length
    var maxLength = Number.POSITIVE_INFINITY;
    while (isNaN(maxLength) || maxLength < minLength || maxLength > 128) {
        maxLength = Number(prompt("Select maximum password length (cannot be more than 128)", 128));
    }

    // Choose options for character types
    var charTypes = [];
    var option = null;
    /*
        1: lowercase
        2: uppercase
        3: numeric
        4: special
        5: quit
    */
    while (charTypes.length === 0 || option !== 5) {
        option = Number(prompt("Choose character types (1: lowercase, 2: uppercase, 3: numeric, 4: special, 5: quit)"));
        switch (option) {
            case 1:
            case 2:
            case 3:
            case 4:
                if (!charTypes.includes(option)) charTypes.push(option);
                break;
            case 5:
                if (charTypes.length == 0) charTypes = null;
        }
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
