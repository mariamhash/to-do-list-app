// Array to store tasks
let tasks = [];

// Function to render the tasks
function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.map((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = task.completed ? 'completed' : '';
    listItem.innerHTML = `
      <div>
        <strong>${task.title}</strong>: ${task.description}
      </div>
      <div>
        <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(listItem);
  });
}

// Add task function
function addTask() {
  const title = document.getElementById('task-title').value.trim();
  const description = document.getElementById('task-desc').value.trim();

  if (title && description) {
    tasks.push({ title, description, completed: false });
    renderTasks();
    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
  } else {
    alert('Please fill in both fields!');
  }
}

// Edit task function
function editTask(index) {
  const newTitle = prompt('Enter new title', tasks[index].title);
  const newDescription = prompt('Enter new description', tasks[index].description);

  if (newTitle && newDescription) {
    tasks[index].title = newTitle;
    tasks[index].description = newDescription;
    renderTasks();
  }
}

// Delete task function
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Toggle complete status
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Add event listener for Add Task button
document.getElementById('add-task-btn').addEventListener('click', addTask);

// Initial render
renderTasks();
