// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = lowerCase.toUpperCase()
var numbers = "0123456789"
var special = "!@#$%^&*()-_=+[{]};:,<.>/?"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var finalPwd = ""
  var charSelection = prompt("How many characters do you wish your password to contain? (Between 8 and 128)")
    if (charSelection >= 8 && charSelection <= 128) {
      var isUpperCase = confirm("Do you want your password to contain capital letters?")
      var isLowerCase = confirm("Do you want your password to contain lowercase letters?")
      var isNumber = confirm("Do you want your password to contain numbers?")
      var isSpecial = confirm("Do you want your password to contain special characters?")
    }else{
      alert("Please input a number between 8 and 128.")
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);