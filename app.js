// query/id selectors
const title = document.getElementById('title')
const inputBtn = document.querySelector('.input-btn')
const todoList = document.querySelector('.todo-list')
const form = document.querySelector('form')
console.log(todoList)

// todo constructor
const createTodo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority
  }
};

// instantiate todo list array
let todos = []

// Add a test todo
todos.push(createTodo('Feed Uno', 'Our furry friend gets feral when hungry', 'July 1, 2022', 'high'))

// add a new todo to todos array
const addTodo = (e) => {
  e.preventDefault()
  // todos.push(createTodo(title.value, description.value, duedate.value, priority.value))

  let currentTodo = createTodo(title.value, description.value, duedate.value, priority.value)

  let ul = document.createElement('ul')
  let titleLi = document.createElement('li')
  let descriptionLi = document.createElement('li')
  let duedateLi = document.createElement('li')
  let priorityLi = document.createElement('li')
  
  titleLi.textContent = "Title: " + currentTodo.title
  descriptionLi.textContent = "Description: " + currentTodo.description
  duedateLi.textContent = "Duedate: " + currentTodo.dueDate
  priorityLi.textContent = "Priority: " + currentTodo.priority

  ul.appendChild(titleLi)
  ul.appendChild(descriptionLi)
  ul.appendChild(duedateLi)
  ul.appendChild(priorityLi)
  todoList.appendChild(ul)
  form.reset();  
}

// add todo on submit 'click'
inputBtn.addEventListener('click', (e) => {
  addTodo(e)  
})


 



