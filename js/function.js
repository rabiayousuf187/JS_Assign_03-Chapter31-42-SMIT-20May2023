function ques1(){
        //         Write a program that takes a character (number or string)
        // in a variable & checks whether the given input is a
        // number, uppercase letter or lower case letter. (Hint: ASCII
        // codes:- A=65, Z=90, a=97, z=122).
        
     // Enter any Character(number or string) 
	var input = prompt("Enter any Character(number or string):\nTo Check given input is a number, uppercase letter or lower case letter:");

	//Check wether the user cancel the Prompt or not
	if(input != null)
	{	
		//ASCII CODE 
		var A = 65, Z = 90, a = 97, z = 122; 

		var in_con_accii = input.charCodeAt(0);
		console.log(in_con_accii);

		// FOR NUMBER
		if ( +input === 1 || +input === 2 || +input === 3 || +input === 4 || +input === 5 || 
		+input === 6 || +input === 7 || +input === 8 || +input === 9 || +input === 0 )
		{
			console.log( input + " Number");
			document.write("<h4>Number:</h4>");
			document.write("The given input " + "<b>" + input + "</b>" + " is a number.");
		}
		// FOR CAPITAL LETTER
		else if ( ( in_con_accii >= A ) && ( in_con_accii <= Z ) )
		{
			console.log( input + " Capital Letter");
			document.write("<h4>Capital Letter:</h4>");
			document.write("The given input " + "<b>" + input + "</b>" + " is Capital Letter, which ASCII Code is " + in_con_accii + ".");
		}
		// FOR SMALL LETTER
		else if ( ( in_con_accii >= a ) && ( in_con_accii <= z ) )
		{
			console.log( input + "Small Letter");
			document.write("<h4>Small Letter:</h4>");
			document.write("The given input " + "<b>" + input + "</b>" + " is a Small Letter, which ASCII Code is " + in_con_accii + ".");
		}
		// FOR OTHERs
		else
		{
			alert("Invalid Input:\nYou didn't Enter any letter or number.");
		}
	}
	else
	{
		//cancel the prompt
		alert("You didn't answer.");
	}
}

function ques2(){

        //         Write a JavaScript program that accept two integers and
        // display the larger. Also show if the two integers are equal.

     // Enter any Character(number or string) 
	alert("Enter Two Numbers:\nCheck Which one is Greater Smaller Or Equal to each other:");

	// first_number 
	var first_number = prompt("Enter First Number:")

	//Check wether you cancel the prompt or not
	if (first_number == null){
		alert("You didn't Enter the First Number\nThis section is terminated\nRestart Again!");
	}
	else {

			var second_number = prompt("Enter Second Number:")

			//Check wether you cancel the prompt or not
			if (second_number == null){
				alert("You didn't Enter the Second Number\nThis section is terminated\nRestart Again!");
			}
		else{
				//Successfully Enter Both Values
				alert("You have Successfully Enter Both Values.");

				//Greater
				if (+first_number > +second_number){

					document.write("Greater:<br>");
					document.write("First Number " + +first_number + " is greater than Second Number " + +second_number + ".");
				}
				//Smaller
				else if (+first_number < +second_number){

					document.write("Smaller:<br>");
					document.write("First Number " + +first_number + " is smaller than Second Number " + +second_number + ".");
				}
				// Equal
				else if (+first_number == +second_number){

					document.write("Equal:<br>");
					document.write("First Number " + +first_number + " is Equal to Second Number " + +second_number + ".");
				}
			}
	}
}

