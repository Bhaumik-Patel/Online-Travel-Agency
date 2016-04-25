<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        //The database name is "poti"
        //The table name is "flights"
        
        //The username to access the database is "potiro"
        //The password to access the database is "pcXZb(kL"

        $link = mysql_connect("rerun.it.uts.edu.au",'potiro','pcXZb(kL');
        var_dump($link);
        if(!$link)
              die ("Error");
        mysql_select_db("poti", $link);
        
        $query_string = "select * from flights";
        $result = mysql_query($query_string);
        
        $num_rows = mysql_num_rows($result);
        if($num_rows > 0)
        {
         print "<table border =0>";
         while ($row = mysql_fetch_row($result))
         {
             print "<tr>\n";
             foreach ($row as $field)
                 print "\t<td>$field</td>\n";
             print "</tr>";
         }
         print "</table>";
        }
        mysql_close($link);
        ?>
    </body>
</html>
