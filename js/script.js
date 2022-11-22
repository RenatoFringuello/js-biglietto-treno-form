const distance = document.getElementById('distance');
const age = document.getElementById('age');
const sendBtn = document.getElementById('sendBtn');
let result;
let discount;

sendBtn.addEventListener('click', function(){
    // reset
    discount = 1;

    if(parseInt(age.value) < 18){
        discount -= 0.175;
    }
    else if(parseInt(age.value) >= 65){
        discount -= 0.333;
    }
    result = 0.2762 * parseFloat(distance.value) * discount;
    
    // output finale
    console.log(result.toFixed(2));
});
