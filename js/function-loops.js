function ques1(){
 // 1. Write a custom function power ( a, b ), to calculate the value of
        // a raised to b.

        let power;
        let base;
        let result;

        function cal_power( base , power)
        {
            result = base;

            for(let a = 1 ; a < power ; a++ )
            {

                result = result * base;                 
                console.log(result , a);

            }

            return result;
        }



        alert("Calculate Power:")

        //input base;
        base = prompt("Enter Base:");
        if( base != null)
        {
            //input power;
            let power = prompt("Enter Power:");

            if( power != null)
            {
                
                display_power = cal_power( +base , +power); 

                console.log(base , power)
                document.write("<h4>Calculate Power:</h4>");
                document.write("Base = " + +base);
                document.write("<br>Power = " + +power);
                document.write("<br>a raised to b is equal to <b>" + display_power + "</b>");

            }
            else
            {
                alert("You didn't Enter Power\nSession Quit.")
            }
        }
        else
        {
            alert("You didn't Enter Base\nYou Quit Session.")
        } 

}

function ques2(){
 // 2. Any year is entered through the keyboard. Write a function to
        //    determine whether the year is a leap year or not.       


        let input_year;
        let display_leap_year;
        let result;

        function check_leap_year( input_year )
        {
            
            result = input_year % 4 ;

            if( result == 0 )
            {

                return 0;

            }
            else
            {

                return result;

            }

        }



        //input power;
        alert("Check Leap Year:")

        input_year = prompt("Enter Year:");
        if( ( input_year != null ) && ( input_year.length == 4 ) )
        {

            display_leap_year = check_leap_year( +input_year ); 

            console.log( input_year );
            document.write("<h4>Check Leap Year:</h4>");

            if( display_leap_year == 0 )
            {
                
                document.write("Input year <b>" + +input_year + "</b> is a leap year.");
            
            } 
            else
            {
                
                document.write("Input year <b>" + +input_year + "</b> is not a leap year.");
            
            } 

        }
        else
        {
            alert("You Quit Session.")
        } 
}

function ques3(){
          // 3. If the lengths of the sides of a triangle are denoted by a, b, and
            // c, then area of triangle is given by:

            // area = S(S − a)(S − b)(S − c)

            // where, S = ( a + b + c ) / 2     


        let length_a;
        let length_b;
        let length_c;

        let s;
        let area_of_triangle;

        function cal_area_of_triangle( length_a , length_b , length_c  )
        {

            console.log("length_a" , typeof length_a , length_a);
            console.log("length_b" , typeof length_b , length_b);
            console.log("length_c" , typeof length_c , length_c);

            s =  calculate_s( +length_a , +length_b , +length_c );
            console.log("S" , typeof s , s);


            if( s > +length_a && s > +length_b && s > +length_c)
            {
                
                area_of_triangle = s *  ( ( s - +length_a ) * ( s - +length_b ) * ( s - +length_c ) );
                console.log("area_of_triangle" , typeof area_of_triangle , area_of_triangle);
                
                return area_of_triangle;

            }
            else
            {
                
                return false;

            }

        }

// Calculate S:
        function calculate_s( )
        {
            
            let s = ( ( +length_a + +length_b + +length_c  ) / 2 );
            console.log("S" , s);
            
            return s;

        }



        // side a = base;
        // side b = perp;
        // side c = htpo;


        alert("Calculate Area of 3 Sided Triangle:")

        length_a = prompt("Enter Length a:");
        console.log( +length_a );

        if( length_a != null ) 
        {
            
            length_b = prompt("Enter Length b:");
            console.log( +length_b );

            if( length_b != null )
            {
                
                length_c = prompt("Enter Length c:");
                console.log( +length_c );

                if( length_c != null )
                {
                    area_of_triangle = cal_area_of_triangle( +length_a , +length_b , +length_c  );
                    
                    if( area_of_triangle )
                    {
                        

                        document.write("<h4>Calculate Area of 3 Sided Triangle::</h4>");
                        
                        document.write("<br>length side a = <b>" + +length_a + "</b>");
                        document.write("<br>length side b = <b>" + +length_b + "</b>");
                        document.write("<br>length side c = <b>" + +length_c + "</b>");

                        document.write("<br><br>Area of Triangle is <b>" + area_of_triangle + "</b>");
                    
                    } 
                    else if( area_of_triangle == false)
                    {
                        
                        alert("Error!\nPlease Enter the Value which is smaller than S,\nS = ( a + b + c ) / 2");
                    
                    } 
                    
                } 
                else
                {
                    
                    alert("Your didn't enter length c\nQuit Session.");
                
                } 
            
            } 
            else
            {
                
                alert("Your didn't enter length b\nQuit Session.");
            
            } 

        }
        else
        {
            alert("Your didn't enter length a\nQuit Session.");
        }
}

