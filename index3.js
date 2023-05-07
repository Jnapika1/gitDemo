const myForm = document.querySelector('#form1');
const mySub = document.querySelector('#submit');
const nameInput = document.querySelector('#fname');
const emailInput = document.querySelector('#email');
const ul=document.getElementById("list-group");

window.addEventListener('DOMContentLoaded', ()=>{
    axios.get('https://crudcrud.com/api/748a48755d0c4b27bcbde19788b5cb0a/appointmentData')
    .then(response=>{
        for(let i=0;i<response.data.length;i++){
            showObjOnScreen(response.data[i]);
        }
        console.log(response);
    })
    .catch(err=>{
        console.log(err);
    })
})

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
        axios
        .post('https://crudcrud.com/api/748a48755d0c4b27bcbde19788b5cb0a/appointmentData', myObj)
        .then(response=>{
            showObjOnScreen(response.data);
            console.log(response)
        })
        .catch(err=>console.log(err));
        // let obj = JSON.stringify(myObj);
        // localStorage.setItem(nameInput.value, obj);
        // showObjOnScreen(myObj);
    }
}
function showObjOnScreen(obj){
    
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${obj.name}`));
    li.appendChild(document.createTextNode(` - ${obj.email}`));
    ul.appendChild(li);

    let del = document.createElement('button');
    del.className="btn btn-danger btn-sm delete";
    del.appendChild(document.createTextNode("delete"));
    li.appendChild(del);

    let edit = document.createElement('button');
    edit.type="button";
    edit.className="btn btn-secondary btn-sm float-right edit";
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);
}

ul.addEventListener('click', deleteItem);
function deleteItem(e){
    if(e.target.classList.contains('delete')){
        let user = e.target.parentElement;
        ul.removeChild(user);

        axios.get('https://crudcrud.com/api/748a48755d0c4b27bcbde19788b5cb0a/appointmentData')
        .then(response=>{
            for(let i=0;i<response.data.length;i++){
                if(response.data[i].name===user.firstChild.textContent){
                    axios
                    .delete(`https://crudcrud.com/api/748a48755d0c4b27bcbde19788b5cb0a/appointmentData/${response.data[i]._id}`)
                    .catch(err=>console.log(err));
                }
            }
        })
        .catch(err=>{
            console.log(err);
    })
        // console.log(user.firstChild.textContent);
        // localStorage.removeItem(user.firstChild.textContent);
    }
}

ul.addEventListener('click', editItem);
function editItem(e){
    if(e.target.classList.contains('edit')){
        let user = e.target.parentElement;
        ul.removeChild(user);
        // console.log(user.firstChild.textContent);
        let userDetails = JSON.parse(localStorage.getItem(user.firstChild.textContent));
        localStorage.removeItem(user.firstChild.textContent);
        
        nameInput.value=userDetails.name;
        emailInput.value=userDetails.email;
    }
}