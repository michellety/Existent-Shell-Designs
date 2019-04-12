$(document).ready(function () {
    console.log("document loaded");
    
    var checkoutArr = [];
    //renderCart(checkoutArr);
    // TODO: finish this 
    $.get("/api/purchases", function(result) {
        checkoutArr = result;
        if (result.length > 0) {
            renderCart(checkoutArr);
            $("#check").show();
        }
    })

    // $("#checkoutBtn").click(function(event) {
    //     event.preventDefault();
        /// clear the checkout array displayed in the shopping bag 
        //clear the cart data
    // });

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
        
        $.post("/api/cart", newCart, function(data) {
            console.log("this", $(this));
            checkoutArr.push(newCart);
            console.log(newCart);
            renderCart(checkoutArr);
        });

    });

    //clearing the shopping bag 
    $('#clear').on('click', function(){
        $.ajax({
            url: '/api/shopping-cart',
            method: 'DELETE'
        }).then(function() {
            renderCart([]);
            $('#check').hide();
        });

    });

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

});


