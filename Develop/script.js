// this code was done with a help of google, youtube , and Serge P.

// var for characters
var specialSymb = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];
var numbersChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
var upperCase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];





function passOptions(){
// ask length of pass in numbers
var length = parseInt(
  window.prompt("What will be your password length?")
);
if (Number.isNaN (length)) {
  window.alert("Please put amount in numbers");
 
  return null;
}
if (length < 8){
  window.alert("Password length must be atleast 8 characters long");
  return null;
}
if (length > 128) {
  window.alert("Password lenght must be less than 128 characters")
  return null;
}

// ask if add symbols in password
var addSpecialSymb = confirm("Would you like to add special symbols?");
//ask if add numbers in password
var addNumbersChar = confirm("Would you like to add numbers in password?");
//ask if add lower case 
var addLowerCase = confirm("Would you like to add lower case?");
//ask to add Upper case 
var addUpperCase = confirm("Would you like to add Upper case?");

// if none selected alert to select atleast one character type
if (
  addSpecialSymb === false &&
  addNumbersChar === false &&
  addLowerCase === false &&
  addUpperCase === false
) {
  window.alert("You must select atleast one type.");
  return null;
}
var passwordOptions = {
  length: length,
  addSpecialSymb: addSpecialSymb,
  addNumbersChar: addNumbersChar,
  addLowerCase: addLowerCase,
  addUpperCase: addUpperCase
};
return passwordOptions;
}

function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;
}
// generate password function
function generatePassword() {
  var options = passOptions();
  var result = []
  var possibleChar = [];
  var guaranteedChar = [];
if (!options) return null;
if (options.addSpecialSymb) {
  possibleChar = possibleChar.concat(specialSymb);
  guaranteedChar.push(getRandom(specialSymb));
}
if (options.addNumbersChar) {
  possibleChar = possibleChar.concat(numbersChar);
  guaranteedChar.push(getRandom(numbersChar));
}
if (options.addLowerChar) {
  possibleChar = possibleChar.concat(lowerCase);
  guaranteedChar.push(getRandom(lowerCase));
}
if (options.addUpperCase) {
  possibleChar = possibleChar.concat(upperCase);
  guaranteedChar.push(getRandom(upperCase));
}
for (var i = 0; i < options.length; i++) {
  var possibleChar = getRandom(possibleChar);
  result.push(possibleChar);
}
for (var i = 0; i < guaranteedChar.length; i++) {
  result[i] = guaranteedChar[i];
}
return result.join('');
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);