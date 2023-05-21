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

  if (todayDate <= 15) {
    console.log(`First fifteen
    days of the month`);
    alert(`First fifteen
    days of the month`);
  } else if (todayDate > 15) {
    console.log(`Last days of the month`);
    alert(`Last days of the month`);
  } else {
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
  let millisec = curDate.getTime();
  let min = curDate.getTime() / (1000 * 60);

  document.writeln(`Current Date: ${curDate} `);

  document.writeln(
    `<p>Elapsed milliseconds since January 1, 1970:  ${millisec}</p>`
  );
  document.writeln(`Elapsed minutes since January 1, 1970: ${min}</p>`);
}

function ques7() {
  // Write a program that tests whether it's before noon and
  // alert “Its AM” else “its PM”.

  let curDate = new Date();
  let hrs = curDate.getHours();
  let min = curDate.getMinutes();
  let sec = curDate.getSeconds();

  if (hrs >= 0 && hrs <= 11) {
    alert("Its AM”");
  } else if (hrs > 11 && hrs <= 23) {
    alert("Its PM”");
  }
}

function ques8() {
  // Write a program that creates a Date object for the last day
  // of the last month of 2020 and assigns it to variable named
  // laterDate.

  let laterDate = new Date("Dec 31, 2020");

  alert(`Later Date: ${laterDate} `);
}

function ques9() {
  // Create a date object of the starting date of this Ramadan
  // and alert the number of days past since 1st Ramadan?
  // Note: 1st Ramadan was on June 18, 2015

  let refereDate = new Date("Mar 22, 2023").getTime();

  let curDate = new Date().getTime();

  let passDays = Math.round((curDate - refereDate) / (1000 * 60 * 60 * 24));

  console.log(`${passDays} days have been passed since 1st Ramadan, 2023`);
  alert(`${passDays} days have been passed since 1st Ramadan, 2023`);
}

function ques10() {
  // Write a program that displays in your browser the
  // seconds that elapsed between the reference date and the
  // beginning of 2015.

  let refereDate = new Date("May 21, 2023 12:00:00");

  let startDate = new Date("Jan 01, 2015 00:00:00").getTime();

  let passSecond = Math.round((refereDate.getTime() - startDate) / 1000);

  console.log(
    `On reference date ${refereDate}, ${passSecond} seconds had passed since beginning of 2015`
  );
  alert(
    `On reference date ${refereDate}, ${passSecond} seconds had passed since beginning of 2015`
  );
}

function ques11() {
  // Create a Date object for the current date and time.
  // Extract the hours, reset the date object an hour ahead and
  // finally display the date object in your browser.

  let current_date_time;
  let cur_hours;
  let reset_hours;

  current_date_time = new Date();
  //reset 1 hour ahead
  cur_hours = current_date_time.getHours();

  document.write("<h4>Reset Date Object an Hour Ahead:</h4>");
  document.write("current date: " + current_date_time);

  reset_hours = current_date_time.setHours(cur_hours + 1);
  console.log(reset_hours); // reset time in milli

  document.write("<br>1 hour ago, it was " + current_date_time);
}

function ques12() {
  //     Write a program that creates a date object and show the
  // date in an alert box that is reset to 100 years back?

  let current_date_time;
  let cur_year;
  let reset_year;

  current_date_time = new Date();
  //reset 100 Years Back
  cur_year = current_date_time.getFullYear();

  document.write("<h4>Reset Date Object 100 Years Back:</h4>");
  document.write("current date: " + current_date_time);

  reset_year = current_date_time.setFullYear(cur_year - 100);
  console.log(reset_year); // reset years in milli

  document.write("<br>100 years back, it was " + current_date_time);
}

function ques13() {
  // Write a program to ask the user about his age. Calculate
  // and show his birth year in your browser.

  let current_date_time;

  current_date_time = new Date();

  let cur_year = current_date_time.getFullYear();

  let age = +prompt("Enter Your age\nI will show your birthday year");

  if (age > 0) {
    let born_year = cur_year - age;

    document.write("<h4>Calculate Age:</h4>");

    document.write("<br><br>Your age is " + age);

    document.write("<br><br>Your birth year is <b>" + born_year + " </b>");
  } else if (age == 0) {
    alert("You Enter Invalid age.");
  }
}

function ques14() {
  //     Write a program to generate your K-Electric bill in your
  // browser. All the amounts should be rounded off to 2
  // decimal places. Display the following fields:
  // a. Customer Name
  // b. Current Month
  // c. Number of units
  // d. Charges per unit
  // e. Net Amount Payable (within Due Date)
  // f. Late Payment Surcharge
  // g. Gross Amount Payable (after Due Date)
  // Where,
  // Net Amount Payable (within Due Date) = Number of units * Charges per unit
  // & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

  let current_date_time = new Date();

  let month_arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octuber",
    "November",
    "December",
  ];

  let cur_month = month_arr[current_date_time.getMonth()];

  let customer_name;
  let unit;
  let charge_per_unit;
  let amount_within_due;
  let late_surcharge;
  let gross_amount_after_due;

  alert("Enter Detail For K-Electric Bill:");
  customer_name = prompt("Enter Customer Name:");

  if (customer_name !== null) {
    unit = prompt("Enter Number of units:");

    if (unit !== null) {
      charge_per_unit = prompt("Enter  Charges per unit:");
      if (charge_per_unit !== null) {
        late_surcharge = prompt("Enter Late Payment Surcharge:");
        if (late_surcharge !== null) {
          unit = parseFloat(unit);
          unit = parseFloat(unit.toFixed(2));

          charge_per_unit = parseFloat(charge_per_unit);
          charge_per_unit = parseFloat(charge_per_unit.toFixed(2));

          late_surcharge = parseFloat(late_surcharge);
          late_surcharge = parseFloat(late_surcharge.toFixed(2));

          amount_within_due = unit * charge_per_unit;
          amount_within_due = parseFloat(amount_within_due.toFixed(2));

          gross_amount_after_due = amount_within_due + late_surcharge;
          gross_amount_after_due = parseFloat(gross_amount_after_due.toFixed(2));
          console.log(typeof(gross_amount_after_due));
          console.log(typeof(amount_within_due));
          console.log(typeof(unit ));
          console.log(typeof(charge_per_unit));
          console.log(typeof(late_surcharge));


          document.write("<div class = 'box'>");
          document.write("<h2>K-Electric Bill</h2>");

          document.write(
            "Customer Name: <strong>" + customer_name + "</strong>"
          );
          document.write("<br>Month: <strong>" + cur_month + "</strong>");
          document.write("<br>Number of units: <strong>" + +unit + "</strong>");
          document.write(
            "<br>Charges per unit: <strong>" +
              +charge_per_unit +
              "</strong><br><br>"
          );

          document.write(
            "<br>Net Amount Payable (within Due Date): <strong>" +
              amount_within_due +
              "</strong>"
          );
          document.write(
            "<br>Late Payment Surcharge: <strong>" +
              late_surcharge +
              "</strong>"
          );
          document.write(
            "<br>Gross Amount Payable (after Due Date): <strong>" +
              gross_amount_after_due +
              "</strong>"
          );

          document.write("</div>");
        } else {
          alert("You didn't Enter Late Payment Surcharge\nSession Quit");
        }
      } else {
        alert("You didn't Enter Charges per unit\nSession Quit");
      }
    } else {
      alert("You didn't Enter Unit Number\nSession Quit");
    }
  } else {
    alert("You didn't Enter Customer Name\nSession Quit");
  }
}
