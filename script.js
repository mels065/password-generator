// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz".split("");
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const NUMERIC = "0123456789".split("");
const SPECIAL = "!@#$%^&*()-_+=".split("");

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

    // Generate password
    var newPassword = ""
    while (!meetsCriteria(newPassword, charTypes)) {
        newPassword = "";
        // Generate random number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        newLength = Math.floor(Math.random() * (maxLength - minLength) + minLength);
        // Assign a new character `newLength` number of times
        for (var i = 0; i < newLength; i++) {
            // Select a character type
            option = charTypes[
                Math.floor(Math.random() * charTypes.length)
            ];
            switch (option) {
                case 1:
                    newPassword += LOWERCASE[
                        Math.floor(Math.random() * LOWERCASE.length)
                    ];
                    break;
                case 2:
                    newPassword += UPPERCASE[
                        Math.floor(Math.random() * UPPERCASE.length)
                    ];
                    break;
                case 3:
                    newPassword += NUMERIC[
                        Math.floor(Math.random() * NUMERIC.length)
                    ];
                    break;
                case 4:
                    newPassword += SPECIAL[
                        Math.floor(Math.random() * SPECIAL.length)
                    ];
                    break;
            }
        }
    }

    return newPassword;
}

// Checks if all character types were used in password
function meetsCriteria(password, charTypes) {
    if (password.length === 0) return false;
    console.log(password);

    return charTypes.every((type) => {
        switch (type) {
            case 1:
                console.log(type);
                return password.split("").some(
                    ch => LOWERCASE.includes(ch)
                );
            case 2:
                console.log(type);
                return password.split("").some(
                    ch => UPPERCASE.includes(ch)
                );
            case 3:
                return password.split("").some(
                    ch => NUMERIC.includes(ch)
                );
            case 4:
                return password.split("").some(
                    ch => SPECIAL.includes(ch)
                );
        }
    });
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
