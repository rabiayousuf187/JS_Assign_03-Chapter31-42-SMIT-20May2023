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
function ques7(){
	// 7. Write a function that take start and end number as inputs
        //     & display counting in your browser.

        let count_arr = [];
        let count= [];
        
        let a;

        function fun_counting(start_num , end_num)
        {
            a = start_num;
            if(start_num < end_num)
            {
                
                let mid_vals = ( end_num - start_num) + 1;
                for( a = 0 ; a < mid_vals ; a++ )
                {
                    console.log( "a = ", a , "(count_arr[a])" , count_arr[a] );
                    count_arr[a] = start_num;
                    console.log( " after (count_arr[a])" , count_arr[a] );

                    start_num++;
                }
               
                return count_arr;
            }

            else if(start_num > end_num)
            {
                
                let mid_vals = ( start_num - end_num) + 1;
                for( a = 0 ; a < mid_vals ; a++ )
                {
                    console.log( "a = ", a , "(count_arr[a])" , count_arr[a] );
                    count_arr[a] = start_num;
                    console.log( " after (count_arr[a])" , count_arr[a] );

                    start_num--;
                }
               
                return count_arr;
            }
            else 
            {
                return count_arr = false;
            }
            
            

        }

        //input start_num ;
        let start_num = prompt("Enter start Num:");

        if( start_num != null)
        {
            //input end_num;
            let end_num = prompt("Enter end Num:");

            if( end_num != null)
            {
                count = fun_counting( +start_num , +end_num);
                console.log(typeof count);
                // document.write(count);

                console.log(start_num , end_num);
                document.write("<h4>Counting:</h4>");
                document.write("Start Number = " + +start_num);
                document.write("<br>End Number = " + +end_num + "<br><br>");
        

                if( count )
                {
                    for(var index = 0 ; index < count.length ; index++)
                    {
                        document.write("<br>count = " + count[index] + "<br>");
                    }
                }
                else
                {
                    document.write("<br>Counting is Invalid<br>because start number " + start_num + " and end number " + end_num + " are same.<br>");
                }

            }
            else
            {
                alert("You didn't Enter End Number\nSession Quit.")
            }
        }
        else
        {
            alert("You Quit Session.")
        }

}

function ques8(){
	
        // 8. Write a nested function that computes hypotenuse of a
        //     right angle triangle.
        //     Hypotenuse2 = Base2 + Perpendicular2

        // Take base and perpendicular as inputs.
        // Outer function : calculateHypotenuse()
        // Inner function: calculateSquare()

        let sqr_num;

        function calculateHypotenuse(base , perp)
        {
            let base_sqr = calculateSquare(base);
            console.log("base_sqr" , base_sqr);

            let perp_sqr = calculateSquare(perp);
            console.log("perp_sqr" , perp_sqr);

            let hyp = base_sqr + perp_sqr;
            console.log("hyp" , hyp);

            let hyp_sqr = calculateSquare(hyp);
            console.log("hyp_sqr" , hyp_sqr);

            return hyp_sqr;

        }

        function  calculateSquare(sqr_num)
        {
            let after_sqr = Math.pow(sqr_num , 2);
            console.log("after_sqr" , after_sqr);
            return  after_sqr;

        }
        //input base ;
        let base = prompt("Enter Base:");

        if( base != null)
        {
            //input perp;
            let perp = prompt("Enter  Perpendicular:");

            if( perp != null)
            {
                let hyp = calculateHypotenuse( +base , +perp);
                // document.write(count);
                console.log(base , perp)
                document.write("<h4>Calculate Hypotenuse of a Right Angle Triangle:</h4>");
                document.write("Base = " + +base);
                document.write("<br>Perpendicular = " + +perp);
                document.write("<br>Hypotenuse = " + hyp);
                
            }
            else
            {
                alert("You didn't Enter End Number\nSession Quit.")
            }
        }
        else
        {
            alert("You Quit Session.")
        }

}
function ques8(){
	
}
function ques8(){
	
}
function ques8(){
	
}
function ques8(){
	
}
function ques8(){
	
}
