function ques1(){
 //    1.   Declare and initialize an empty multidimensional array.
        //         (Array of arrays)

        // declare
        var multi_dimension_array = [];

        // Initialize
        multi_dimension_array  = [
                                  [], 
                                  [],
                                  [] 
                                ];

        document.write("var multi_dimension_array = [];<br>");
        document.write(`Multi Deminsion Array:<br>multi_dimension_array  = [
                [], 
                [],
                [] 
              ];`);
        console.log("Multi Deminsion Array: ", multi_dimension_array);


}

function ques2(){

 //    2. Declare and initialize a multidimensional array
        //       representing the following matrix:

        // Show as
                    // 0 1 2 3 
                    // 1 0 1 2
                    // 2 1 0 1  
        // declare
        var multi_dimension_array = [];

        // Initialize
        multi_dimension_array  = [
                                  [0 , 1 , 2 , 3], 
                                  [1 , 0 , 1 , 2],
                                  [2 , 1 , 0 , 1] 
                                ];

        console.log("Multi Deminsion Array: ", multi_dimension_array);
        document.write("<h4>MultiDimension Array:</h4>");
        for(var a = 0 ; a < 3 ; a++)
        {
            for(var b = 0 ; b < 4 ; b++)
            {
                document.write(multi_dimension_array[a][b] + "&nbsp;&nbsp;");
            }
                document.write("<br>");
        }

}

function ques3(){
         //    3. Write a program to print numeric counting from 1 to 10.
  
        // declare
        var  count;

        // Initialize
        document.write("<h4>Counting from 1 to 10: </h4>");
        for(count  = 1; count <= 10 ; count++)
        {
          document.write(count + "<br>");

        }
}

function ques4(){
        
        //   4. Write a program to print multiplication table of any
        //      number using for loop. Table number & length should be
        //      taken as an input from user.

 
        // declare
        var table_num, 
            table_length,
            table_result;

        // Initialize table num
        table_num = prompt("Enter a Number to show its multiplication table:")
        
        document.write("<h4>Multiplication table of " + table_num + ":</h4>");

        if ( table_num !== null)
        {
            // Initialize table length
            table_length = prompt("Enter length of multiplication table:")
            
            document.write("<h4>Length " + table_length + ":</h4>");
            
            console.log(table_num, table_length);

            if ( table_length !== null)
            {
                
                for(var a = 1 ; a <= table_length ; a++)
                {
                    table_result = table_num * a;
                    document.write(table_num + " * " + a + " = " + table_result + "<br>");
                }
            }
            else{
                alert("You didn't enter Table length\nSession has been terminated.")
            }
        }
        else{
            alert("You Quit the Session.")
        }

}

function ques5(){
        // 5. Write a program to print items of the following array
        // using for loop:
        // fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]


        // declare
        var fruits = [];

        // Initialize table num
        fruits = [ "apple" ,  "banana",  "mango" ,  "orange" , "strawberry" ];

        document.write("<h4>Print Array Item using Loop: </h4>");

        // Display array items 
        for(var a = 0 ; a < fruits.length ; a++)
        {
                document.write(fruits[a] + "<br>");
        }
        document.write("<br><br>");
        for(var b = 0 ; b < fruits.length ; b++)
        {
                document.write("Elements at index " + b + " is " + fruits[b] + ".<br>");
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

