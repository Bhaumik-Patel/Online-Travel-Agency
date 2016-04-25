
        <?php
        //The database name is "poti"
        //The table name is "flights"
        
        //The username to access the database is "potiro"
        //The password to access the database is "pcXZb(kL"
//        $query_string = "select * from flights";
//        $result = mysql_query($query_string);
//        
//        $num_rows = mysql_num_rows($result);
//        if($num_rows > 0)
//        {
//         print "<table border =0>";
//         while ($row = mysql_fetch_row($result))
//         {
//             print "<tr>\n";
//             foreach ($row as $field)
//                 print "\t<td>$field</td>\n";
//             print "</tr>";
//         }
//         print "</table>";
//        }
        class db{
            public static function dbconnect(){
                $link = mysql_connect("localhost",'root','');
                if(!$link)
                      die ("Error");
                mysql_select_db("ip", $link);
                }
            public static function flightfrom($from){
                $query_string = "select from_f from flights where from_f LIKE '%$from%'";
                $result = mysql_query($query_string);
                $num_rows = mysql_num_rows($result);
                if($num_rows > 0)
                {
                 $array =array();   
                 while ($row = mysql_fetch_row($result))
                 {
                     foreach ($row as $field)
                     $array = $row;
                 }
                }
                return $array;
            }    
        }
        
        ?>

        