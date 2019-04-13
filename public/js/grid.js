

$(document).ready(function () {
    console.log("document loaded");

    var checkoutArr = [];
    //renderCart(checkoutArr);
    
    $.get("/api/purchases", function (result) {
        checkoutArr = result;
        if (result.length > 0) {
            renderCart(checkoutArr);
            $("#check").show();
        }
    })


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

        $.post("/api/cart", newCart, function (data) {
            checkoutArr.push(newCart);
            renderCart(checkoutArr);
        });

    });

    //clearing the shopping bag 
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
            total += Number(item.price);
            list.addClass("cart-item");
            list.html(`<input name=title-${item.nickname}  type="hidden" value=${item.nickname}>
                        <input name=price-${item.id}  type="hidden" value=${item.price}>
                        Product:  ${item.nickname}   |   Price: $ ${item.price}`);

            $("#cart-list").prepend(list);

        })
        $("#cart-total").text(total);
    }


    ///TODO onlick event and post for the contact form submission and saving to database
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
    function addMessage() {
        var newMessage = {
            firstName: $("#contact-first").val().trim(),
            lastName: $("#contact-last").val().trim(),
            contactEmail: $("#contact-email").val().trim(),
            message: $("#contact-message").val().trim()
        };
        return newMessage;
    }

});


