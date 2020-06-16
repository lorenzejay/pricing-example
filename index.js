const basicPrice = document.getElementById('basic-price');
const professionalPrice = document.getElementById('professional-price');
const masterPrice = document.getElementById('master-price');
const button = document.querySelector('input[name=checkbox]');

button.addEventListener('change', function(){
    if (this.checked){
        basicPrice.innerText = '$199.99';
        professionalPrice.innerText = '$249.99';
        masterPrice.innerText = '$399.99'
    }
    else {
        basicPrice.innerText = '$19.99';
        professionalPrice.innerText = '$24.99';
        masterPrice.innerText = '$39.99'
    }
})