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
	//    4. Calculator:
    //   Write a function that takes three arguments num1, num2
    //   & operator & compute the desired operation. Return and
    //   show the desired result in your browser.

	function fun_calculation(first_num , second_num , operator)
	{
		if( operator == "*")
		{
			let cal  = first_num * second_num;
			return cal;
		}
		else if( operator == "+")
		{
			let cal  = first_num + second_num;
			return cal;
		}
		else if( operator == "-")
		{
			let cal  = first_num - second_num;
			return cal;
		}
		else if( operator == "/")
		{
			let cal  = first_num / second_num;
			return cal;
		}
		else if( operator == "%")
		{
			let cal  = first_num % second_num;
			return cal;
		}
		else
		{   
			let cal  = first_num + second_num;
			return cal;
		}
	}

	//input first_num ;
	let first_num = prompt("Enter First Num:");

	if( first_num != null)
	{
		//input second_num;
		let second_num = prompt("Enter Second Num:");

		if( second_num != null)
		{
			//input second_num;
			let operator= prompt("Enter operator:\nDefault = +", "+");
			if( operator != null)
			{
				let calculate = fun_calculation( +first_num , +second_num , operator);
				console.log("calculate", calculate);
				document.write("<h4>Calculator:</h4>");
				document.write("First Number = " + +first_num);
				document.write("<br>Second Number = " + +second_num);
				document.write("<br>Operator = " + operator + "<br><br>");
				document.write("<h4>Calculated Result:</h4>" + +first_num + " "+ operator  + " "+ +second_num + " = " + calculate);

			}
			else
			{
				alert("You didn't Enter operator\nSession Quit.")
			}
	   
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
function ques5(){
	// 5. Write a function that squares its argument.

	function fun_square(squ_num)
	{
		let squ_of_num  = Math.pow(squ_num , 2);
		return squ_of_num;
	}

	//input squ_num ;
	let squ_num = prompt("Enter Number for Square:");

	if( squ_num != null)
	{
		let square = fun_square(+squ_num);
		document.write("<h4>Squaring: </h4>");
		document.write("input Number = " + +squ_num);
		document.write("<br>After Square = " + square);
	}
	else
	{
		alert("You Quit Session.")
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