let todos = [];

const todosList = document.getElementById("todos");
const todoInput = document.getElementById("textInput");
const inputButton = document.getElementById("add");
const showEnterTodo = document.getElementById("showEnterTodo");
const enterTodo = document.getElementById("enterTodo");
let arrowDirec = "";

function showTodoInput() {
	if (enterTodo.style.display == "block") {
		enterTodo.style.display = "none";
	} else {
		enterTodo.style.display = "block";
	}
	todoInput.focus();
}
showEnterTodo.addEventListener("click", showTodoInput);

function addTodo(e) {
	e.preventDefault();
	let textValue = todoInput.value;
	todos.push(textValue);
	todosList.innerHTML = "";
	renderTodos();
	todoInput.value = "";
	enterTodo.style.display = "none";
}
inputButton.addEventListener("click", addTodo);

function removeTodo(index) {
	todos = todos.filter((todo, i) => {
		return i === index ? false : true;
	});
	todosList.innerHTML = "";
	renderTodos();
}

function editTodo(index) {
	const currElement = document.querySelector(
		`#todos div:nth-child(${index + 1}) p`
	).innerText;

	const splicedText = currElement.slice(3);
	removeTodo(index);
	showTodoInput();
	todoInput.value = splicedText;
}

function renderTodos() {
	todos.forEach((todo, i) => {
		let currentHtml = todosList.innerHTML;
		let newHtml = `<div class="todoItem">
            <div class='arrows'>
                <i onclick="moveTodos(${
									i + 1
								}, this.id)" id="arrowUp" class="fa-solid fa-caret-up"></i>
                <i onclick="moveTodos(${
									i + 1
								}, this.id)" id="arrowDown" class="fa-solid fa-caret-down"></i>
            </div>
            <p>${i + 1}. ${todo}</p>
            <div class="actions">
                <i onclick="editTodo(${i})" class="fa-solid fa-pen"></i>
                <i onclick="removeTodo(${i})" class="fa-solid fa-trash-can"></i>
            </div>
        </div>`;

		let amendedHtml = currentHtml + newHtml;
		todosList.innerHTML = amendedHtml;
	});
}

function moveTodos(index, id) {
	console.log(index);
	if (id == "arrowUp") {
		console.log("up");
	}
	if (id == "arrowDown") {
		console.log("down");
	}
	//on click, if arrowUp, take index of selected text and the index of the above(previous) text, set both text to variables, swap them
	//if index is 0, dont move
	//if index a text that doesnt exsist, dont move
}

renderTodos();
