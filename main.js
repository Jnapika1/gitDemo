let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

// addItem function
function addItem(e){
    e.preventDefault();
    
    // get input value
    let newItem = document.getElementById('item');

    //create new li element
    let li=document.createElement('li');
    //add class to li
    li.className='list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem.value));

    // delete button element
    let delButton = document.createElement('button');
    // add classes to delButton
    delButton.className='btn btn-danger btn-sm float-right delete';
    // append text node
    delButton.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(delButton);

    // edit button element
    let edit = document.createElement('button');
    // add classes to edit
    edit.className='btn btn-sm float-right edit'
    // append text node
    edit.appendChild(document.createTextNode('Edit'));
    //append edit button
    li.appendChild(edit);

    itemList.appendChild(li);
}

// remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete the selected item ?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}