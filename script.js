// Code connects to the html button #generate
var generateBtn = document.querySelector("#generate");


//define variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPEQRSTUVWXYZ".split("");
var specialChar = "!@#$%^&*()_+=-{}][|:;?/>.<".split("");
var numbers = "1234567890".split("");
var allCharacters = [];
var returnPassword = [];
// var returnPassword = ""; use this for keeping the password a string, see connecting code below on lines 74 and 81


function generatePassword() {
  //determine the length condition first
  var passwordLength = prompt(
    "How many characters do you want in your password? \nIt must be between 8 and 128 characters.", "enter a number"
  );

  
  //check if password length conditions met
  if (passwordLength < 8 && passwordLength > 128 === false) {
    alert(
      "Reminder: your password must be between 8 and 128 characters. Please reenter your character length by clicking on 'Generate Password' again."
    ); 
    
    return; 
  }


  alert("You must choose at least one of the following criteria that appear in separate windows. Your choice of password criteria are \n--lower case letters \n--upper case letters \n--numbers \n--and special characters");

  var askLowerCase = confirm(
    "Click ok to confirm using lower case letters in your password.");
  if (askLowerCase) {
    allCharacters = allCharacters.concat(lowerCase);
  }

  var askUpperCase = confirm(
    "Click ok to confirm using upper case letters in your password.");
  if (askUpperCase) {
    allCharacters = allCharacters.concat(upperCase);
  }

  var askNumbers = confirm(
    "Click ok to confirm using numbers in your password.");
  if (askNumbers) {
    allCharacters = allCharacters.concat(numbers);
      console.log(askNumbers);
  }

  var askSpecialChar = confirm(
    "Click ok to confirm using special characters in your password.");
  if (askSpecialChar) {
    allCharacters = allCharacters.concat(specialChar);
  }
  //console.log(allCharacters);
  
  if (!askLowerCase && !askUpperCase && !askNumbers && !askSpecialChar) {
    return alert("You must choose OK for at least 1 criteria option. Refresh the page and start over.");
  }

  //console.log(allCharacters);

  // run the loop that pulls all required letters, numbers, and symbols until the length is reached a
  for (var i = 0; i < passwordLength; i++) {
    var index= Math.floor(Math.random() * allCharacters.length)

    var oneCharacter = allCharacters[index]
    // pushing the oneCharacter array into the returnPassword array and make it a string below with the join
    returnPassword.push(oneCharacter)

    // returnPassword += oneCharacter; use this for keeping the password just a string instead of the returnPassword.push
    // console.log(returnPassword);

  }
  //join combines all the array characters pushed into the return password string
  return returnPassword.join("");

  // return returnPassword; use this for keeping the password as just a string
}

// Write the text into the textarea
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// add event listener to generate button, with local variables
generateBtn.addEventListener("click", writePassword);
