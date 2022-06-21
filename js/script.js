/*   JavaScript 6th Edition
*    Chapter 6
*    Project 3
*    Author: Calley Garvin
*    Date: 03/24/2021

*    Filename: script.js
*/


"use strict"; // interpret document contents in JavaScript strict mode

//function to validate the username and required password section of my form for the Facinating Felines
function validate_my_form(){  
var username = document.getElementById("enter_username").value;
var messBx = document.getElementById("your_message").value;
var password = document.getElementById("enter_password").value; 
var dropVote = document.getElementById("check_vote").value;
  

if (messBx === null || messBx === ""){  
  alert("Feedback is required, please fill out this message box.");  
  return false;
}

 if (dropVote == false && dropVote == ""){  
  alert("One choice in this drop down menu is required!");  
  return false;
}

if (username === null || username === ""){  
  alert("Please enter your username.");  
  return false;
}

if(password === null || password === ""){ //restricts password to be 10 characters per the Project 3, 2.C requirement
  alert("This field is required. Please add a password of 10 characters only.");  
  return false;  
  }
   

  if(password.length < 10){ //restricts password to be 10 characters per the Project 3, 2.C requirement
  alert("Not enough characters. Your password must be 10 characters long.");  
  return false;  
  }
   else if(password.length > 10){ //restricts password to be 10 characters per the Project 3, 2.C requirement
  alert("Too many characters. Your password must be 10 characters long.");  
  return false;  
  }
}


function option_clicked(){ // for the feline voter section - radio buttons per Project 3 requirement
	     var british_option_clicked = document.getElementById('vote1').checked;
	     var bengal_option_clicked = document.getElementById('vote2').checked;
		 var scottish_option_clicked = document.getElementById('vote3').checked;
		 if(british_option_clicked === false && bengal_option_clicked === false && scottish_option_clicked === false){
		 window.alert('Please, kindly select an option.');
		   return false;
		 }else{
		   return true;
		 }
	}
	







//function for my Event Handlers
function validate_my_form2(){  
var username = document.getElementById("enter_username").value;
var messBx = document.getElementById("your_message").value;
var password = document.getElementById("enter_password").value; 
var dropVote = document.getElementById("check_vote").value;
  

if (messBx === null || messBx === ""){  
  alert("Hey there!! Please click Ok.");  
  return false;
}

 if (dropVote == false && dropVote == ""){  
  alert("Hi again!! Please click the Ok Button!");  
  return false;
}

if (username === null || username === ""){  
  alert("Me again, click that excellent Ok Button to proceed!");  
  return false;
}

if(password === null || password === ""){ //restricts password to be 10 characters per the Project 3, 2.C requirement
  alert(" Hi again! The Ok Button is waiting patiently");  
  return false;  
  }
   

  if(password.length < 10){ //restricts password to be 10 characters per the Project 3, 2.C requirement
  alert("Click Ok to proceed!");  
  return false;  
  }
   else if(password.length > 10){ //restricts password to be 10 characters per the Project 3, 2.C requirement
  alert("Click Ok.");  
  return false;  
  }
}	


function option_clicked2(){ // for the feline voter section - radio buttons per Project 3 requirement
	     var british_option_clicked = document.getElementById('vote1').checked;
	     var bengal_option_clicked = document.getElementById('vote2').checked;
		 var scottish_option_clicked = document.getElementById('vote3').checked;
		 if(british_option_clicked === false && bengal_option_clicked === false && scottish_option_clicked === false){
		 window.alert('Are You Ready To Vote? Click Ok to see what\'s next!.');
		   return false;
		 }else{
		   return true;
		 }
	}
	
// add backward compatible event listener to the login button for the form section
      var submitButton = document.getElementById("login");
      if (submitButton.addEventListener) {
        submitButton.addEventListener("click", validate_my_form2, false); 
      } else if (submitButton.attachEvent)  {
        submitButton.attachEvent("onclick", validate_my_form2);
      }
	
	
// add backward compatible event listener to the submit button for the Voter Submission section
      var submitButton = document.getElementById("submit");
      if (submitButton.addEventListener) {
        submitButton.addEventListener("click", option_clicked2, false); 
      } else if (submitButton.attachEvent)  {
        submitButton.attachEvent("onclick", option_clicked2);
      }
	











	