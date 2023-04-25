//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Get ElementById //

// console.log(document.getElementById('header-title'));

// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// let addItems = document.getElementById('add-items');
// // console.log(headerTitle);
// headerTitle.textContent="Hello";
// headerTitle.innerText='Goodbye';

// after adding span as 123->text content=Item Lister 123
// console.log(headerTitle.textContent);

// if we use innerText we get only Item Lister->pays attention to style
// console.log(headerTitle.innerText);

// headerTitle.innerHTML='<h3>Hello</h3>';

// header.style.borderBottom='solid 3px black';

// addItems.style.fontWeight = 'bold';
// addItems.style.color='green';

// let items = document.getElementsByClassName('list-group-item');
// //  console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[2].style.backgroundColor='green';

// for(let i=0; i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// let li=document.getElementsByTagName('li');

// for(let i=0; i<li.length;i++){
//     li[i].style.fontWeight='bold';
//     li[i].style.backgroundColor='#f4f4f4';
// }

// QuerySelector //

// let header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// let submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor="green";

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility="hidden";

// let li = document.querySelectorAll('li');
// li[1].style.color = 'white';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="#f4f4f4";
// }

// Modifying DOM using nodes

let itemList = document.querySelector('#items');

// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";

// childnodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Hello 4";

// nextsibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

// create Element
let newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'Hello Div');

let newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

let newDiv1 = document.createElement('div');

let newDivText1 = document.createTextNode('Hello');
newDiv1.appendChild(newDivText1);
let main = document.querySelector('div .list-group');
let item1 = document.querySelector('div li');
main.insertBefore(newDiv1, item1);
// console.log(newDiv);