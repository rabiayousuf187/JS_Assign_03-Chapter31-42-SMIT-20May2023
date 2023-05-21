function ques1() {
  // Write a program that displays current date and time in
  // your browser.

  let curDate = new Date();

  document.writeln("<h1>Current Date:</h1>");
  document.writeln(`<p>${curDate}</p>`);
}

function ques2() {
  // Write a program that alerts the current month in words.
  // For example December.
  let curDate = new Date();
  let curMonth = curDate.getMonth();

  let month = (months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  console.log(`Current Month: ${month[curMonth]}`);
  alert(`Current Month: ${month[curMonth]}`);
}

function ques3() {
  //     Write a program that alerts the first 3 letters of the current
  // day, for example if today is Sunday then alert will show
  // Sun.

  let curDate = new Date();
  let curDay = curDate.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log(`Today is ${days[curDay]}`);
  alert(`Today is ${days[curDay]}`);
}
function ques4() {
  //     Write a program that displays a message “It’s Fun day” if
  // its Saturday or Sunday today.
  let curDate = new Date();
  let curDay = curDate.getDay();

  console.log(`curDay  ==== ${curDay} `);

  if (curDay === 0 || curDay === 1) {
    console.log(`It’s Fun day`);
    alert(`It’s Fun day`);
  }
}
function ques5() {
  //     Write a program that shows the message “First fifteen
  // days of the month” if the date is less than 16th of the month
  // else shows “Last days of the month”.
  
  let curDate = new Date();
  let todayDate = curDate.getDate();

  console.log(`curDgetDate  ==== ${todayDate} `);

  if ( todayDate <=15 ) {
    console.log(`First fifteen
    days of the month`);
    alert(`First fifteen
    days of the month`);
  }
  else if( todayDate >15 ){
    console.log(`Last days of the month`);
    alert(`Last days of the month`);
  }
  else{
    console.log("Invalid");
    alert("Invalid");
  }
}
function ques6() {
  // Write a program that determines the minutes since
  // midnight, Jan. 1, 1970 and assigns it to a variable that
  // hasn't been declared beforehand. Use any variable you like
  // to represent the Date object.

  let curDate = new Date();
  let millisec= curDate.getTime();
  let min = curDate.getTime()/(1000*60);

  document.writeln(`Current Date: ${curDate} `);

    document.writeln(`<p>Elapsed milliseconds since January 1, 1970:  ${millisec}</p>`); 
    document.writeln(`Elapsed minutes since January 1, 1970: ${min}</p>`);
 }

function ques7() {
    // Write a program that tests whether it's before noon and
    // alert “Its AM” else “its PM”.

    
  let curDate = new Date();
  let hrs= curDate.getHours();
  let min= curDate.getMinutes();
  let sec = curDate.getSeconds();

  if( (hrs >=0 && hrs <=11) ){
    alert("Its AM”");
  }
    else if( hrs >11 && hrs <=23 ){
        alert("Its PM”");

  }
    
}

function ques8() {
    // Write a program that creates a Date object for the last day
    // of the last month of 2020 and assigns it to variable named
    // laterDate.

    let laterDate = new Date('Dec 31, 2020' );
    
    alert(`Later Date: ${laterDate} `);
  
}

function ques9() {
    // Create a date object of the starting date of this Ramadan
    // and alert the number of days past since 1st Ramadan?
    // Note: 1st Ramadan was on June 18, 2015

  let ramadamStart = new Date("Mar 22, 2023").getTime();

  let curDate = new Date().getTime();

  let passDays = Math.round((curDate - ramadamStart)/(1000*60*60*24));

  console.log(`${passDays} days have been passed since 1st Ramadan, 2023`);
  alert(`${passDays} days have been passed since 1st Ramadan, 2023`);

}

function ques10() {
  //Write a program that takes temperature as input and
  // shows a message based on following criteria
  // a. T > 40 then “It is too hot outside.”
  // b. T > 30 then “The Weather today is Normal.”
  // c. T > 20 then “Today’s Weather is cool.”
  // d. T > 10 then “OMG! Today’s weather is so Cool.”

  var input_temp;

  // Input temperature
  input_temp = +prompt("Enter Temperature: ");

  if (input_temp > 40) {
    alert("It is too hot outside.");
  } else if (input_temp > 30) {
    alert("The Weather today is Normal.");
  } else if (input_temp > 20) {
    alert("Today’s Weather is cool.");
  } else if (input_temp > 10) {
    alert("OMG! Today’s weather is so Cool");
  } else if (input_temp < 10 && input_temp > 0) {
    alert("Invalid State!");
  } else {
    alert("You didn't answer.");
  }
}

function ques11() {
  //     Write a program to create a calculator for +,-,*, / & %
  // using if statements. Take the following input:
  // a. First number
  // b. Second number
  // c. Operation (+, -, *, /, %)
  // Compute & show the calculated result to user.
  var first_number, second_number, operator, result;

  alert(`Let's Start Calculation`);
  // Input first_number
  first_number = +prompt(`Enter Your First Number: `);

  // Input second_number
  second_number = +prompt(`Enter Your Second Number: `);

  // Input operator
  operator = prompt(`Enter Your operator(+, -, *, /, %): `);

  if (operator === `*`) {
    // Multiplication
    document.write(`<h1>Calculator:</h1><br><br>`);
    result = first_number * second_number;
    document.write(`<h3>Multiplication:</h3>`);
    document.write(
      `${first_number} * ${second_number} = ` + result + `<br><br>`
    );
  } else if (operator === `/`) {
    // Division
    document.write(`<h1>Calculator:</h1><br><br>`);
    result = first_number / second_number;
    document.write(`<h3>Division:</h3>`);
    document.write(
      `${first_number} / ${second_number} = ` + result + `<br><br>`
    );
  } else if (operator === `%`) {
    // Modulus / Remainder
    document.write(`<h1>Calculator:</h1><br><br>`);
    result = first_number % second_number;
    document.write(`<h3>Modulus / Remainder</h3>`);
    document.write(
      `${first_number} % ${second_number} = ` + result + `<br><br>`
    );
  } else if (operator === `+`) {
    // Addition
    document.write(`<h1>Calculator:</h1><br><br>`);
    result = first_number + second_number;
    document.write(`<h3>Addition:</h3>`);
    document.write(
      `${first_number} + ${second_number} = ` + result + `<br><br>`
    );
  } else if (operator === `-`) {
    // Subtration
    document.write(`<h1>Calculator:</h1><br><br>`);
    result = first_number - second_number;
    document.write(`<h3>Subtration:</h3>`);
    document.write(
      `${first_number} - ${second_number} = ` + result + `<br><br>`
    );
  } else {
    alert(`Sorry! you missing some Input.`);
  }
}
