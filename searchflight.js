$(document).ready(function () {

    $('#book-select-flight').hide();
    $('#add-to-booking').hide();
    
    $('#flight-from').keyup(function () {
       $('#flight-from-list ul').empty(); 
       var from = $('#flight-from').val();
       if(from)
       {
        $.ajax({
             url: 'dbfrom.php',
             type: 'POST',
             data: {'from':from},
             dataType: 'json',
             async: false,
             success: function (data) {
               $.each(data, function(i, item) {
                   $('#flight-from-list ul').append('<a class="list-group-item">'+data[i]+'</a>');
                 });
             }
         });
        }
    });
    
    $('#flight-to').keyup(function () {
       $('#flight-to-list ul').empty(); 
       var to = $('#flight-to').val();
       if(to)
       {
        $.ajax({
             url: 'dbto.php',
             type: 'POST',
             data: {'to':to},
             dataType: 'json',
             async: false,
             success: function (data) {
               $.each(data, function(i, item) {
                   $('#flight-to-list ul').append('<a class="list-group-item">'+data[i]+'</a>');
                 });
             }
         });
        }
    });
    
    $('#flight-from-list ul').on("click",'.list-group-item',function (){
        $('#flight-from').val($(this).text());
        $('#flight-from-list ul').empty();
    })
    
    $('#flight-to-list ul').on("click",'.list-group-item',function (){
        $('#flight-to').val($(this).text());
        $('#flight-to-list ul').empty();
    })
    
    $('#search-flight-btn').on("click",function () {
       $('#book-select-flight').hide(); 
       $('#search-result table').empty(); 
       $('#display-book-details1').empty();
       $('#add-to-booking').hide();
       $('#display-book-details2 table').empty();
       var to = $('#flight-to').val();
       var from = $('#flight-from').val();
        $.ajax({
             url: 'dball.php',
             type: 'POST',
             data: {'to':to,'from':from},
             dataType: 'json',
             async: false,
             success: function (data) {
               $('#book-select-flight').show();  
               $('#search-result table').append('<tr> <th>FROM</th> <th>TO</th> <th>PRICE</th> <th></th> </tr>');
               $.each(data, function(i, item) {
                   $('#search-result table').append('<tr> <td id=f'+data[i][0]+'>'+data[i][1]+'</td> <td id=t'+data[i][0]+'>'+data[i][2]+'</td> <td id=p'+data[i][0]+'>'+data[i][3]+'</td> <td><input class="flight-checks" value='+data[i][0]+' type="checkbox"></td> </tr>');
                });
             }
         });
    });
    
    $('#search-result table').on('change','input.flight-checks', function() {
        $('#search-result table input.flight-checks').not(this).prop('checked', false);  
    });
    
    var id;
    var from_city;
    var to_city;
    var price;
    $('#book-select-flight').on("click",function(){
        $('#display-book-details1').empty();
        $('#display-book-details2 table').empty();
        $('.flight-checks:checked').each(function(){
            id = $(this).val();
        });   
        if(id){
            $('#add-to-booking').show();
            from_city = $('#f'+id).text();
            to_city = $('#t'+id).text(); 
            price = $('#p'+id).text();
            $('#display-book-details1').append('<div class="col-md-4"><strong>'+from_city+'</strong></div>');
            $('#display-book-details1').append('<div class="col-md-4"><strong>'+to_city+'</strong></div>');
            $('#display-book-details1').append('<div class="col-md-4"><strong>'+price+'</strong></div>');
        
            $('#display-book-details2 table').append('<tr> <th>SEAT</th> <th>ADULT</th> <th>Child</th> <th>Weelchair</th> <th>Special</th> </tr>');
            $('#display-book-details2 table').append('<tr> <td>Seat</td> <td><input class="seat-checks1" type="checkbox"></td> <td><input class="seat-checks1" type="checkbox"></td> <td><input class="wc-checks1" type="checkbox"></td> <td><input class="special-checks1" type="checkbox"></td> </tr>');
            $('#display-book-details2 table').append('<tr> <td>Seat</td> <td><input class="seat-checks2" type="checkbox"></td> <td><input class="seat-checks2" type="checkbox"></td> <td><input class="wc-checks2" type="checkbox"></td> <td><input class="special-checks2" type="checkbox"></td> </tr>');
            $('#display-book-details2 table').append('<tr> <td>Seat</td> <td><input class="seat-checks3" type="checkbox"></td> <td><input class="seat-checks3" type="checkbox"></td> <td><input class="wc-checks3" type="checkbox"></td> <td><input class="special-checks3" type="checkbox"></td> </tr>');
            $('#display-book-details2 table').append('<tr> <td>Seat</td> <td><input class="seat-checks4" type="checkbox"></td> <td><input class="seat-checks4" type="checkbox"></td> <td><input class="wc-checks4" type="checkbox"></td> <td><input class="special-checks4" type="checkbox"></td> </tr>');
            $('#display-book-details2 table').append('<tr> <td>Seat</td> <td><input class="seat-checks5" type="checkbox"></td> <td><input class="seat-checks5" type="checkbox"></td> <td><input class="wc-checks5" type="checkbox"></td> <td><input class="special-checks5" type="checkbox"></td> </tr>');
        
            $('#display-book-details2 table input.wc-checks1').prop('disabled', true);
            $('#display-book-details2 table input.special-checks1').prop('disabled', true);
            $('#display-book-details2 table input.wc-checks2').prop('disabled', true);
            $('#display-book-details2 table input.special-checks2').prop('disabled', true);
            $('#display-book-details2 table input.wc-checks3').prop('disabled', true);
            $('#display-book-details2 table input.special-checks3').prop('disabled', true);
            $('#display-book-details2 table input.wc-checks4').prop('disabled', true);
            $('#display-book-details2 table input.special-checks4').prop('disabled', true);
            $('#display-book-details2 table input.wc-checks5').prop('disabled', true);
            $('#display-book-details2 table input.special-checks5').prop('disabled', true);
        }
    })
    
    var seats=0,seat1=0,seat2=0,seat3=0,seat4=0,seat5=0; 
    $('#display-book-details2 table').on('change','input.seat-checks1', function() {
        $('#display-book-details2 table input.seat-checks1').not(this).prop('checked', false); 
        seat1 = $('input.seat-checks1:checked').length;
        if(seat1==0)
        {
            $('#display-book-details2 table input.wc-checks1').prop('disabled', true);
            $('#display-book-details2 table input.special-checks1').prop('disabled', true);
            $('#display-book-details2 table input.wc-checks1').prop('checked', false);
            $('#display-book-details2 table input.special-checks1').prop('checked', false);
        }
        else{
            $('#display-book-details2 table input.wc-checks1').prop('disabled', false);
            $('#display-book-details2 table input.special-checks1').prop('disabled', false);
        }
        seats = seat1+seat2+seat3+seat4+seat5;
        $('#seats-number').text('Total Seats:'+seats);
    });
    $('#display-book-details2 table').on('change','input.seat-checks2', function() {
        $('#display-book-details2 table input.seat-checks2').not(this).prop('checked', false); 
        seat2 = $('input.seat-checks2:checked').length;
        if(seat2==0)
        {
            $('#display-book-details2 table input.wc-checks2').prop('disabled', true);
            $('#display-book-details2 table input.special-checks2').prop('disabled', true);
            $('#display-book-details2 table input.wc-checks2').prop('checked', false);
            $('#display-book-details2 table input.special-checks2').prop('checked', false);
        }
        else{
            $('#display-book-details2 table input.wc-checks2').prop('disabled', false);
            $('#display-book-details2 table input.special-checks2').prop('disabled', false);
        }
        seats = seat1+seat2+seat3+seat4+seat5;
        $('#seats-number').text('Total Seats:'+seats);
    });
    $('#display-book-details2 table').on('change','input.seat-checks3', function() {
        $('#display-book-details2 table input.seat-checks3').not(this).prop('checked', false);
        seat3 = $('input.seat-checks3:checked').length;
        if(seat3==0)
        {
            $('#display-book-details2 table input.wc-checks3').prop('disabled', true);
            $('#display-book-details2 table input.special-checks3').prop('disabled', true);
            $('#display-book-details2 table input.wc-checks3').prop('checked', false);
            $('#display-book-details2 table input.special-checks3').prop('checked', false);
        }
        else{
            $('#display-book-details2 table input.wc-checks3').prop('disabled', false);
            $('#display-book-details2 table input.special-checks3').prop('disabled', false);
        }
        seats = seat1+seat2+seat3+seat4+seat5;
        $('#seats-number').text('Total Seats:'+seats);
    });
    $('#display-book-details2 table').on('change','input.seat-checks4', function() {
        $('#display-book-details2 table input.seat-checks4').not(this).prop('checked', false); 
        seat4 = $('input.seat-checks4:checked').length;
        if(seat4==0)
        {
            $('#display-book-details2 table input.wc-checks4').prop('disabled', true);
            $('#display-book-details2 table input.special-checks4').prop('disabled', true);
            $('#display-book-details2 table input.wc-checks4').prop('checked', false);
            $('#display-book-details2 table input.special-checks4').prop('checked', false);
        }
        else{
            $('#display-book-details2 table input.wc-checks4').prop('disabled', false);
            $('#display-book-details2 table input.special-checks4').prop('disabled', false);
        }
        seats = seat1+seat2+seat3+seat4+seat5;
        $('#seats-number').text('Total Seats:'+seats);
    });
    $('#display-book-details2 table').on('change','input.seat-checks5', function() {
        $('#display-book-details2 table input.seat-checks5').not(this).prop('checked', false);
        seat5 = $('input.seat-checks5:checked').length;
        if(seat5==0)
        {
            $('#display-book-details2 table input.wc-checks5').prop('disabled', true);
            $('#display-book-details2 table input.special-checks5').prop('disabled', true);
            $('#display-book-details2 table input.wc-checks5').prop('checked', false);
            $('#display-book-details2 table input.special-checks5').prop('checked', false);
        }
        else{
            $('#display-book-details2 table input.wc-checks5').prop('disabled', false);
            $('#display-book-details2 table input.special-checks5').prop('disabled', false);
        }
        seats = parseInt(seat1)+parseInt(seat2)+parseInt(seat3)+parseInt(seat4)+parseInt(seat5);
        $('#seats-number').text('Total Seats:'+seats);
    });
    
    $('#add-to-booking').on("click",function(){
        if(seats==0)
        {
            alert('Please book alteast 1 seat');
            $('#display-book-details2 #form1').submit(function(e){
            e.preventDefault();
           });
        }
        else{
            $('#from_city').val(from_city);
            $('#to_city').val(to_city);
            $('#price').val(price);
            $('#seats').val(seats);  
        }
    })
});

