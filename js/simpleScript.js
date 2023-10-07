// functions
function getValueOfTextField(fieldID){
    const fieldElement = document.getElementById(fieldID);
    const fieldElementValueString = fieldElement.value;
    const fieldElementValue = parseFloat(fieldElementValueString);
    return fieldElementValue;
}

function setTextElement(fieldID, value){
    const element = document.getElementById(fieldID);
    element.innerText = value;
}
// easy one
document.getElementById("btn-apply").addEventListener('click', function(){
    const regularPrice = getValueOfTextField("regular-price");
    const discountPrice = (regularPrice - regularPrice*0.3).toFixed(2);
    setTextElement("discount-price", discountPrice);
});

// hard one
document.getElementById("btn-hard-one").addEventListener('click', function(){
    window.location.href = 'hard.html';
});