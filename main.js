//Function that gets called when the button is clicked
function determineNumber() {
    month = document.getElementById('input').value;
    display = document.getElementById('display');
  
    
    //This If statement is for all the months that has 31 days 
    if(
      month === "January" || month === "january" ||
      month === "March" || month === "march" ||
      month === "May" || month === "may" ||
      month === "July" || month === "july" ||
      month === "August" || month === "august" ||
      month === "October" || month === "october"||
      month === "December" || month === "december" 
      ){
      display.innerHTML = month + " has 31 days in a year";
    }
    
    //This is for February
    else if(month === "February" || month === "february" ){
      display.innerHTML = "February has 28 days";
    }
    
    //This is for months that have 30 days
    else if(
      month === "April" || month === "april" ||
      month === "November" || month === "november" ||
      month === "September" || month === "september" ||
      month === "June" || month === "june"
      ){
      display.innerHTML = month + " has 30 days in a year";
    }
    //If the input field is blank
    else if( month === ""){
      display.innerHTML = "Input a month"
    }
    //If the user inputs incorrect spelling or short form
    else{
      display.innerHTML = "Incorrect spelling,Retry "
    }
  }