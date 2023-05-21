function ques1(){
	// . Write a function that displays current date & time in your
	// browser
	
	function display_current_date()
        {
            let current_date_time  = new Date();
            return current_date_time;
        }

        //
        let display_date_time = display_current_date();
        document.write(display_date_time);
}

function ques2(){
 // 2. Write a function that takes first & last name and then it
        // greets the user using his full name.
		console.log("ok;");
        function username(first_name , last_name)
        {
            let full_name  = first_name.concat(" ", last_name);
            return full_name;
        }

        //input first_name & last_name;
        let first_name = prompt("Enter First Name:");
        let last_name = prompt("Enter Last Name:");

        let greet_user = username( first_name , last_name);
        alert("Hello " + greet_user + "!\nWelcome to Web design and development Portal");
        
}
function ques3(){

	 // 3. Write a function that adds two numbers (input by user)
        // and returns the sum of two numbers.

        function sum_of_num(first_num , second_num)
        {
            let sum  = first_num + second_num;
            return sum;
        }

        //input first_num ;
        let first_num = prompt("Enter First Num:");

        if( first_num != null)
        {
            //input second_num;
            let second_num = prompt("Enter Second Num:");

            if( second_num != null)
            {
              
                let sum = sum_of_num( +first_num , +second_num);
                document.write("<h4>Sum of Two Numbers:</h4>");
                document.write("First Number = " + +first_num);
                document.write("<br>Second Number = " + +second_num);
                document.write("<br><br>Sum of Numbers = " + sum);

            }
            else
            {
                alert("You didn't Enter Second Number\nSession Quit.")
            }
        }
        else
        {
            alert("You Quit Session.")
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