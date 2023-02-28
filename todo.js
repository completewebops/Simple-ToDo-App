const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const percentageDisplay = document.querySelector('#percentage');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function() {
      todo.completed = !todo.completed;
      saveTodos();
      renderTodos();
    });
    const label = document.createElement('label');
    label.textContent = todo.title;
    label.addEventListener('dblclick', function() {
      label.contentEditable = true;
      label.focus();
    });
    label.addEventListener('blur', function() {
      todo.title = label.textContent;
      saveTodos();
      label.contentEditable = false;
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      todos.splice(i, 1);
      saveTodos();
      renderTodos();
    });
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const percentage = totalTodos ? Math.floor(completedTodos / totalTodos * 100) : 0;
  percentageDisplay.textContent = `Completed: ${percentage}%`;
}

function saveTodos() {
  document.cookie = `todos=${JSON.stringify(todos)};expires=${new Date(Date.now() + 86400000).toUTCString()};path=/`;
}

function loadTodos() {
  const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('todos='));
  if (cookie) {
    todos = JSON.parse(cookie.split('=')[1]);
    renderTodos();
  }
}

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoTitle = todoInput.value.trim();
  if (todoTitle) {
    const todo = {
      title: todoTitle,
      completed: false
    };
    todos.push(todo);
    saveTodos();
    todoInput.value = '';
    renderTodos();
  }
});

loadTodos();
