/*   JavaScript 6th Edition
*    Chapter 8
*    Project 4
*    Author: Calley Garvin
*    Date: 04/06/2021

*    Filename: script2.js
*/


"use strict"; // interpret document contents in JavaScript strict mode


//Javascript taken from planet-source-code.com, submitted by Dave Carter on 4/15/2017 that I used in ITWP 1000 for my contact form
      
        function setUp(){
                
                // Description: Current Date
                var xDate = new Date();
                var x = document.getElementById('y');
                x.value = xDate.getFullYear(); // year

                var j = xDate.getMonth();
                var xy = document.getElementById("m").options.item(j);
                xy.selected = true; // month

                var k = document.getElementById('today');
                k.innerHTML = "Today's Date is " + xDate.toLocaleString();
                
              
                
            }
            
            // call the setup rountine ************************
            setUp();
            
            
            function GetCalendarHTML(year, month){
                
                // Description: main calendar drawing routine
                
                var todayDate = new Date(); // today's date

                var mainDate = new Date(year, month, 1); // main Calendar date
    
                var startDate = new Date(); // Calendar's start date
                startDate = GetCalendarStartDate(year, month);
                
                
              
                
               
                for (var row = 0; row < 6; row++){ // row/week loop

                    calText += "<tr>"; // begin table row
                    for (var col = 0; col < 7; col++){ // column/weekday loop

                        // SORT OUT THE CLASS NAME FOR TABLE CELL *********
                        if (currMonth == month){ 
                            sClass = "thisMonth"; 
                        } else { sClass = "notThis"; }
                        
                        if (todayDate.getMonth() == currMonth && todayDate.getFullYear() == currYear){
                            if (currDay == todayDate.getDate()){ sClass = "today"; }
                        }
                        
                        // GET A DATE STRING FOR THIS DAY (e.g. cell.id) **
                        var cellDate = new Date(currYear, currMonth, currDay);

                        // ADD TD DEF. TO TABLE DEF. **********************
                        calText += MakeTableCell(sClass, cellDate.toDateString(), currDay);

                        // INCREMENT DAY TO NEXT DATE *********************
                        if (currDay < maxDays){
                            currDay++;
                        } else {
                            currDay = 1;
                            currMonth++;
                            if (currMonth > 11){
                                currMonth = 0; // reset current month to Jan.
                                currYear++;    // then increment current year
                            }
                            // GET NEW MAX DAY COUNT FOR NEW MONTH ************
                            maxDays = GetMonthDayCount(currMonth, currYear);
                        }      

                    } // column/weekday loop

                    calText += "</tr>"; // end table row/week
                    
                    if (currMonth > month) { break; } // if already past month break out of row loop
                    
                } // row/week loop

                calText += "</table>"; // end Calendar table

                document.getElementById('cal').innerHTML = calText; // draw Calendar
                
            }
//End of Javascript



//Project 2 Scripts
 
  
 "use strict"
    //Function for the radio buttons for Project 2
	  function option_clicked(){
	     var Yes_option_clicked = document.getElementById('feedback_options_yes').checked;
	     var No_option_clicked = document.getElementById('feedback_options_no').checked;
		 if(Yes_option_clicked == false && No_option_clicked == false){
		 window.alert('Please, kindly select an option.');
		   return false;
		 }else{
		   return true;
		 }
	}
	
  
//script for cat 1 year of age converted to human age 

function calculateCatAge() {
  var one_Year_Age= document.getElementById('years').value;
  var catAge = one_Year_Age * 15;
 
  document.getElementById('cat_age').innerHTML= catAge + ' years old in human years. Hooray! Just as the Guessing Game informed you, if the correct number was selected.';
  
}


//Exception Handling per Project 2 requirements try/throw/catch/finally statement adding my exception handling requirements to the Guessing Game section 

var cat_age,
    number;
	
function getValue(){
  cat_age = document.getElementById("error-message");
  cat_age.innerHTML = ""
  cat_age.style.color = "red";

  number = document.getElementById("get-value").value;
  
  try {
    if (number == "") throw " nothing, this box is empty. Please refresh the page or enter a number to try again!";    
    if (isNaN(number)) throw " a letter or special character, which are not numbers, please try again!";
    if (number >15) throw " a number that is too Big, please try again!";
    if (number < 15) throw " a number that is too Small, please try again!";
    
    debugger;
    
    if (number == number) {
        cat_age.style.color = "purple";
        throw " the correct number, which is " + number + ",  Congratulations! That is the age of a 1 year old cat, in human years.";
    }    
  } catch(err) {
      cat_age.innerHTML = "You entered " + err;
  } finally {
    var test = document.getElementById("get-value").value = "";
  } 
  console.log([typeof test, test, number.valueOf()]);
  
}





