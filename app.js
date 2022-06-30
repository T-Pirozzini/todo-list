const createTodo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority
  }
};

let todo1 = createTodo('Feed Uno', 'Our furry friend gets feral when hungry', 'July 1, 2022', 'high')

console.log(todo1)

const addTodo = (e) => {
  e.preventDefault()
  console.log('CLICK')
}

const inputBtn = document.querySelector('.input-btn')
console.log(inputBtn)
inputBtn.addEventListener('click', (e) => {
  addTodo(e)
})
 



