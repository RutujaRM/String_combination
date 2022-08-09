/*
Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g


*/

const str=prompt("Enter String");

function SubString( str , n)
    {
       for (var i = 0; i < n; i++)
           for (var j = i+1; j <= n; j++)
                document.write(str.substring(i, j)+"  ");
    }
     
     SubString( str,str.length);