

/*Add the JavaScript here for the function billingFunction(). 
 It is responsible for setting and clearing the fields in Billing Information */


function billingFunction(){
    var sameElement = document.getElementById('same');
    var shipName = document.getElementById('shippingName');
    var shipZip = document.getElementById('shippingZip');

    var billName = document.getElementById('billingName');
    var billZip = document.getElementById('billingZip');

    if (sameElement.checked) {
        billName.value = shipName.value;
        billZip.value = shipZip.value;
        billName.setAttribute("required", true);
        billZip.setAttribute("required", true);
    }else{
        billName.value = "";
        billZip.value = "";
        billName.removeAttribute("required");
        billZip.removeAttribute("required");
    }
}