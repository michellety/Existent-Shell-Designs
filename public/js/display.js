$(document).ready(function () {
    //controls the visablity of the contact form and shopping bag   
    $("#cForm").hide();
    $("#check").hide();

    //changes the contact info dev when the button is clicked 
    $("#contactInfo").click(function () {
        if ($("#cForm").is(":visible")) {
            $("#cForm").hide();
        } else {
            $("#cForm").show();
        };
    });

    //the shopping cart is only shown when an item is selected for purchase 
    $(".purchase").click(function () {
        $("#check").show();
    });
});