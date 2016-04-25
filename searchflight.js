$(document).ready(function () {

    $('#flight-from').keyup(function () {
       var from = $('#flight-from').val();
       $.ajax({
            url: 'dbfrom.php',
            type: 'POST',
            data: {'from':from},
            dataType: 'json',
            async: false,
            success: function (data) {
              alert(data);
            }
        });
    });
    
    $('#flight-to').keyup(function () {
       alert('asdsa');
    });
});

