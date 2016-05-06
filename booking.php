<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
// Start the session
session_start();
?>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <title></title>
    </head>
    <body>
        <div class="col-md-12" style="margin-left: 25%;margin-top: 10px">
        <div id="navigation" class="col-md-4" style="text-align: center">
            <nav class="navbar navbar-light bg-faded" style="background-color: #563d7c">
                <a class="navbar-brand" style="color: white" href="index.php">Home</a>
                <a class="navbar-brand" style="color: white" href="searchflight.php">Search Flight</a>
                <a class="navbar-brand" style="color: white" href="booking.php">Your Booking</a>
            </nav>
        </div>
        </div>    
        <div class="form-group col-md-12" id="search-flight">
            <h2>Your Booking</h2>
        </div>
        
        <?php
        if(!empty($_POST['from_city'])){
        $from = $_POST['from_city']; 
        $to = $_POST['to_city'];
        $price = $_POST['price'];
        $seats = $_POST['seats'];
        if(empty($_SESSION['FlightDetails']))
        {
            $flight[] = array('from'=>$from,'to'=>$to,'price'=>$price,'seats'=>$seats);
            $_SESSION['FlightDetails'] = $flight;
        }
        else{
            $flight = array('from'=>$from,'to'=>$to,'price'=>$price,'seats'=>$seats);
            $flightDetails = array();
            $flightDetails = $_SESSION['FlightDetails'];
            $flightDetails[] = $flight;
            $_SESSION['FlightDetails'] = $flightDetails;
        }
        }
        ?>
        <div class="form-group col-md-8">
            <table class="table table-striped">
                <?php if(!empty($_SESSION['FlightDetails'])){
                    $flightsDisplay = array();
                    $flightsDisplay = $_SESSION['FlightDetails'];?>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>
                        <th>Seats</th>
                    </tr>
                    <?php foreach ($flightsDisplay as $flightrow): ?>
                        <tr>
                            <td><?php echo $flightrow['from']; ?></td> 
                            <td><?php echo $flightrow['to']; ?></td>
                            <td><?php echo $flightrow['price']; ?></td>
                            <td><?php echo $flightrow['seats']; ?></td>
                        </tr>    
                <?php endforeach; ?>
            </table>
            </div>
            <div class="col-md-9">
                <form class="col-md-3" method="post" action="searchflight.php">
                    <button class="btn btn-default"  type="submit" id="book-more-flight">Add More Flights</button>
                </form>
                <form class="col-md-3" method="post" action="clearbooking.php">    
                    <button class="btn btn-default"  type="submit" id="clear-booking">Clear All Flights</button>
                </form>
                <form class="col-md-3" method="post" action="#"> 
                    <button class="btn btn-default"  type="submit" id="proceed-booking">Proceed to Checkout</button>
                </form>
                </div> <?php }?>
    </body>
</html>
