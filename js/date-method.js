function ques1(){
        // 1. Write a program to take “city” name as input from user. If
        // user enters “Karachi”, welcome the user like this:
        // “Welcome to city of lights”
        
     var city = prompt("Enter The  City Name: ");

    if(city === "Karachi" || city === "KARACHI"){
        alert("Welcome to city of lights");
    }
    else {
        alert("You enter: " + city);
    }
}

function ques2(){
//     Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am. 

     var gender = prompt("Enter the gender: ");

    if(gender === "male" || gender === "Male" || gender === "MALE"){
        document.write("Good Morning Sir.");
    }
    else if(gender === "female" || gender === "Female" || gender === "FEMALE") {
        document.write("Good Morning Ma'am.");
    }
    else{
        document.write("You didn't Answer.");
    }
}

function ques3(){
    // Write a program to take input color of road traffic signal
    // from the user & show the message according to this table:

    var color = prompt("Enter the Color: ");

    if(color === "red" || color === "Red"){
        document.write("Signal color: <b>" + color + "</b><br><br><b>Message: </b>Must Stop");
    }
    else if(color === "yellow" || color === "Yellow") {
        document.write("Signal color: <b>" + color + "</b><br><br><b>Message: </b>Read to move");
    }
    else if(color === "green" || color === "Green"){
        document.write("Signal color: <b>" + color + "</b><br><br><b>Message: </b>Move now");
    }
    else{
        document.write("You didn't answer.");
    }

}
function ques4(){
    // 4. Write a program to take input remaining fuel in car (in
    //     litres) from user. If the current fuel is less than 0.25litres,
    //     show the message “Please refill the fuel in your car”    

    var fuel = +prompt("Input the remaining Fuel in your Car in liter: ");
    // document.write(fuel);
    console.log(fuel);
    if(fuel < 0.25){
        alert("Alert: \nPlease refill the fuel in your car.");
    }
    else if(fuel >= 0.25) {
        alert("Don't take tension.");
    }
    else{
       alert("You didn't answer.");
    }

}
function ques5(){
    //     Run this script, & check whether alert message would be
    // displayed or not. Record the outputs.
    // a. var a = 4;
    // if (++a === 5){
    // alert("given condition for variable a is true");
    // }
    // User Input & Conditional Statement | JAVASCRIPT
    // b. var b = 82;
    // if (b++ === 83){
    // alert("given condition for variable b is true");
    // }
    // c. var c = 12;
    // if (c++ === 13){
    // alert("condition 1 is true");
    // }
    // if (c === 13){
    // alert("condition 2 is true");
    // }
    // if (++c < 14){
    // alert("condition 3 is true");
    // }
    // if(c === 14){
    // alert("condition 4 is true");
    // }
    // d. var materialCost = 20000;
    // var laborCost = 2000;
    // var totalCost = materialCost + laborCost;
    // if (totalCost === laborCost + materialCost){
    // alert("The cost equals");
    // }
    // e. if (true){
    // alert("True");
    // }
    // if (false){
    // alert("False");
    // }
    // User Input & Conditional Statement | JAVASCRIPT
    // f. if("car" < "cat"){
    // alert("car is smaller than cat");
    // }
 
    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }
    // B
    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    } 

    // c.
    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
    // d. 
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
    // E
    if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }  
    // f
    if("car" < "cat"){
    alert("car is smaller than cat");
    } 

}
function ques6(){
    // Write a program to take input the marks obtained in three
    // subjects & total marks. Compute & show the resulting
    // percentage on your page. Take percentage & compute
    // grade as per following table:
    

    var first_subject, second_subject, third_subject;
    var obtained_marks, total_marks, percentage, grade, remarks;
    
    // Input first_subject Marks
    first_subject = +prompt("Enter Your First Subject Marks: ");

    // Input second_subject Marks
    second_subject = +prompt("Enter Your Second Subject Marks: ");

    // Input third_subject Marks
    third_subject = +prompt("Enter Your Third Subject Marks: ");

    // Input total Marks
    total_marks =  +prompt("Enter Your total Marks: ");

    // Obtained Marks
    obtained_marks = first_subject + second_subject + third_subject;

    // Total Marks
    percentage = ((obtained_marks / total_marks) * 100);


    if (percentage >= 80){
        grade = "A-one";
        remarks = "Excellent";
    }
    else if (percentage >= 70){
        grade = "A";
        remarks = "Good";
    }
    else if (percentage >= 60){
        grade = "B";
        remarks = "You need to improve";
    }
    else if (percentage < 60){
        grade = "Fail";
        remarks = "Sorry";
    }
    else {
        alert("You didn't answer.")
    }
    
    document.write("<h1>Marks Sheet</h1><br><br>");
    document.write("<h4>Total marks: " + total_marks + "</h4>");
    document.write("<h4>Marks obtained: " + obtained_marks + "</h4>");
    document.write("<h4>Percentage: " + percentage + "%</h4>");
    document.write("<h4>Grade: " + grade + "</h4>");
    document.write("<h4>Remarks: " + remarks + "</h4>");
}
function ques7(){
        
        //  Guess game:
        // Store a secret number (ranging from 1 to 10) in a variable.
        // Prompt user to guess the secret number.
        // a. If user guesses the same number, show “Bingo! Correct
        // answer”.
        // b. If the guessed number +1 is the secret number, show
        // “Close enough to the correct answer”.

    
    var secret_no; 
    
    var guess_no, close_no;
    
    // First Store a secret no
    secret_no = 5;
   
    // Then Inpu a guess no from user 
    guess_no = +prompt("Input a Number, Which I Think in My Mind: \nRange( 1 - 10): ");
    
    close_no = guess_no + 1;
    // console.log(guess_no);
    // console.log(close_no);

    if (secret_no == guess_no){
        alert("Bingo! Correct answer.");
    }
    else if (secret_no == close_no){
        alert("Close enough to the correct answer.");
    }
    else if (secret_no < (guess_no + 2 )){
        alert("Your number is too large.");
    }
    else if (secret_no > (guess_no - 2 )){
        alert("Your number is too small.");
    }
    else{
        alert("You didn't answer.");
    }

}

