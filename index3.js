const myForm = document.querySelector('#form1');
const mySub = document.querySelector('#submit');
const nameInput = document.querySelector('#fname');
const emailInput = document.querySelector('#email');
const ul=document.getElementById("list-group");



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
        localStorage.setItem(nameInput.value, obj);
        showObjOnScreen(myObj);
    }
}
function showObjOnScreen(obj){
    
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${obj.name}`));
    li.appendChild(document.createTextNode(` - ${obj.email}`));
    ul.appendChild(li);

    let del = document.createElement('button');
    del.className="btn btn-danger btn-sm float-right delete";
    del.appendChild(document.createTextNode("delete"));
    li.appendChild(del);
}

ul.addEventListener('click', deleteItem);
function deleteItem(e){
    if(e.target.classList.contains('delete')){
        let user = e.target.parentElement;
        ul.removeChild(user);
        console.log(user.firstChild.textContent);
        localStorage.removeItem(user.firstChild.textContent);
    }
}