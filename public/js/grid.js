$(document).ready(function () {
    console.log("document loaded");
    
    // for (var i =0; i < checkoutArr.length; i++) {

    // }

    /// add up items in array, render total and call render cart function 

    //when the button is clicked, info saved, new object with name and price, to be displayed in the cart
    //clicks to other purchase buttons will push more data into the cart 

    var checkoutArr = [];
    renderCart(checkoutArr);
    $(".purchase").click(function () {
        var productId = $(this).attr("data-id");
        //make a new cart object
        var newCart = {
            id: productId,
            price: $(this).attr("data-price"),
            title: $(this).attr("data-title"),
            descript: $(this).attr("data-descript")
        };
        
        console.log("this", $(this));
        checkoutArr.push(newCart);
        console.log(newCart);
        renderCart(checkoutArr)

    });

    function renderCart(data) {
        $("#cart-list").html('');

        data.forEach((item) => {
            var list = $("<li>");
            list.addClass("cart-item");
            list.html(`<input name=title-${item.descript}  type="hidden" value=${item.descript}>
                        <input name=price-${item.id}  type="hidden" value=${item.price}>
                        Product:  ${item.descript} | Price: $ ${item.price}`);
            $("#cart-list").prepend(list);
    
        })
    }



    // $("#checkoutBtn").click(function() {
    //     $.post("/checkout", {data: checkoutArr}, function(data) {
    //         $(document).html(data)
    //     })
    // })

});


