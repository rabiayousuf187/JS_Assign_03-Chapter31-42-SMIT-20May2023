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
        // 6.   Write a function to delete all vowels from a sentence. Assume
        //      that the sentence is not more than 25 characters long.
   

        let pattern = /[a|e|i|o|u]/g;
        let vowel = [ "a" , "e" , "i" , "o" , "u" ];

        function fun_delete_vowel( lower_input , vowel )
        {

            let word_to_character = lower_input.split("");
            console.log(word_to_character);
            
            for(let a = 0 ; a < word_to_character.length ; a++)
            {
                console.log( word_to_character[a] , a );
                
                let work_check = pattern.test(word_to_character[a]);

                for( let b = 0 ; b < vowel.length ; b++)
                {
                    if( word_to_character[a] == vowel[b] )
                    {
                        console.log(true);
                        console.log( word_to_character[a] , a );
                        
                        let delete_after = word_to_character.splice(a , 1);
    
                        console.log( delete_after , a );
    
                    }

                }

            }

            console.log( word_to_character.join("") );
            return word_to_character.join("");
           
        }


        alert("Delete All the Vowels from a Sentence\nMax Length is 25 characters long")

        let input = prompt("Enter Content:");
        console.log( input );
        console.log( input.length );

        let lower_input = input.toLowerCase();

        if( input != null && input.length <= 25 ) 
        {
            
            // Write a function that
            let check_input = pattern.test(lower_input);
            console.log(check_input);
            
            if( check_input == true ) 
            {
                let display_delete_after = fun_delete_vowel( lower_input , vowel );
                console.log( display_delete_after );

                document.write("<h4>Delete All Vowel From Input:</h4>");
                
                document.write("<br>input: <b>" + input + "</b>");
                document.write("<br>After delete all vowel:  " + display_delete_after);

            }   
            else
            {
                alert("Vowels not Found in Your Content\nQuit Session.");
            }

        }   
        else
        {
            alert("Your didn't enter input \nQuit Session.");
        } 
}

function ques7(){
      // 7.   Write a function with switch statement to count the number of 
        //      occurrences of any two vowels in succession in a line of text. 
        
        //      For example, in the sentence

                // “Pleases read this application and give me gratuity”

        
            // Such occurrences are ea, ea, ui.

            let pattern = /[a|e|i|o|u]/g;
            let vowel = [ "a" , "e" , "i" , "o" , "u" ];
    
            let vowel_pair_result = [];
            
            let pair_letter_split_check_1;
            let pair_letter_split_check_2;
    
            let count = 0;
    
            function fun_pair_vowel( lower_input , input , vowel )
            {
                
                document.write("<h4>Show Pair Vowels From Content:</h4>");
                
                document.write("<br>input: <b>" + input + "</b>");
                
                for(let a = 0 ; a < lower_input.length ; a++)
                {
                    // 2 letters split for 2 vowels
                    let pair_letter = lower_input.slice( a , a + 2 );           
                    console.log( pair_letter , a );
                    
    
                    //split into two letters
                    let pair_letter_split = pair_letter.split("");           
                    console.log( pair_letter_split , a );
    
                    // pair_letter_split_check_1 = pattern.test(pair_letter_split[0]);
                    // pair_letter_split_check_2 = pattern.test(pair_letter_split[1]);
                    // console.log( pair_letter_split_check_1 , pair_letter_split_check_2 );
    
                    // pair_letter_split_check_1 = pair_letter_split[0].match(pattern);
                    // console.log( pair_letter_split_check_1 , pair_letter_split_check_2 );
                    
    
                    switch(pair_letter_split[0])
                    {
                        case 'a':
                        case 'e':
                        case 'i':
                        case 'o':
                        case 'u':
    
                        pair_letter_split_check_2 = pair_letter_split[1].match(pattern);
                        console.log( pair_letter_split_check_2 );
                        
                        
                        if( pair_letter_split_check_2 != null )
                        {
                            console.log( pair_letter_split , a );
    
                            var result = vowel_pair_result.push(pair_letter); 
                            console.log( vowel_pair_result );
                            console.log( result );
    
                            count++;
                            console.log(count);
                        }
                    }
                        
                        
                    // if( pair_letter_split_check_1 != null && pair_letter_split_check_2 != null )
                    // {
                        
                    //     console.log( pair_letter_split , a );
    
                    //     var result = vowel_pair_result.push(pair_letter); 
                    //     console.log( vowel_pair_result );
                    //     console.log( result );
    
                    //     count++;
    
                    // }
    
    
                }
    
                document.write("<br>Such occurrences are  <b>" + vowel_pair_result + "</b>");
                document.write("<br>Total number of occurrences:<b>" + count + "</b>");
               
            }
    
    
            alert("Fetch Vowels Pairs from a Sentence");
    
            let input = prompt("Enter Content:");
            console.log( input );
            console.log( input.length );
    
            let lower_input = input.toLowerCase();
    
            if( input != null ) 
            {
                
                // Write a function that
                let check_input = pattern.test(lower_input);
                console.log(check_input);
                
                if( check_input == true ) 
                {
                    let display_pair_vowels = fun_pair_vowel( lower_input , input , vowel );
                    console.log( display_pair_vowels );
    
                }   
                else
                {
                    alert("Vowels not Found in Your Content\nQuit Session.");
                }
    
            }   
            else
            {
                alert("Your didn't enter input \nQuit Session.");
            } 
}

