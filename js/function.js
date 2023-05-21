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
function ques9(){
	// 9. Write a function that calculates the area of a rectangle.
        // A = width * height
        // Pass width and height in following manner:
        // i. Arguments as value (hard coded)
        // ii. Arguments as variables (User input)


        function calculate_area_of_rect(width , height)
        {
            let area_of_rect = width + height;
            return area_of_rect;
        }

        //input width ;
        let width = prompt("Enter width:");

        if( width != null)
        {
            //input height;
            let height = prompt("Enter  height:");

            if( height != null)
            {
                //User Input
                let user_inp_area_of_rect = calculate_area_of_rect( +width , +height);

                console.log(width , height)
                document.write("<h4>Calculate Area of Rectangle:<br>Using User Input</h4>");
                document.write("width = " + +width);
                document.write("<br>height = " + +height);
                document.write("<br>Area of Rectangle = " + user_inp_area_of_rect);
                
                //hard coded input
                width = 5;
                height = 12;
                
                user_inp_area_of_rect = calculate_area_of_rect( width , height);

                console.log(width , height)
                document.write("<h4>Calculate Area of Rectangle:<br>Assign Values</h4>");
                document.write("width = " + width);
                document.write("<br>height = " + height);
                document.write("<br>Area of Rectangle = " + user_inp_area_of_rect);
                
            }
            else
            {
                alert("You didn't Enter height\nSession Quit.")
            }
        }
        else
        {
            alert("You Quit Session.")
        }
}
function ques10(){
	// 10. Write a JavaScript function that checks whether a passed
        // string is palindrome or not?
        // A palindrome is word, phrase, or sequence that reads the same backward as
        // forward, e.g., madam.
                

        function fun_palindrome(palindrome)
        {
            let length = palindrome.length;
            let half_str = length / 2;
            console.log(half_str);
            
            let half_length = Math.floor(half_str);
            console.log(half_length);


            var start_str = palindrome.slice(0 , half_length);
            var end_str = palindrome.slice(half_length + 1 , length);
            console.log(start_str);
            console.log(end_str);

            let reverse_end_str = end_str.split("");
            let new_rev_end_str = [];

            for( let a = 0 ; a < end_str.length ; a++ )
            {
                console.log(reverse_end_str[a]);
                new_rev_end_str[a] = reverse_end_str[ --half_length ];
                console.log("replace ", new_rev_end_str[a]);
            }

            // array to String
            console.log(new_rev_end_str);
            new_rev_end_str = new_rev_end_str.join(""); 
            console.log(new_rev_end_str);
            
            
            if( start_str === new_rev_end_str )
            {
                return true;
            }
            else
            {
                return false;
            }
            
        }


        let palindrome = prompt("Enter Word to Check Palindrome:\ne.g: madam");

        if( palindrome != null)
        {
            
            document.write("<h4>Check Palindrome:</h4>");
            document.write("Input String: " + palindrome);
            
            palindrome = palindrome.toLowerCase();
            let check_palind = fun_palindrome(palindrome);

            if(check_palind == true)
            {
                document.write("<br>Your Input is Palindrome.");
            }
            else
            {
                document.write("<br>Your Input is not a Palindrome.");
            }

        }
        else
        {
            alert("You Quit Session.")
        }
}
function ques11(){
	
        // 11. Write a JavaScript function that accepts a string as a
        //     parameter and converts the first letter of each word of the
        //     string in upper case.
        //     EXAMPLE STRING : 'the quick brown fox'
        //     EXPECTED OUTPUT : 'The Quick Brown Fox'


        let input_arr = new Array (),
        letter_arr = new Array (),
        upper_letter_arr = new Array (),
        remain_small_arr = new Array (),
        reult_in_text_transform = new Array (),
        text_transform = new Array();


        function fun_convert_case(input)
        {

            input_arr = input.split(" ");
            console.log("Number of words in Input " , input_arr[i]);                 // Array nth 1st letter Display

            for(var i = 0; i < input_arr.length ; i++)
            {

                    
                    letter_arr[i] = input_arr[i].split("");
                    console.log("input_arr " + i + " word ", input_arr[i]);                 // Array nth 1st letter Display
                    console.log("letter_arr[i] ", letter_arr[i]);
                    console.log("letter_arr[0] ", letter_arr[i][0]);

                    // Arr Word 1st Letter In Upper Case
                    upper_letter_arr[i] = letter_arr[i][0].toUpperCase();
                    console.log("input_arr " + i + " " + input_arr[i] + " 1st letter in Upper Case", upper_letter_arr[i] );

                    // Arr Word remain Letters In Lower Case
                    remain_small_arr[i] = input_arr[i].substr(1);              // Array nth remain letter Display
                    remain_small_arr[i] = remain_small_arr[i].toLowerCase();              // Array nth remain letter in Lower Case
                    console.log(remain_small_arr[i]);                              // Array nth remain letter Display in Lower Case
            
                    text_transform[i] = upper_letter_arr[i]  + remain_small_arr[i];    // Combine 1st Upper Case and Last remain letter
                    console.log("letter_arr[i] " + upper_letter_arr[i] );
                    console.log("remain_small_arr[i] " + remain_small_arr[i]);
                    console.log("input_arr " + i + " word  " + input_arr[i]);
                    
                    reult_in_text_transform = text_transform.join(" ");
                    
                    if( i  == (input_arr.length-1) )
                    {
                            console.log("Text has been transfrom Successfully.");
                            console.log("Your Input Text was ",input);
                            console.log("After Text Transform:");
                            console.log("Transformed Text is ",reult_in_text_transform);
                            break;
                    }

        
            }


            return reult_in_text_transform;

        }

        // Input // profeSSor aLi nAqvi is a gReaT cOMputer sciEntIST.
    let input = prompt("Enter Your Text:\nTo Transform Text in Capitalize Format\ne.g: Hello World!");
    console.log(input);

    if( input != null )
    {
        let transform_case = fun_convert_case(input);

        alert("Text has been transfrom Successfully.");
        document.write("<h4>Text Transfrom:</h4>");
        document.write("<br>Input Text: ", input);
        document.write("<br><br>After Text Transform:");
        document.write("<br>" + transform_case);
                            
    }
    else
    {
        alert("You Quit Session.");
    } 


}
function ques12(){
	
        // 12. Write a JavaScript function that accepts a string as a
        //     parameter and find the longest word within the string.
        //     EXAMPLE STRING : 'Web Development Tutorial'


        let input_arr = new Array ();
        let long_word_num = 0,
            long_word;

        function fun_longest_word(input)
        {

            input_arr = input.split(" ");
            console.log("Number of words in Input " , input_arr.length);                 // Array nth 1st letter Display

            for(let i = 0; i < input_arr.length ; i++)
            {

                    if(long_word_num < input_arr[i].length)
                    {
                        long_word_num = input_arr[i].length;
                        long_word = input_arr[i];
                        console.log("long_word" , long_word , input_arr[i].length )
                    }
                    
                    if( i  == (input_arr.length-1) )
                    {
                            console.log("Input: " , input);
                            console.log("Longest Word: ", long_word);
                            break;
                    }

        
            }


            return long_word;

        }

        // Input // profeSSor aLi nAqvi is a gReaT cOMputer sciEntIST.
    let input = prompt("Enter Your Text:\nTo Find Longest Word in the Content");
    console.log(input);

    if( input != null )
    {
        long_word = fun_longest_word(input);

        document.write("<h4>Find Longest Word:</h4>");
        document.write("<br>Input: ", input);
        document.write("<br>Longest Word: " + long_word);
                            
    }
    else
    {
        alert("You Quit Session.");
    } 


}
function ques13(){
	// 13. Write a JavaScript function that accepts two arguments, a
        //     string and a letter and the function will count the number of
        //     function | JAVASCRIPT

        //     occurrences of the specified letter within the string.
        //     Sample arguments : 'JSResourceS.com', 'o'


        let input_arr = [];

        let display_occurrences,
            long_word,
            letter;

        var count_letter = 0;

        function fun_find_occurrences(input , letter)
        {

            let input_arr = input.split("");

            console.log("Number of words in Input " , input_arr.length);     
            console.log("Input Array" , input_arr); 
            console.log("letter in fun: " , letter); 
            

                           // Array nth 1st letter Display

            for(var i = 0 ; i < input_arr.length ; i++)
            {
                    console.log(i , input_arr[i]);

                    if( input_arr[i] === letter )
                    {
                        console.log(true);
                        count_letter++;
                        console.log("count_letter" , count_letter , input_arr[i]);
                    }
                    else
                    {
                        console.log(false, input_arr[i]);
                    }
                    
                    if( i  == (input_arr.length) )
                    {
                            console.log("Input: " , input);
                            console.log("No of Occurences: ", count_letter);
                    }

            }
            
            return count_letter;

        }

        // Input // profeSSor aLi nAqvi is a gReaT cOMputer sciEntIST.
    let input = prompt("Enter Your Text:");
    console.log(input);

    if( input != null )
    {
        letter = prompt("Enter a letter\nTo find n times occurrences:");
        console.log(letter);
        
        if( letter != null )
        {
            
            display_occurrences = fun_find_occurrences(input , letter);

            document.write("<h4>Find nTimes Occurrences of Letter:</h4>");
            document.write("<br>Input: ", input);
            document.write("<br>Letter Occurrences: " + letter);
            document.write("<br>Number of occurrences: " + display_occurrences);
                                
        }
        else
        {
            alert("You didn't enter a letter\nQuit Session.");
        }
                            
    }
    else
    {
        alert("You Quit Session.");
    } 

}
function ques14(){
	// 14. The Geometrizer
        //      1. Create 2 functions that calculate properties of a circle, using
        //     the definitions here.
        //     Create a function called calcCircumference:
        //     • Pass the radius to the function.
        //     • Calculate the circumference based on the radius, and output
        //     "The circumference is NN".

        
        //     2. Create a function called calcArea:
        //     • Pass the radius to the function.
        //     • Calculate the area based on the radius, and output "The area
        //     is NN".
        //     Circumference of circle = 2πr
        //     Area of circle = πr2


        let pie = 3.142;

        function calcCircumference(radius)
        {
            let circumference_of_circle = 2 * pie * radius;
            
            return circumference_of_circle;
        }

        function  calcArea(radius)
        {
            let area_of_circle = pie * ( radius * radius);
            
            return area_of_circle;
        }
        //input radius ;
        let radius = prompt("Enter Radius:\nFind Circumference and Area of Circle");

        if( radius != null)
        {
            
            let Circumference = calcCircumference( +radius );
            Circumference = Circumference.toFixed(3);

            let Area = calcArea( +radius );
            Area = Area.toFixed(3);
            
            //Circumference of Circle:
            document.write("<h4>Circumference of Circle:</h4>");
            document.write("radius = " + +radius);
            document.write("<br>Formula: 2 * π * r");
            document.write("<br>The circumference of circle is " + Circumference);
            
            //
            document.write("<h4>Area of Circle:</h4>");
            document.write("radius = " + +radius);
            document.write("<br>Formula: π * ( radius * radius)");
            document.write("<br>The area of circle is " + Area);
        }
        else
        {
            alert("You Quit Session.")
        }
}
