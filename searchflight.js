$(document).ready(function () {

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
       $('#search-result table').empty(); 
       var to = $('#flight-to').val();
       var from = $('#flight-from').val();
        $.ajax({
             url: 'dball.php',
             type: 'POST',
             data: {'to':to,'from':from},
             dataType: 'json',
             async: false,
             success: function (data) {
               $('#search-result table').append('<tr> <th>FROM</th> <th>TO</th> <th>PRICE</th> <th></th> </tr>');
               $.each(data, function(i, item) {
                   $('#search-result table').append('<tr> <td>'+data[i][1]+'</td> <td>'+data[i][2]+'</td> <td>'+data[i][3]+'</td> <td><input class="flight-checks" type="checkbox"></td> </tr>');
                });
             }
         });
    });
    $('#search-result table').on('change','input.flight-checks', function() {
        $('#search-result table input.flight-checks').not(this).prop('checked', false);  
    });
});

