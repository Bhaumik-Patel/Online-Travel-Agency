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
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script src="js/searchflight.js" type="text/javascript"></script>
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
            <h2>Search Flight</h2>
            <div class="col-lg-4">
                <input class="form-control" type="text" name="flight-from" id="flight-from" placeholder="Flight From">
                <div id="flight-from-list">
                    <ul class="list-group"></ul>
                </div>
            </div>
                <div class="col-lg-4">
            <input class="form-control" type="text" name="flight-to" id="flight-to" placeholder="Flight To">
            <div id="flight-to-list">
                    <ul class="list-group"></ul>
                </div>
            </div>
            <button class="btn btn-default" type="button" id="search-flight-btn"><i class="glyphicon glyphicon-search"></i></button>
        </div>
        <div class="form-group col-md-12" id="search-result">
            <div class="form-group col-md-8">
                <table class="table table-striped">
                </table>
                <button class="btn btn-default" style="float: right" type="button" id="book-select-flight">Book Selected Flight</button>
            </div>
        </div>    
        <div class="form-group col-md-8" id="display-book-details1">
        </div>
        <div class="form-group col-md-8" id="display-book-details2">
            <table class="table table-striped">
            </table>
        </div>
        <div class="form-group col-md-8" id="display-book-details2">
            <form id='form1' method="post" action="booking.php">
                <input id="from_city" name="from_city" type="hidden">
                <input id="to_city" name="to_city" type="hidden">
                <input id="price" name="price" type="hidden">
                <input id="seats" name="seats" type="hidden">
                <label id="seats-number" style="float: left"></label>
                <button class="btn btn-default" style="float: right" type="submit" id="add-to-booking">Add to Booking</button>  
            </form>
        </div>    
        <?php
        // put your code here
        ?>
    </body>
</html>
