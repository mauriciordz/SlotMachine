$(document).ready(function() {
  $("#slot-machine").submit(function(event){
     event.preventDefault();
     
     $.post('/rolls',function(data){
      console.log(data);

      $("#die").html(data);

     });
  });
  
});


