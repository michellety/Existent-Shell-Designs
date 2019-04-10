$(document).ready(function () {
    console.log("document loaded");
    
    var checkoutArr = [];
    renderCart(checkoutArr);
    $(".purchase").click(function (event) {
        event.preventDefault();
        $(this).attr("disabled", true);
        var productId = $(this).attr("data-id");
        //make a new cart object
        var newCart = {
            id: productId,
            price: $(this).attr("data-price"),
            title: $(this).attr("data-title"),
            descript: $(this).attr("data-descript")
        };
        
        $.post("/api/cart", newCart, function(data) {
            console.log("this", $(this));
            checkoutArr.push(newCart);
            console.log(newCart);
            renderCart(checkoutArr);
        });

    });

    function renderCart(data) {
        $("#cart-list").html('');
        
        var total = 0;
        data.forEach((item) => {
            var list = $("<li>");
            total += Number(item.price);
            list.addClass("cart-item");
            list.html(`<input name=title-${item.descript}  type="hidden" value=${item.descript}>
                        <input name=price-${item.id}  type="hidden" value=${item.price}>
                        Product:  ${item.descript}   |   Price: $ ${item.price}`);

            $("#cart-list").prepend(list);
    
        })
        $("#cart-total").text(total);
    }

});


