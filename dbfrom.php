
       <?php
        require_once 'db.php';
        $from = $_POST;
        $from = $from['from'];
        db::dbconnect();
        $result = db::flightfrom($from);
        print_r($result);die;
          
        ?>

        