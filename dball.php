
       <?php
        require_once 'db.php';
        $to = $_POST['to'];
        $from = $_POST['from'];
        db::dbconnect();
        $result = db::flightall($to,$from);
        echo json_encode($result); 
        ?>

        