function ques4(){
        
      // 4. Write a function that receives marks received by a student in 3
            // subjects and returns the average and percentage of these
            // marks. there should be 3 functions one is the mainFunction
            // and other are for average and percentage. Call those functions
            // from mainFunction and display result in mainFunction.    

        // document.write(cal_avg_percent());
        let total_marks_each_subject = 100;

        let sub_1;
        let sub_2;
        let sub_3;

        var avg;
        var percentage;
        let marks;

        function cal_avg_percent( sub_1 , sub_2 , sub_3 )
        {
         
            avg = cal_avg( sub_1 , sub_2 , sub_3 );
            console.log(avg);

            marks = sub_1 + sub_2 + sub_3;
            percentage = cal_percent(marks); 
            console.log(percentage);

            document.write("<h4>Calculate Subject Marks:</h4>");
            
            document.write("<br>Total Marks of each Subject = <b>" + total_marks_each_subject + "</b>");

            document.write("<br>Subject 1= <b>" + sub_1 + "</b>");
            document.write("<br>Subject 2= <b>" + sub_2 + "</b>");
            document.write("<br>Subject 3= <b>" + sub_3 + "</b>");

            document.write("<br><br>Average Marks of Subjects: <b>" + avg + "</b>");

            document.write("<br><br>Percentage: <b>" + percentage + "%</b>");

        }


        function cal_avg( sub_1 , sub_2 , sub_3 )
        {

            avg = ( sub_1 + sub_2 + sub_3 ) / 3;
            console.log("avg" , typeof avg , avg);
            return avg;

        }

        function cal_percent(marks)
        {

            percentage = (  marks / 300 ) * 100;
            console.log("percentage" , typeof percentage , percentage);
            return percentage;

        }


        alert("Calculate Student Marks of Three Subjects:")

        sub_1 = prompt("Enter Subject 1:");
        console.log( +sub_1 );

        if( sub_1 != null ) 
        {
            
            sub_2 = prompt("Enter Subject 2:");
            console.log( +sub_2 );

            if( sub_2 != null )
            {
                
                sub_3 = prompt("Enter Subject 3:");
                console.log( +sub_3 );

                if( sub_3 != null )
                {
                      
                    cal_avg_percent( +sub_1 , +sub_2 , +sub_3 );
                
                } 
                else
                {
                    
                    alert("Your didn't enter subject 3\nQuit Session.");
                
                } 
            
            } 
            else
            {
                
                alert("Your didn't enter subject 2\nQuit Session.");
            
            } 

        }
        else
        {
            alert("Your didn't enter subject 1\nQuit Session.");
        } 
}

function ques5(){
        // 5. You have learned the function indexOf. Code your own custom
            // function that will perform the same functionality. You can code
            // for single character as of now.
   


            let total_marks_each_subject = 100;

            let avg;
            let percentage;
            let marks;
    
            function fun_index_of( lower_input , lower_character  )
            {
    
                let word_to_character = lower_input.split("");
                
                for(let a = 0 ; a < word_to_character.length ; a++)
                {
    
                    if( word_to_character[a] == lower_character )
                    {
                        console.log( word_to_character[a] , a );
                        return a;
                    }
    
                }
    
                return -1;
               
            }
    
    
            alert("Index Of Functionality:\nFind Position Of Character on First Match")
    
            let input = prompt("Enter Content:");
            console.log( input );
            let lower_input = input.toLowerCase();
    
            if( input != null ) 
            {
                let character = prompt("Enter Only One Character:");
                let lower_character = character.toLowerCase();
    
                if( character!= null ) 
                {
                    let position_charac = fun_index_of( lower_input , lower_character );
    
                    if(position_charac >= 0)
                    {
                    
                        document.write("<h4>Function that Perform Index Of Functionality:</h4>");
                        
                        document.write("<br>input: <b>" + input + "</b>");
                        document.write("<br>character: <b>" + character + "</b>");
    
                        document.write("<br>Position of first occurence of character " + character + "</b> is " + position_charac);
                    
                    }
                    else
                    {
                        alert("Character no found");
                    }
                }   
                else
                {
                    alert("Your didn't enter character \nQuit Session.");
                }
    
            }   
            else
            {
                alert("Your didn't enter input \nQuit Session.");
            } 
}

