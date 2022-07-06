// query/id selectors
const title = document.getElementById('title')
const inputBtn = document.querySelector('.input-btn')
const list = document.querySelector('.list')
// const todoList = document.querySelector('.todo-list')
const form = document.querySelector('form')
// console.log(todoList)

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

  // push to todos array - not necessary, but might be useful later
  todos.push(createTodo(title.value, description.value, duedate.value, priority.value))
  console.log(todos)

  // create current todo
  let currentTodo = createTodo(title.value, description.value, duedate.value, priority.value)

  // create required elements
  let ul = document.createElement('ul')
  let titleLi = document.createElement('li')
  let descriptionLi = document.createElement('li')
  let duedateLi = document.createElement('li')
  let priorityLi = document.createElement('li')
  
  // add values to elements
  titleLi.textContent = "Title: " + currentTodo.title
  descriptionLi.textContent = "Description: " + currentTodo.description
  duedateLi.textContent = "Duedate: " + currentTodo.dueDate   
  priorityLi.textContent = `Priority: ${currentTodo.priority}`  

  // append elements to ul
  ul.appendChild(titleLi)
  ul.appendChild(descriptionLi)
  ul.appendChild(duedateLi)
  ul.appendChild(priorityLi)
  list.appendChild(ul)

  // reset the form
  form.reset();  
}

// add todo on submit 'click'
inputBtn.addEventListener('click', (e) => {
  addTodo(e)  
})


 



