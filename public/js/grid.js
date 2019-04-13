

$(document).ready(function () {
    console.log("document loaded");

    var checkoutArr = [];
    //renderCart(checkoutArr) as the page loads
    //if there is anything left in the cart, show it 
    $.get("/api/purchases", function (result) {
        checkoutArr = result;
        if (result.length > 0) {
            renderCart(checkoutArr);
            $("#check").show();
        }
    })

    //when the purchase button is clicked, disable the button
    //create object to hold the information associated with the button/ product
    $(".purchase").click(function (event) {
        event.preventDefault();
        $(this).attr("disabled", true);
        var productId = $(this).attr("data-id");
        //make a new cart object
        var newCart = {
            id: productId,
            price: $(this).attr("data-price"),
            title: $(this).attr("data-title"),
            descript: $(this).attr("data-descript"),
            nickname: $(this).attr("data-nickname")
        };
        //add the newCart to the checkoutArr with a post request, to server through the specified route 
        $.post("/api/cart", newCart, function (data) {
            checkoutArr.push(newCart);
            renderCart(checkoutArr);
        });

    });

    //clearing the shopping bag when the clear button is clicked 
    $("#clear").on("click", function () {
        $.ajax({
            url: "/api/shopping-cart",
            method: "DELETE"
        }).then(function () {
            checkoutArr = [];
            renderCart([]);
            $("#check").hide();
        });
    });

    //show the cart items in the html
    function renderCart(data) {
        $("#cart-list").html("");
        var total = 0;
        data.forEach((item) => {
            var list = $("<li>");
            //change the items clicked for purchase to numbers then tally 
            total += Number(item.price);
            list.addClass("cart-item");
            list.html(`<input name=title-${item.nickname}  type="hidden" value=${item.nickname}>
                        <input name=price-${item.id}  type="hidden" value=${item.price}>
                        Product:  ${item.nickname}   |   Price: $ ${item.price}`);
            //new list items 
            $("#cart-list").prepend(list);
        });
        $("#cart-total").text(total);
    };

    ///when the send button is clicked, the contact form is saved to database
    //post the newMessage along the route 
    $("#send").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            url: "/api/messages",
            method: "POST",
            data: addMessage()
        }).then(function (res) {
            console.log(res);
            //clear contact form  
            $("#contact-first").val("");
            $("#contact-last").val("");
            $("#contact-email").val("");
            $("#contact-message").val("");

        });
    });

    //function to create object containing the user entered values
    function addMessage() {
        var newMessage = {
            firstName: $("#contact-first").val().trim(),
            lastName: $("#contact-last").val().trim(),
            contactEmail: $("#contact-email").val().trim(),
            message: $("#contact-message").val().trim()
        };
        return newMessage;
    };

});


