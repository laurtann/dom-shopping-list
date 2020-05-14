var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//select li
var listItems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	//listen for click on new list items, toggle 'done' class on click
	li.addEventListener("click", toggleDone);

	//create delete button for new list items
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;
	li.appendChild(btn);

	input.value = "";
} 

// toggle 'done' class
function toggleDone(){
	this.classList.toggle("done");
}

// apply toggle function to existing list items
for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", toggleDone);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// return length of list
function listLength(){
	return listItems.length;
}

// create delete button for existing list items
function deleteButton(){
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(delBtn);
	delBtn.onclick = removeParent;
}

for( i=0 ; i<listLength(); i++) { 
deleteButton();
}

//remove list item on event (click)
function removeParent(event){
	event.target.parentNode.remove();
} 

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
