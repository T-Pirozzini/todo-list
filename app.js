const createTodo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority
  }
};

let todo1 = createTodo('Feed Uno', 'Our furry friend gets feral when hungry', 'July 1, 2022', 'high')

// console.log(todo1)

const title = document.getElementById('title')
console.log(title)

const addTodo = (e) => {
  e.preventDefault()
  console.log(todo1)
  title.textContent = todo1.title
  console.log(title.textContent)
  // title.value == 'value'
  // console.log(output)
  // console.log(title.value)
}

console.log(title.textContent)

const inputBtn = document.querySelector('.input-btn')
console.log(inputBtn)
inputBtn.addEventListener('click', (e) => {
  addTodo(e)
})
 



