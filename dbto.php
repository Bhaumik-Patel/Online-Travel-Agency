
       <?php
        require_once 'db.php';
        $to = $_POST;
        $to = $to['to'];
        db::dbconnect();
        $result = db::flightto($to);
        echo json_encode($result);
          
        ?>

        