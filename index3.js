const myForm = document.querySelector('#form1');
const mySub = document.querySelector('#submit');
const nameInput = document.querySelector('#fname');
const emailInput = document.querySelector('#email');





myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value===''){
        alert('Enter the values!');
    }
    else{
        let myObj = {
            name:nameInput.value,
            email:emailInput.value,
        }
        let obj = JSON.stringify(myObj);
        localStorage.setItem("myObj", obj);
    }
}