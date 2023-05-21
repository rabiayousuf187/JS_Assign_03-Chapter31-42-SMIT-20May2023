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
	 // 6. Writ.e a function that computes factorial of a number.
	 let result_of_factorial;

	 function fun_factorial(num)
	 {
		 // let a = num;
		 result_of_factorial = num;
		 let b = num;
		 for(let a = 1 ; a < b ; a++)
		 {
			 console.log("num", num);
			 console.log("a", a);
			 num = num - 1;
			 console.log("num - 1 =", num);
			 result_of_factorial = result_of_factorial * num;
			 console.log("result_of_factorial", result_of_factorial, num, a);
		 }
		 return result_of_factorial;
		 
	 }

	 //input num ;
	 let num = prompt("Enter Number for Factorial:");

	 if( num != null)
	 {
		 let factorial = fun_factorial(+num);
		 document.write("<h4>Factorial: </h4>");
		 document.write("input Number = " + +num);
		 document.write("<br>After Factorial = " + factorial);
	 }
	 else
	 {
		 alert("You Quit Session.")
	 }
}
function ques8(){
	
}