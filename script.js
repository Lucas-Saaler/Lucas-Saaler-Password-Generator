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

// This function generates the password
function generatePassword() {
  // This variable stores the initial output of the for loop
  var protoPassword = ""
  // This variable stores the generated password at the specification of the selected character limit
  var finalPwd = ""
  // This prompt allows the user to type in how many characters they want
  var charSelection = prompt("How many characters do you wish your password to contain? (Between 8 and 128)")
  // Checks to see if the character requirements are met
    if (charSelection >= 8 && charSelection <= 128) {
      // Checks what kinds of characters the user wants
      var isUpperCase = confirm("Do you want your password to contain capital letters?")
      var isLowerCase = confirm("Do you want your password to contain lowercase letters?")
      var isNumber = confirm("Do you want your password to contain numbers?")
      var isSpecial = confirm("Do you want your password to contain special characters?")
      // Runs through the variables, selecting random numbers from all of the variables the user specified
      for(var i=0; i < charSelection; i++) {
          if (isUpperCase){
            var positionStringUpperCase = Math.floor(Math.random() * 26)
            protoPassword = protoPassword + upperCase[positionStringUpperCase]
          }
          if (isLowerCase){
            var positionStringLowerCase = Math.floor(Math.random() * 26)
            protoPassword = protoPassword + lowerCase[positionStringLowerCase]
          }
          if (isNumber){
            var positionStringNumber = Math.floor(Math.random() * 9)
            protoPassword = protoPassword + numbers[positionStringNumber]
          }
          if (isSpecial){
            var positionStringSpecial = Math.floor(Math.random() * 26)
            protoPassword = protoPassword + special[positionStringSpecial]
          }
        }
      // Cuts down the generated characters to the specified character limit
      if (protoPassword.length > charSelection){
        for (var i=0; i < charSelection; i++) {
          finalPwd = finalPwd + protoPassword[i]
      }
      }else{
        finalPwd = protoPassword
      }
    // Will return an alert if the character requirements are not met
    }else{
      alert("Please input a number between 8 and 128.")
    }
    // Returns the final password, so the above function can display it
    return finalPwd
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);