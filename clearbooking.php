
        <?php
        session_start();
        unset($_SESSION['FlightDetails']);
        header('Location: searchflight.php');
        ?>

        