function ques3(){
	// Write a program that takes input a number from user &
	// state whether the number is positive, negative or zero.
	
	// Enter any number 
	alert("Enter a Numbers:\nTo Check wether the number is Positive Negative or Zero:");

	// number 
	var number = prompt("Enter a Number:")
	console.log(number);
	//Check wether you cancel the prompt or not
	if (number == null){
		alert("You didn't Enter the Number\nThis section is terminated\nRestart Again!");
	}
	else {

			// Positive number
			if (+number > 0){

				document.write("<h4>Number State:</h4>");
				document.write("The Number " + +number + " is Positive.");
			}
			//Negative
			else if (+number < 0){

				document.write("<h4>Number State:</h4>");
				document.write("The Number " + +number + " is Negative.");
			}
			// Zero
			else if (+number == 0){

				document.write("<h4>Number State:</h4>");
				document.write("The Number " + +number + " is Zero.");
			}
			// For other input
			else{
				document.write("<h4>Error:</h4><br>");
				document.write("Your Input is Invalid.<br>Enter a Valid Number.");
			}
	}
	


}
function ques4(){
	// Write a program that takes a character (i.e. string of
	// 	length 1) and returns true if it is a vowel, false otherwise   
	
	// Enter any Character(number or string) 
	alert("Enter One Character:\nTo Check Vowel or Consonant");

	// first_number 
	var char = prompt("Enter Only One Character:")

	//Check wether you cancel the prompt or not
	if (char == null){
		alert("You didn't Enter the Character\nThis section is terminated\nRestart Again!");
	}
	else {

			if (char == "a" || char == "A" || char == "e" || char == "E" || 
				char == "i" || char == "I" || char == "o" || char == "O" || 
				char == "u" || char == "U")
			{
				document.write("<h4>Vowel:</h4>");
				document.write("True, Your character " + char + " is Vowel.");
			}
			else if (+char == 1 || +char == 2 || +char == 3 || +char == 4 || 
				+char == 5 || +char == 6 || +char == 7 || +char == 8 || 
				+char == 9 || +char == 0)
			
			{
				//Successfully Enter Both Values
				document.write("<h4>Wrong Input!<h4><br>");
				document.write("You Enter a Number " + char + "not a string or character. ");

			}
			else
			{

				document.write("<h4>Consonant or Special Character:</h4>");
				document.write("False, Your character " + char + " is a Consonant or Other Special Character.");
			}
			
	}

}
function ques5(){
	// Write a program that
	// a. Store correct password in a JS variable.
	// b. Asks user to enter his/her password
	// c. Validate the two passwords:
	// i. Check if user has entered password. If not, then
	// give message “ Please enter your password”
	// ii. Check if both passwords are same. If they are
	// same, show message “Correct! The password you
	// entered matches the original password”. Show
	// “Incorrect password” otherwise.   
	
	//  first_pass-----Enter Your Password  
	var first_pass = prompt("Enter Your Password:")
	console.log("first_pass ====",first_pass);

	//Check wether the user enter first password then
	if(first_pass != null)
	{	
		//  confirm_pass-----Enter Your Password  
		var confirm_pass = prompt("Enter Your Password Again for Verification:")

		// Check if both password is same
		if ( confirm_pass != null )
		{
				// Check if both password is same
				if ( first_pass === confirm_pass )
				{
					console.log("Message:\nCorrect! The password you entered matches the original password.");
					alert("Message:\nCorrect! The password you entered matches the original password.");
				}
				// not same
				else
				{
					console.log("Message:\nIncorrect password");
					alert("Message:\nIncorrect password");
				}
		}
		else
		{
			///cancel the prompt for first password
			alert("You didn't confirm Password");
		}
	}
	else
	{
		//cancel the prompt for first password
		alert("Please Enter Your Password.");
	}

}
function ques6(){
	//     This if/else statement does not work. Try to fix it:
	// var greeting;
	// var hour = 13;
	// if (hour < 18) {
	// greeting = "Good day";
	// else
	// greeting = "Good evening";
	// }


// Error is :Uncaught SyntaxError: Unexpected token else


//Correct Statment
	var greeting; 
	var hour = 13;

	if (hour < 18)
	{ 
		greeting = "Good day"; 
	}
	else 
	{
		greeting = "Good evening"; 
	}
	alert(greeting);

//        OR

//Correct Statment 2
	var greeting; 
	var hour = 13;

	if (hour < 18)
		greeting = "Good day"; 
	else 
	{
		greeting = "Good evening"; 
	}
	alert(greeting);
}
function ques7(){
	//     Write a program that takes time as input from user in 24
	// hours clock format like: 1900 = 7pm. Implement the
	// following case using if, else & else if statements

	//  input time-------  in 24hrs
	var time = +prompt("Enter Time in 24 hours Format:")

	
	//Check wether the user enter time
	if(time != null)
	{	
		// Check time value
		if ( ( time >= 0000 ) && ( time <= 2359 ) )
		{

			alert("Your Input Time Format is Correct.")

			// Good Morning!
			if ( ( time >= 0000 ) && ( time < 1200 ) )
			{
				console.log("“Good Morning!”");

				alert("“Good Morning!”");
				
			}
			// Good Afternoon!
			else if ( ( time >= 1200 ) && ( time < 1700 ) )
			{
				console.log("“Good Afternoon!”");

				alert("“Good Afternoon!");
				
			}
			// Good Evening!
			else if ( ( time >= 1700 ) && ( time < 2100 ) )
			{
				console.log("“Good Evening!”");

				alert("“Good Evening!");
				
			}
			// Good Night!
			else if ( ( time >= 2100 ) && ( time <= 2359 ) )
			{
				console.log("“Good Night!”");

				alert("“Good Night!");
				
			}	

		}
		// time value is false
		else 
		{

			alert("Invalid Time!");
		}
	}
	else
	{
		//cancel the prompt not enter time
		alert("You didn't Enter Time.");
	}

}
function ques8(){
	
}