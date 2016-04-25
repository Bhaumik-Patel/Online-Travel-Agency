<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <title></title>
    </head>
    <body>
        <div id="navigation" style="text-align: center">
            <nav class="navbar navbar-light bg-faded">
                <a class="navbar-brand" href="index.php">Home</a>
                <a class="navbar-brand" href="booking.php">Your Booking</a>
                <a class="navbar-brand" href="searchflight.php">Search Flight</a>
            </nav>
        </div>
        <div class="form-group" id="search-flight">
            <h2>Your Booking</h2>
            <div class="col-lg-4">
                <input class="form-control" type="text" name="flight-from" id="flight-from" placeholder="Flight From">
            </div>
                <div class="col-lg-4">
            <input class="form-control" type="text" name="flight-to" id="flight-to" placeholder="Flight To">
            </div>
            <button class="btn btn-default" type="button" id="search"><i class="glyphicon glyphicon-search"></i></button>
        </div>
        <?php
        // put your code here
        ?>
    </body>
</html>
