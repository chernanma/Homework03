// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passlenght = prompt("Please enter password length of at least 8 characters and no more than 128 characters");
  var intpasslenght = parseInt(passlenght);
  var chartype;
  
  console.log(intpasslenght);  
  if (passlenght === null){
    return;
  } else {
    if (intpasslenght < 8 || intpasslenght > 120 || isNaN(intpasslenght)) {
      alert("Input must be a number between 8 and 120");             
      writePassword();
    }
  }
   
  var chartstring = prompt("Please enter character type, L (lowercase), U (uppercase), N (numeric) or S (special characters)");
  
  if (chartstring === null){
    return;
  } else {
    // var chartypelowercase = chartstring.toLowerCase();    
    // var chartype = chartypelowercase.split(",");  
    // console.log(chartype);    
    while (validtype){
        console.log(validtype);
         chartstring = prompt("Please enter character type, L (lowercase), U (uppercase), N (numeric) or S (special characters)");
        validtype();
        }
    var chartypelowercase = chartstring.toLowerCase();    
    var chartype = chartypelowercase.split(",");  
    console.log(chartype); 
  }
     
    
    
  // passwordText.value = password;

  }

function generatePassword() {
  var result;
  result = "almost done"
  return result;
}

function validtype(){
  if (chartstring === null){
    console.log(chartstring);
    return false;
  }
  
  if (chartstring.lenght < 1){
    return true;
  }    
  if (chartstring != ""){
    return false;
    
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
