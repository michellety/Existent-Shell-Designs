$(document).ready(function(){
      
    $("#cForm").hide();
    $("#check").hide();

   $("#contactInfo").click(function(){
         if ($("#cForm").is(":visible")) {
             $("#cForm").hide();
         } else {
             $("#cForm").show();
         };
         
    });

  $(".purchase").click(function(){
          $("#check").show();
         
   });
});