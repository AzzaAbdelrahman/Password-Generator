// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  do {   passwordLength = prompt("Choose a password length between 8 and 128")

  if (passwordLength === null) {
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a number between 8 and 128")
  }

} while (passwordLength < 8 || passwordLength > 128 || passwordLength != parseInt(passwordLength));

finalPassword = ""

do {

  var lowercase = confirm("Include Lowercase Characters in you password?")
  var uppercase = confirm("Include Uppercase Characters in you password?")
  var numeric = confirm("Include Numeric Characters in you password?")
  var specialChar = confirm("Include Special Characters in you password? ($@%&*, etc)")

  if (lowercase) {
    finalPassword += lowerCasedCharacters.join("")
  }
  if (uppercase) {
    finalPassword += upperCasedCharacters.join("")
  }
  if (numeric) {
    finalPassword += numericCharacters.join("")
  }
  if (specialChar) {
    finalPassword += specialCharacters.join("")
  }

  if (finalPassword === "") {
    if (!confirm('You need to choose at least one "Character Type" or click "Cancel" to exit')) {
      return
    }
  }

} while (finalPassword === "");

}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function copyToClipboard() {
  let copiedPass  = document.getElementById("password");
  let passwordCopied = copiedPass.value
  navigator.clipboard.writeText(passwordCopied).then(() => {
    alert("The password has been copied to clipboard!");
  }, () => {
    alert("The password has not been copied, try again");
  });
}
