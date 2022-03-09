// Code connects to the html button #generate
var generateBtn = document.querySelector("#generate");


//define variables
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArr = "ABCDEFGHIJKLMNOPEQRSTUVWXYZ".split("");
var specialCharArr = "!@#$%^&*()_+=-{}][|:;?/>.<".split("");
var numbersArr = "1234567890".split("");
var allCharacters = [];
var returnPassword = [];

function generatePassword() {
  //length condition first
  var passwordLength = prompt(
    "How many characters do you want your password to be? \nIt must be between 8 and 128 characters.", "enter a number"
  );

  // console.log(passwordLength);

  //check if password length conditions met
  if (passwordLength < 8 && passwordLength > 128) {
    alert(
      "Reminder: your password must be between 8 and 128 characters. Please reenter your character length by clicking on 'Generate Password' again."
    );
    return; //undefined returned when user enters nothing
  }

  //loop asks user to confirm choices  ????? doesn't work, user can still click cancel and it progresses
  var askLowerCase = confirm(
    "Click ok to confirm using lower case letters in your password. 'Generator' will not work if you don't click ok."
  );

  if (askLowerCase) {
    allCharacters = allCharacters.concat(lowerCaseArr);
  }

  var askUpperCase = confirm(
    "Click ok to confirm using upper case letters in your password"
  );
  if (askUpperCase) {
    allCharacters = allCharacters.concat(upperCaseArr);
    
  }
  var askNumbers = confirm(
    "Click ok to confirm using numbers in your password"
  );
  if (askNumbers) {
    allCharacters = allCharacters.concat(numbersArr);
    
  }

  var askSpecialChar = confirm(
    "Click ok to confirm using special characters in your password"
  );
  if (askSpecialChar) {
    allCharacters = allCharacters.concat(specialCharArr);
  }
  //console.log(allCharacters);
  
  if (!askLowerCase && !askUpperCase && !askNumbers && !askSpecialChar) {
    return alert("please select ok for at least 1 criteria option. Refresh the page and start over.");
  }

  //console.log(allCharacters);

  // run the loop that pulls all required letters, numbers, symbols until the length is reached
  for (var i = 0; i < passwordLength; i++) {
    var index= Math.floor(Math.random() * allCharacters.length)
    var oneCharacter = allCharacters[index]
    returnPassword.push(oneCharacter)
  }
  //console.log(`For return password: ${returnPassword}`);

  return returnPassword.join("");
}

// Write the text into the textarea
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// add event listener to generate button, with local variables
generateBtn.addEventListener("click", writePassword);
