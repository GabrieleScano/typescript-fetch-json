import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

 

axios.get(url)
    .then(response => {
        const todo = response.data as Todo
        logTodo(todo)
    })

    const logTodo = (todo: Todo) => {
        const {title, completed} = todo
        console.log(`${title} is ${completed ? '' : 'not'} finished`)
    }