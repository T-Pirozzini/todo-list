// query/id selectors
const title = document.getElementById("title");
const inputBtn = document.querySelector(".input-btn");
const list = document.querySelector(".list");
const form = document.querySelector("form");

// todo constructor
const createTodo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
  };
};

// instantiate todo list array
let todos = [];

// Add a test todo
todos.push(
  createTodo(
    "Feed Uno",
    "Our furry friend gets feral when hungry",
    "July 1, 2022",
    "high"
  )
);

// Remove todo
const removeTodo = (e) => {
  e.currentTarget.parentElement.parentElement.remove();
};
// Complete todo
const completeTodo = (e) => {
  const complete = document.querySelector(".completed-container");
  e.currentTarget.classList.add("completed");
  complete.appendChild(e.currentTarget.parentElement.parentElement);
  e.currentTarget.innerHTML = null;
};

// add a new todo to todos array
const addTodo = (e) => {
  e.preventDefault();

  let priorityText = "";
  if (priority.value == 1) {
    priorityText = "low";
  }
  if (priority.value == 2) {
    priorityText = "medium";
  }
  if (priority.value == 3) {
    priorityText = "high";
  }

  // push to todos array - not necessary, but might be useful later
  todos.push(
    createTodo(title.value, description.value, duedate.value, priorityText)
  );

  // create current todo
  const currentTodo = createTodo(
    title.value,
    description.value,
    duedate.value,
    priorityText
  );

  // create required elements
  const ul = document.createElement("ul");
  const titleLi = document.createElement("li");
  const descriptionLi = document.createElement("li");
  const duedateLi = document.createElement("li");
  const priorityLi = document.createElement("li");
  const complete = document.createElement("span");
  const remove = document.createElement("span");
  const div = document.createElement("div");

  // add values to elements
  titleLi.textContent = "Title: " + currentTodo.title;
  descriptionLi.textContent = "Description: " + currentTodo.description;
  duedateLi.textContent = "Deadline: " + currentTodo.dueDate;
  priorityLi.textContent = `Priority: ${currentTodo.priority}`;
  div.classList.add("update");

  //completed task button
  complete.textContent = "check_circle";
  complete.classList.add("material-symbols-outlined", "complete");
  complete.addEventListener("click", (e) => {
    completeTodo(e);
  });

  //remove task button
  remove.textContent = "delete";
  remove.classList.add("material-symbols-outlined", "remove");
  remove.addEventListener("click", (e) => {
    removeTodo(e);
  });

  // append elements to ul
  ul.appendChild(titleLi);
  ul.appendChild(descriptionLi);
  ul.appendChild(duedateLi);
  ul.appendChild(priorityLi);
  div.appendChild(complete);
  div.appendChild(remove);
  ul.appendChild(div);
  list.appendChild(ul);

  // reset the form
  form.reset();
};

// add todo on submit 'click'
inputBtn.addEventListener("click", (e) => {
  addTodo(e);
});
