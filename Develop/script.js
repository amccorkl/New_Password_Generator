// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
  //lowercase
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  //upper.toUpperCase in variable below
  var upperCase = lowerCase.toUpperCase();
  //numeric
  var numeric = "1234567890";
  //special
  var specialChar = "!@#%^&*.,?}{)(><";
  //array of choices?
  var choiceArray = [lowerCase, upperCase, numeric, specialChar];
  var returnPassword = [];

//generate the password
function generatePassword () {

  //ask user length of password wanted
  var passwordLength = window.prompt("Choose a length between 8 and 128 characters: \n");
  // console.log(passwordLength);

  if (passwordLength < 8 && passwordLength > 128) {
    window.alert("Your password must be between 8 and 128. Click on the Generate Button to start again.");
    return;
  }
  // this isn't working yet....console.log(passwordLength);
  

  //confirm what other characters wanted, at least 1 validated
  window.alert("You will also need to choose of the following criteria: lower case letters, upper case letters, numbers, and/or special characters. \nFor a stronger password, choose all the criteria.")
  // console.log(allOptions);

    //lowercase
  var askLowerCase = window.confirm("Do you want lower case letters included? ");

  if (askLowerCase === true) {
    choiceArray.push[lowerCase];
  }
    // console.log("working?", askLowerCase);

    //uppercase (upper.toUpperCase in variable)
  var askUpperCase = window.confirm("Do you want upper case letters included? ");
    
  if (askUpperCase === true) {
    choiceArray.push[upperCase];
  } 
    
  
  //  console.log("does this work", upperCase);
    //numeric

  askNumeric = window.confirm("Do you want numbers included? ");
  
  if (askNumeric === true) {
    choiceArray.push[numeric];
  }

    //special
  askSpecialChar = window.confirm("Do you want special characters included? ");

  if (askSpecialChar) {
    choiceArray.push[specialChar];
  }

  if (!askLowerCase && !askUpperCase && !askNumeric && !askSpecialChar) {
    return alert("You must choose at least one extra option. Click refresh to start over."); 
  }
  


  // //push it all together in the "random" array
  // choiceArray = Math.floor(Math.random() * passwordLength.length);
   
  // for (let i = 0; i < choiceArray.length; i++) {
  //   if (lowerCase && upperCase && numeric && specialChar) {
  //     return;
  //   } else {
  //     window.alert("You must choose at least one extra password perameter. Please refresh the page and start over.")
  //   }
    
  //   // const element = array[i];
    
  // }
    
  
}
  




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