function ques8(){
        // 8. The distance between two cities (in km.) is distance through the
        // keyboard. Write four functions to convert and print this
        // distance in meters, feet, inches and centimeters


        function convert_distance( distance )
        {
            
            document.write("<h4>Convert Distance in KM to :</h4>");

            let dis_meter = cal_meter( distance );
            console.log( dis_meter );

            let dis_feet = cal_feet( distance );
            console.log( dis_feet );

            let dis_inches = cal_inches( distance );
            console.log( dis_inches );

            let dis_centimeter = cal_centimeter( distance );
            console.log( dis_centimeter );

           
        }

// in meter
        function cal_meter( distance )
        {
            
            let meter = distance / 1000;

            document.write("<br><br><b>distance in meters:</b>");
            document.write("<br>distance in meters = " + meter + "m");
        }

// in feet
        function cal_feet( distance )
        {
            // formula in feet
            let feet = distance * 3280.8;

            document.write("<br><br><b>distance in feet:</b>");
            document.write("distance in feet = " + feet + "feet");
        }


// in inches
        function cal_inches( distance )
        {
            // formula in inches 1 feet  = km * 3280.8
            // inches = 12 * feet
            let inches = 12 * ( distance * 3280.8 );

            document.write("<br><br><b>distance in inches:</b>");
            document.write("<br>distance in inches = " + inches + "inches");
        }

// in centimeter
        function cal_centimeter( distance )
        {
            // formula in inches 1 feet  = km * 3280.8
            // inches = 12 * feet
            // cm = in / 0.39370
            let centimeter = ( 12 * ( distance * 3280.8 ) ) / 0.39370;

            document.write("<br><br><b>distance in centimeters:</b>");
            document.write("<br>distance in centimeter = " + centimeter + "cm");
        }

        alert("distance distance between two cities (in km.), I will Return distance\ne.g: 20km, 20KM\n\n1. in meters\n2. feet\n3. inches\n4. centimeters");

        let distance = prompt("Enter Distance:");
        console.log( distance );

        if( distance != null ) 
        {
            distance = parseFloat(distance);
            let display_convert_distance = convert_distance( distance );
            
        }
        else
        {
            alert("Your didn't enter distance \nQuit Session.");
        } 
}

function ques9(){
      
        // 9.   Write a program to calculate overtime pay of employees.
        //      Overtime is paid at the rate of Rs. 12.00 per hour for every hour
        //      worked above 40 hours. Assume that employees do not work
        //      for fractional part of an hour.


        function cal_overtime( hours , overtime_pay )
        {
            

            if( hours > 40)
            {

                let overtime = hours - 40;
                let overtime_salary = overtime * 12;  

                document.write("<h4>Calculate Overtime of an Employee:</h4>");
                document.write("Employee Working Hours: <b>" + hours + "</b>");
                document.write("<br><br>Overtime Hours: <b>" + overtime + "</b>");
                document.write("<br><br>Overtime Pay: <b>" + overtime_salary + "</b>");

            }
            else
            {
                alert("You have not any overtime hours\nOvertime start after 40 hours")
            }
           
        }


//      Overtime is paid at the rate of Rs. 12.00 per hour
        let overtime_pay = 12.00;   


        alert("Calculate Overtime of an Employee:");

        let hours = prompt("Enter Working Hours of an Employee\nOvertime is Start after 40 hours:");
        console.log( hours );

        if( hours != null ) 
        {
            hours = parseFloat(hours);
            let display_over_time = cal_overtime( +hours , overtime_pay );
            
        }
        else
        {
            alert("Your didn't enter distance \nQuit Session.");
        } 
}

