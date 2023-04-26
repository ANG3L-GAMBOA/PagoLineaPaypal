paypal.Buttons({
    // Set up the transaction
    createOrder: function(data, actions) {
        var monto = document.getElementById('monto-pagar').value;
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: monto
                }
            }]
        });
    },
    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    }
}).render('#paypal-button-container');