function ques6(){
        // 6. Generate the following series in your browser. See
        //     example output.
        //     a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
        //     b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        //     c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
        //     d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
        //      12k, 14k, 16k, 18k, 20k

        // declare
        var even, odd;


        counting = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];



        document.write("<h4>Generate Series:</h4>");
        
        // Display Counting 
        document.write("<h4>Counting: </h4>");
        for(var a = 1 ; a <= 15 ; a++)
        {
            document.write(a + ",");
        }
        document.write("<br><br>");

        // Display Reverse Counting 
        document.write("<h4>Reverse Counting: </h4>");
        for(var b = 10 ; b > 0 ; b--)
        {
            document.write(b + ",");
        }
        document.write("<br><br>");

        // Display Even 
        document.write("<h4>Even: </h4>");
        
        for(var b = 0 ; b <= 20 ; b++)
        {
            if( ( b%2 ) == 0 )
            {
                even = b;
                console.log(even);
                document.write(even + ",");
            }
                
        }

        document.write("<br><br>");

        // Display Odd 
         document.write("<h4>Odd: </h4>");
        for(var b = 0 ; b <= 20 ; b++)
        {
            if( ( b%2 ) !== 0 )
            {
                odd = b;
                console.log(odd);
                document.write(odd + ",");
            }
                
        }

        // Display Series 
        document.write("<h4>Series: </h4>");
        for(var b = 2 ; b <= 20 ; b+=2)
        {
            if( ( b%2 ) == 0 )
            {
                even = b;
                console.log(even);
                document.write(even + "k,");
            }
                
        }
}

function ques7(){
       // 7. You have an array
    // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
    // Write a program to enable “search by user input” in an
    // array.
    // After searching, prompt the user whether the given item is
    // found in the list or not. 

        // declare
        var  bakert_items,
        search_input,
        pos_search_input;


        bakert_items = [ "cake" ,  "apple pie",  "cookie" ,  "chips" ,  "patties" ];


        search_input = prompt("Welcome to My Bakery. What do you want to order sir/ma'am?\ncake , apple pie ,  cookie ,  chips ,  patties")
        search_input = search_input.toLowerCase();
        if (search_input != null)
        {
            // Index of match Item
            pos_search_input = bakert_items.indexOf(search_input);
            // index of match in array
            // if match posi... is >= 0
            // if not match posi... is = -1
            console.log(pos_search_input);
            if ( pos_search_input >= 0 )
            {
                alert(search_input + " is avaliable at index " + pos_search_input + " in our Bakery.");
                document.write(search_input + " is <b>avaliable</b> at index " + pos_search_input + " in our Bakery.");
            }
            // if not match posi... is = -1
            else
            {
                alert("We are sorry. " + search_input + " is not avaliable in our Bakery.");
                document.write("We are sorry. " + search_input + " is <b>not avaliable</b> in our Bakery.");
            }
        }
        else
        {
            alert("You Quit session.")
        }
    
}

function ques8(){
        // 8. Write a program to identify the largest number in the
        // given array.
        // A = [ 24 , 53 , 78 , 91 , 12 ].

        // declare
        var num, large_num = 0;  


       num = [ 24 , 53 , 78 , 91 , 12 ];
       
        for(var a = 0; a < num.length ; a++)
        {

            if( large_num < num[a])
            {
                console.log(num[a]);
                large_num = num[a];
                console.log("num[a]" ,  num[a]);
                
            }


        }
        console.log("large_num" , large_num);
        document.write("<h4>Largest Number in Array:</h4><br>");
        document.write("Array items: 24 , 53 , 78 , 91 , 12 <br><br>");
        document.write("The Largest Number is " + large_num);
       
}

function ques9(){
        
        // 9. Write a program to identify the smallst number in the
        // given array.
        // A = [ 24 , 53 , 78 , 91 , 12 ].

        // declare
       var num, small_num; 


       num = [ 24 , 53 , 78 , 91 , 12 ];
       
        for(var a = 1; a < num.length ; a++)
        {

            if( num[0] > num[a])
            {
                console.log(num[a]);
                small_num = num[a];
                console.log("num[a]" ,  num[a]);
                
            }


        }
        console.log("small_num" , small_num);
        document.write("<h4>Smallest Number in Array:</h4><br>");
        document.write("Array items: 24 , 53 , 78 , 91 , 12 <br><br>");
        document.write("The smallest Number is " + small_num);
}

function ques10(){
         //   10. Write a program to print multiples of 5 ranging 1 to 100.

        // declare
        var number_for_multi = 5,	
        	result = 1;

        console.log("Print Multiples of 5 Ranging 1 to 100:");
        document.write("<h4>Print Multiples of 5 Ranging 1 to 100:</h4>");
        for(var a = 1 ; result < 100 ; a++)
        {
            console.log(a);
       		result = a * number_for_multi;
            document.write(result + ",");
        }
}

