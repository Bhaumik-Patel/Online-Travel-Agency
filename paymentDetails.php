<html>
<head>
<title>Complete Booking - Stage 2 of 4 - Payment Details</title>
</head>
<body>
<form method="post" action="reviewDetails.php">
    <h3>Complete Booking - Stage 2 of 4 - Payment Details</h3>   
    Credit Card Type:<br />
<input type="radio" value="visa" name="cardtype"> Visa
<input type="radio" value="diners" name="cardtype"> Diners
<input type="radio" value="mastercard" name="cardtype"> Mastercard
<input type="radio" value="amex" name="cardtype"> Amex
<br />
Credit Card Number:<input type="text" size="16" maxlength="16" name="ccn"><br />
Name on Credit Card:<input type="text" size="50" maxlength="50" name="name"><br />
Expiry Date: <input type="text" size="2" maxlength="2" name="month"> / 
<input type="text" size="2" maxlength="2" name="year"> [mm/yy]
Security Code:<input type="text" size="3" maxlength="3" name="scode"><br />

Expiry Month:
<select name="month">
<option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
<option value="07">07</option>
<option value="08">08</option>
<option value="09">09</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
</select>:<br />

Expiry year:
<select name="month">
<option value="01">16</option>
<option value="02">17</option>
<option value="03">18</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
<option value="07">07</option>
<option value="08">08</option>
<option value="09">09</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
</select>:<br />

<input type="submit" value="Stage 3 - Review Bookings and Details" name="submit">
</form> 