// form elements
const nome = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const distance = document.getElementById('distance');
const sendBtn = document.getElementById('sendBtn');
// price element
const client = document.getElementById('client-data');
const initialPrice = document.getElementById('initial-price');
const minorDiscount = document.getElementById('minor-discount');
const overDiscount = document.getElementById('over-discount');
const finalPrice = document.getElementById('final-price');

let finalP, initialP;
let discount = {
    minor : 0,
    over : 0,
    total : 1
};

sendBtn.addEventListener('click', function(){
    if(parseInt(distance.value) > 0 && parseInt(age.value) > 0){
        // reset
        discount = {
            minor : 0,
            over : 0,
            total : 1
        };
    
        if(parseInt(age.value) < 18){
            discount.minor = 0.175
            discount.total -= discount.minor;
        }
        else if(parseInt(age.value) >= 65){
            discount.over = 0.333;
            discount.total -= discount.over;
        }
        initialP = 0.2762 * parseFloat(distance.value);
        finalP = initialP * discount.total;
        
        // output finale
        client.innerHTML = `${nome.value} ${surname.value}, ${age.value}y/o`;
        initialPrice.innerHTML = `\$${initialP.toFixed(2)}`;
        minorDiscount.innerHTML = `- \$${(initialP * discount.minor).toFixed(2)}`;
        overDiscount.innerHTML = `- \$${(initialP * discount.over).toFixed(2)}`;
        finalPrice.innerHTML = `\$${finalP.toFixed(2)}`;
        console.log(result.toFixed(2));

    }
});