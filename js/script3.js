/*   JavaScript 6th Edition
*    Chapter 8
*    Project 4
*    Author: Calley Garvin
*    Date: 04/06/2021

*    Filename: script3.js
*/


"use strict"; // interpret document contents in JavaScript strict mode
var formcontents=document.getElementsByClassName("contact");
var validform=true;
	
	

//Validates my form with Project 4 regular expression requirements.
function validateForm(){
	document.getElementById("check_it").checked=false;
	validform=true;
	var myerrormsg=document.getElementById("myerrormsg");
	myerrormsg.innerHTML="";
	var rate_me=document.getElementById("rate_me");
	rate_me.innerHTML="";
	var phonemsg=document.getElementById("errorForphone");
	phonemsg.innerHTML="";
	var firstName=document.getElementById("firstName");
	firstName.innerHTML="";
	var lastName=document.getElementById("lastName");
	lastName.innerHTML="";
	var texter=document.getElementById("add_mes");
	texter.innerHTML="";
	var enter_email=document.getElementById("enter_email");
	enter_email.innerHTML="";
	var phone_number=document.getElementById("phone_number");
	var currentElement;
	var checkPhone=/^\d{3}-\d{3}-\d{4}$/;
	var first_name_last_name=/^[a-zA-Z]{2,30}$/;
	var checkmail=/^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
	for (var i=0; i<formcontents.length; i++){
		currentElement=formcontents[i].value;
		if (currentElement===""){
			myerrormsg.innerHTML="This section is to be completed in its entirety.";
			myerrormsg.style.color="rgb(255,105,180)";
			validform=false;
			
		}
	}
	
	
	if (first_name_last_name.test(document.getElementById("first_name").value)===false){
		firstName.innerHTML="Your first name is required.";
		firstName.style.color="rgb(255,105,180)";
		validform=false;
	}
	if (first_name_last_name.test(document.getElementById("last_name").value)===false){
		lastName.innerHTML="Your last name is required";
		lastName.style.color="rgb(255,105,180)";
		validform=false;
	}
	
	if (checkmail.test(document.getElementById("send_email").value)===false){
		enter_email.innerHTML="Please provide a valid email address";
		enter_email.style.color="rgb(255,105,180)";
		validform=false;
	}
	if (checkPhone.test(document.getElementById("phone_number").value)===false){
		phonemsg.innerHTML="Enter a phone number in this format '555-555-5555'.";
		phonemsg.style.color="rgb(255,105,180)";
		validform=false;
		
	}
	
	if (formcontents[4].value===""){
		rate_me.innerHTML="Please rate my page!";
		rate_me.style.color="rgb(255,105,180)";
		validform=false;
		
	}
	if (document.getElementById("add_message").value===""){
		texter.innerHTML="Please be sure to add the required feedback!";
		texter.style.color="rgb(255,105,180)";
		validform=false;
	}
	
	if (validform===true){
		window.alert("Thank you! You have successfully completed this section and your feedback has been submitted!");
		document.getElementById("reset").click();
		document.getElementById("check_it").checked=true;
	}
}



function createEventListeners(){

	var submitbtn=document.getElementById("submit");
	
	if (submitbtn.addEventListener){
		submitbtn.addEventListener("click", validateForm, false);
	} else if(submitbtn.attachEvent){
		submitbtn.attachEvent("onclick", validateForm);
	}
}





if (window.addEventListener){
	window.addEventListener("load", createEventListeners, false);
}else if(window.attachEvent){
	window.attachEvent("onload", createEventListeners);
}