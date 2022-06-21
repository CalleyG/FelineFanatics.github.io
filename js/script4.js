/*  JavaScript 6th Edition
    Chapter 11
    Project 5

    Author: Calley Garvin
    Date:  04/28/2021 

    Filename: script4.js
*/



//Recycled code from the w3schools and 11a with my added touches for Project 5, tailored to the Famous Felines website
"use strict";

function label_Input(inp, arr) {
  /*the label_Input function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "label_Input-list");
      a.setAttribute("class", "label_Input-items");
      /*append the DIV element as a child of the label_Input container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the label_Input text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "label_Input-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "label_Input-active":*/
    x[currentFocus].classList.add("label_Input-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all label_Input items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("label_Input-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all label_Input lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("label_Input-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing 17 of the 40 most cats in the world ever :*/
var felines = ["Garfield", "The Cheshire Cat", " Felix the Cat","Tom (Tom & Jerry)","Orangey (Hollywood Star)","Mr Bigglesworth","Salem (Sabrina the Teenage Witch)","Mrs Chippy","Chief Mouser","Felicette – Space Cat","Colonel Meow – Longest cat hair", "Choupette Lagerfeld", "Box Master Maru", "Sam", " Lil Bub", "Tabby and Dixie", " Oscar (Unsinkable Sam)"]
/*initiate the label_Input function on the "label_Input" element, and pass along the feline array as possible label_Input values:*/
label_Input(document.getElementById("label_Input"), felines);



//Global Variable
var httpRequest = false;


//getLocation function which sends Ajax requests ******
function getLocation() {
	var label_Input = document.getElementById("label_Input").value;
	if (!httpRequest) {
		httpRequest = getRequestObject();
	}
	httpRequest.abort();
	httpRequest.open("get","http://api.zippopotam.us/us/" + label_Input, true);
	httpRequest.send();
	httpRequest.onreadystatechange = autocomplete;
}

