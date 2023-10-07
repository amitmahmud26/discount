// functions
function getValueOfTextField(fieldID){
    const fieldElement = document.getElementById(fieldID);
    const fieldElementValueString = fieldElement.value;
    const fieldElementValue = parseFloat(fieldElementValueString);
    return fieldElementValue;
}

function getStringOfTextField(fieldID){
    const fieldElement = document.getElementById(fieldID);
    const fieldElementValueString = fieldElement.value;
    return fieldElementValueString;
}
function setTextElement(fieldID, value){
    const element = document.getElementById(fieldID);
    element.innerText = value;
}
// easy one
document.getElementById("btn-apply").addEventListener('click', function(){
    const coupon = getStringOfTextField("coupon");
    if(coupon === "DISC30"){
        const regularPrice = getValueOfTextField("regular-price");
        const discountPrice = (regularPrice - regularPrice*0.3).toFixed(2);
        setTextElement("discount-price", discountPrice);
    }
    else
        alert("Please enter a valid coupon");
});