function ques10(){
        // 10.  A cashier has currency notes of denominations 10, 50 and
        //      100. If the amount to be withdrawn is input through the
        //      keyboard in hundreds, find the total number of currency notes
        //      of each denomination the cashier will have to give to the
        //      withdrawer.

        let ten_less_50;
        
        function fun_input_draw( input_draw )
        {
            
            document.write("<h4>Withdraw Amount :</h4>");
            document.write("<br>Withdraw Amount: <b>" + input_draw + "</b><br>");

            amount_withdraw(input_draw);



        }


        function amount_withdraw( input_draw )
        {
            let input_draw_deci = input_draw / 100;
            console.log( input_draw_deci );
            
            let hundred = parseInt(input_draw_deci);
            console.log( hundred );

            let ten = input_draw - ( hundred * 100 );
            console.log( ten );

            if( ten == 0 )
            {
                console.log(input_draw_deci);
                document.write("You will have <b>" + hundred + "</b> hundred notes.");
        
                // return input_draw_deci;
            }
            else
            {

                let find_tens = val_tens_50( ten );

                if( ten == 50 )
                {
                    document.write("You will have <b>" + hundred + "</b> hundred notes <b>" + find_tens + " </b> fifty note.");
                    // return input_draw_deci;
                }
                else
                {

                    if( ten > 50 )
                    {
                        
                        let tens_last = val_tens( ten );
                        
                        document.write("You will have <b>" + hundred + "</b> hundred notes <b> 1 </b> fifty note <b>" + tens_last + "</b> ten notes.");
                        // return input_draw_deci;
                    
                    }
                    else
                    {

                        let tens_last = val_tens( ten );

                        document.write("You will have <b>" + hundred + "</b> hundred notes <b>" + tens_last + "</b> ten notes.");
                            
                    }
                      
                }
                
            }

        }

        function val_tens_50( ten )
        {
            
            let ten_50;

            if( ten == 50)                             // only work for == 50
            {

                ten_50 = 1;
                return 1;
                console.log( ten_50 );

            }
        }


        function val_tens( ten )
        {
            if( ten > 50  )
            {

                ten_less_50 = ten - 50;

                ten_less_50 = ten_less_50 / 10;
                console.log( ten_less_50 );
                
                return ten_less_50;

            }
            else
            {

                ten_less_50 = ten / 10;
                console.log( ten_less_50 );

                return ten_less_50;

            }

        }
        


//      Overtime is paid at the rate of Rs. 12.00 per hour
        // let hundred = 100;   
        // let hundred = 50;   
        // let hundred = 10;   


        alert("Withdraw Amount:");

        let input_draw = prompt("Enter Withdrawn Amount is in Hundreds:\nRange: 100 -- 990\,\nleast step is 10");
        console.log( input_draw );
        
        let input_draw_check = +input_draw / 100;
        input_draw_check = parseInt(input_draw_check);
        input_draw_check = +input_draw - (input_draw_check * 100 );        //value fetch after decimal
        console.log( input_draw_check );
        
        let check_deci = input_draw_check / 10;
        check_deci = parseInt(check_deci);
        input_draw_check = +input_draw_check - ( check_deci * 10 );        //value fetch after decimal
        console.log( input_draw_check );

        if( input_draw != null && +input_draw >= 100 && +input_draw <= 999 && 
        ( (+input_draw_check == 0 ) ) ) 
        {
            console.log(true);
            let display_withdraw = fun_input_draw( +input_draw );
            
        }
        else
        {
            alert("Your didn't enter Withdraw Amount in hundreds\nRange: 100 -- 990\,\nleast step is 10 \n\nQuit Session.");
        } 
}

