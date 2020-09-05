// Assignment Code
var specialCharacters = ['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
  passwordText.setAttribute("style","font-size:30px;");

  
}    

function generatePassword() {
  var result =""; 
  var passlenght = prompt("Please enter password length of at least 8 characters and no more than 128 characters");
  var intpasslenght = parseInt(passlenght);
  var chartype;
  
  console.log(intpasslenght);  
  if (passlenght === null){
    result = "Generation has been canceled";
    return result;
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
    while (chartstring.length < 1) {
      if (chartstring === null){
        return;
      } else{
        chartstring = prompt("Please enter character type, L (lowercase), U (uppercase), N (numeric) or S (special characters)");
      }
    }
  }


  console.log(passlenght);
  console.log(chartstring);   
 
  if (isNaN(intpasslenght)){ 
    result = "Generation has been canceled";   
  }
  else{

  if (chartstring === "L"){
      var str = lowerCasedCharacters;
      for (i = 0; i <= intpasslenght; i++) { 
          var char = Math.floor(Math.random() 
                      * str.length); 
            
          result += str[char]; 
      } 
    }else if (chartstring === "U"){
          var str = upperCasedCharacters;
          for (i = 0; i <= intpasslenght; i++) { 
            var char = Math.floor(Math.random() 
                        * str.length); 
              
            result += str[char]; 

      }
    }else if (chartstring === "N") {
          var str = numericCharacters;
          for (i = 0; i <= intpasslenght; i++) { 
            var char = Math.floor(Math.random() 
                        * str.length); 
              
            result += str[char];
        
      } 
    }else if(chartstring === "S"){
          var str = specialCharacters;
          for (i = 0; i <= intpasslenght; i++) { 
            var char = Math.floor(Math.random() 
                        * str.length); 
              
            result += str[char];
          }    
      
    }else{
      var str = specialCharacters + lowerCasedCharacters + upperCasedCharacters + numericCharacters;
          for (i = 0; i <= intpasslenght; i++) { 
            var char = Math.floor(Math.random() 
                        * str.length); 
              
            result += str[char];
          }    
    }
    
  }
  return result;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
