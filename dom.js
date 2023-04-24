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

let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
let addItems = document.getElementById('add-items');
// console.log(headerTitle);
// headerTitle.textContent="Hello";
// headerTitle.innerText='Goodbye';

// after adding span as 123->text content=Item Lister 123
// console.log(headerTitle.textContent);

// if we use innerText we get only Item Lister->pays attention to style
// console.log(headerTitle.innerText);

// headerTitle.innerHTML='<h3>Hello</h3>';

header.style.borderBottom='solid 3px black';

addItems.style.fontWeight = 'bold';
addItems.style.color='green';