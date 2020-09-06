// Assignment Code
var specialCharacters = ['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var generateBtn = document.querySelector("#generate");

// var passlenght = false;
// var chartstring = false;

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;   
  
}    

function generatePassword() {
  var chartype;  
  var result = "";
  var passlenght = false;
  var chartstring = false;
  // Verify input for password lenght, base on criteria
  while(passlenght === false){
    passlenght =passlenghtval();
    console.log(passlenght); // log for debugging
  }
  console.log(passlenght); // log for debugging
  
  if (passlenght != "Password Generation canceled"){ 
    // Verify input for password type, base on criteria 
    while(chartstring === false){
      chartstring = passtypeval();       
    }
    console.log(chartstring); // log for debugging

    if (chartstring != null && chartstring != "Password Generation canceled"){
      
      var str = chartstring;
      console.log(str); // log for debugging

      //Generating password
      for (var i = 1; i <= passlenght; i++) { 
        var char = Math.floor(Math.random() 
                    * str.length + 1); 
          
        result += str[char];
        console.log(char); // log for debugging
      }      
    }         
  }
  return result;
}

// function to validate password lenght, numbers between 8 - 128
function passlenghtval (){
  var inputlenght = prompt("Please enter password length of at least 8 characters and no more than 128 characters");
  var intpasslenght = parseInt(inputlenght);
  
  console.log(intpasslenght); // log for debugging

  if (inputlenght === null){
    // result = "Password Generation has been canceled";
    return "Password Generation canceled";
  } else if (intpasslenght < 8 || intpasslenght > 128 || isNaN(intpasslenght)) {
      alert("Input must be a number between 8 and 128");             
      return false; 
    }
    else{
      console.log(intpasslenght); // log for debugging
      return intpasslenght;
  }
}


// function to validate password type, only L/n (lowercase), U/u (uppercase), N/n (numeric) or S/n (special characters)
function passtypeval (){
  
  var inputchartst = prompt("Please enter character type, L/l (lowercase), U/u (uppercase), N/n (numeric) or S/s (special characters)" + "\n Example: l,u,s 'Password will contain Lowercase - Uppercase - Special Characters' ");
  //Validate to have only l/L , u/U, n/N,s/s or "," characters in input
  var pattern= /^[lLuUnNsS,]+$/;

  //Canceling process if Cancel button in Type character prompt is pressed
  if (inputchartst != null){
    var str = inputchartst.toLocaleLowerCase();
    var allowcharacters = pattern.test(str);
  }  

  console.log(allowcharacters);// log for debugging
  console.log(str);// log for debugging

  //Canceling process if Cancel button in Type character prompt is pressed
  if (inputchartst === null){
    result = "Password Generation canceled";
    return result;
  }
  if (allowcharacters) {  
    
    var newstr = str.replace(/,/g,""); //Removing "," from data entered in prompt 
    var strarray = newstr.split(""); // Convert string into an array   
    var finalarray = [];  
    let uniqueInputChars = [...new Set(strarray)]; //Removing duplicates from array

    console.log(uniqueInputChars);// log for debugging

    //Creating chars Pool for the password generating process base on criteria
    for (var i=0;i < uniqueInputChars.length;i++){
      console.log(uniqueInputChars);
      if (uniqueInputChars[i] === "l"){
        finalarray = finalarray.concat(lowerCasedCharacters);
      }
      if (uniqueInputChars[i] === "u"){
        finalarray = finalarray.concat(upperCasedCharacters);
      }
      if (uniqueInputChars[i] === "n"){
        finalarray = finalarray.concat(numericCharacters);
      }
      if (uniqueInputChars[i] === "s"){
        finalarray = finalarray.concat(specialCharacters);
      }
    }
    console.log(finalarray);// log for debugging
    return finalarray;  
  }else{
    return false;
  }  
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
