
let tasks = [];

document.getElementById("submitTask").addEventListener("click", newTask);
document.getElementById("todoList").addEventListener("click", manageTasks);

function renderTasks(tasks) {
  // get the list element from the DOM
  let ul = document.getElementById("todoList");
  // make sure it is empty
  ul.innerHTML = "";
  // loop through the tasks array. for each of them we need to add the HTML markup for a todo.
  for (i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<li ${tasks[i].complete ? 'class="strike"' : ""}>
    <p>${tasks[i].detail}</p>
    <div>
      <span data-function="delete" data-detail="${tasks[i].detail}">❎</span>
      <span data-function="complete" data-detail="${tasks[i].detail}">✅</span>
    </div>
  </li>`;
    ul.appendChild(li);
  }
}

function newTask() {
  // get the value entered into the #todo input
  let todo = document.getElementById("todo").value; 
  // add it to our arrays tasks
  tasks.push({detail: todo, complete: false});
  // render out the list.
  renderTasks(tasks);
}

function removeTask(task_detail) {
  // note the use of Array.filter to remove the element from our task array
  tasks = tasks.filter(
    (task) => task.detail != task_detail
  );
  renderTasks(tasks);
}

function completeTask(task_detail) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === task_detail
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].complete = tasks[taskIndex].complete ? false : true;
  renderTasks(tasks)
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  console.log(event.currentTarget);
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't
  task_detail = event.target.getAttribute('data-detail');
  if (event.target.getAttribute('data-function') == 'delete')
  {
    removeTask(task_detail);
  }

  if (event.target.getAttribute('data-function') == 'complete')
  {
    completeTask(task_detail);
  }
  // because we added 'data-function="delete"' to each icon in a task we can access a dataset property on our target
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
}

// we need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.