function ques8(){
    //     Write a program to check whether the given number is
    // divisible by 3. Show the message to the user if the number
    // is divisible by 3.


    var input_num, result; 

    // Then Inpu a guess no from user 
    input_num = +prompt("Input a Number, I will confirm \n \Your number is divisable by 3:");
    
    result = (input_num  % 3);

    if (result == 0){
        document.write("Your given number " + input_num + " is divisable by 3.");
    }
    else if (result !== 0){
        document.write("Your given number " + input_num + " is not divisable by 3.");
    }
    else{
        alert("You didn't answer.");
    }
}

function ques9(){

    //     Write a program that checks whether the given input is an
    // even number or an odd number.

    var input_num, result; 

    // Then Inpu a guess no from user 
    input_num = +prompt("Input a Number, to Check Even or Odd: ");
    
    result = (input_num  % 2);

    if (result == 0){
        document.write("Your given number " + input_num + " is Even.");
    }
    else if (result !== 0){
        document.write("Your given number " + input_num + " is Odd.");
    }
    else{
        alert("You didn't answer.");
    }
}

function ques10(){

    //Write a program that takes temperature as input and
    // shows a message based on following criteria
    // a. T > 40 then “It is too hot outside.”
    // b. T > 30 then “The Weather today is Normal.”
    // c. T > 20 then “Today’s Weather is cool.”
    // d. T > 10 then “OMG! Today’s weather is so Cool.”

    var input_temp;
    
    // Input temperature
    input_temp = +prompt("Enter Temperature: ");

    if (input_temp > 40){
        alert("It is too hot outside.");
    }
    else if (input_temp > 30){
        alert("The Weather today is Normal.");
    }
    else if (input_temp > 20){
        alert("Today’s Weather is cool.");
    }
    else if (input_temp > 10){
        alert("OMG! Today’s weather is so Cool");
    }
    else if(input_temp < 10 && input_temp > 0 ){
        alert("Invalid State!")
    }
    else {
        alert("You didn't answer.")
    }
}

function ques11(){
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
    operator= prompt(`Enter Your operator(+, -, *, /, %): `);

    if( operator === `*`){
        // Multiplication
        document.write(`<h1>Calculator:</h1><br><br>`);
        result = first_number * second_number;
        document.write(`<h3>Multiplication:</h3>`);
        document.write(`${first_number} * ${second_number} = ` + result + `<br><br>`);
        
    }
    else if( operator === `/`){
        // Division
        document.write(`<h1>Calculator:</h1><br><br>`);
        result = first_number / second_number;
        document.write(`<h3>Division:</h3>`);
        document.write(`${first_number} / ${second_number} = ` + result + `<br><br>`);
        
    }
    else if( operator === `%`){
        // Modulus / Remainder
        document.write(`<h1>Calculator:</h1><br><br>`);
        result = first_number % second_number;
        document.write(`<h3>Modulus / Remainder</h3>`); 
        document.write(`${first_number} % ${second_number} = ` + result + `<br><br>`); 
    }
    else if( operator === `+`){
        // Addition
        document.write(`<h1>Calculator:</h1><br><br>`);
        result = first_number + second_number;
        document.write(`<h3>Addition:</h3>`);
        document.write(`${first_number} + ${second_number} = ` + result + `<br><br>`);
    }
    else if( operator === `-`){
        // Subtration
        document.write(`<h1>Calculator:</h1><br><br>`);
        result = first_number - second_number;
        document.write(`<h3>Subtration:</h3>`);
        document.write(`${first_number} - ${second_number} = ` + result + `<br><br>`);
    }
    else{
        alert(`Sorry! you missing some Input.`)
    }
    
   
    



}